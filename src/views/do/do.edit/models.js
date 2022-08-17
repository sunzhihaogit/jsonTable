/* 以下是模型声明区, 这块以后可以单独剥离出去，让这页的代码结构清晰一点 */
import modules from '@/models.v2';
const {
  DictArray,
  BaseDict,
  BaseDO,
  BaseDOItem,
  BaseCustomer,
  BaseContact,
  BaseAddress,
  BaseDepartment,
  BaseBusinessCustomerSalesRep,
  BaseBusinessCustomerSalesAssistant,
  BaseUser,
  BaseAccount,
  BaseAccountItem,
  BaseSO
} = modules;
export {
  DictArray,
  BaseDict,
  BaseDO,
  BaseDOItem,
  BaseCustomer,
  BaseContact,
  BaseAddress,
  BaseDepartment,
  BaseBusinessCustomerSalesRep,
  BaseBusinessCustomerSalesAssistant,
  BaseUser,
  BaseAccount,
  BaseAccountItem,
  BaseSO
};
import {
  round,
  addressResolver
} from '@/utils/index.js';

export class TabList {
  // 页内的tab 模型
  tabs = []
  constructor() {
    this.addTab('发货单信息', 'Details');
    this.addTab('相关信息', 'Relation');
  }
  addTab(label, value, property) {
    const result = {
      label: label,
      value: value
    };
    this.tabs.push(result);
  }
}

export class DO extends BaseDO {
  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'do';
  ITEMCLASS = DOItem;
  ITEMCLASSFIELD = ['invoiceNo', 'doNo'];
  constructor(data = {}, state) {
    super(data, state);
    // 默认值
    this.exchangeRate = this.exchangeRate || 1;
    this.invoiceStatus = this.invoiceStatus || this.constructor.INVOICESTATUS.新增;
    this.currency = this.currency || '1';
    this.deliveryStatus = this.deliveryStatus || 'none';

    this.onChange('receiverContactName', this.onReceiverContactName); // 收货联系人
    this.onChange('orderLines', this.onLines);
    this.onChange('changed', this.onChanged);
    this.onChange('receiverContactAddress', this.onReceiverContactAddress); // 收货地址

    this.onReceiverContactName(null, this.receiverContactName);
  }
  async onChanged(oldVal, newVal) {
    // console.log("afterLineChange",this.validLines(line=>line.productNo).map(line=>line.amount));
    this.totalAmount = DictArray.$(this.validLines(line => line.productNo)).sum('amount');
    this.totalQuantity = DictArray.$(this.validLines(line => line.productNo)).sum('quantity');
    this.totalRows = this.validLines(line => line.productNo).length;
  }
  async onLines(oldVal, newVal) {
    this.changed = true;
  }
  toJsonObject(opts = {}) {
    opts.except=opts.except||[]
    opts.except=[...opts.except,"rebateAmount"]
    let result=super.toJsonObject(opts)
    return result
  }
  async onReceiverContactName(oldVal, newVal) {
    // console.log('onReceiverContactName', oldVal, newVal);
    if (oldVal == newVal) return;
    if (!newVal) return;
    let res = null;

    // 联系电话
    res = await Contact.fetchFromRemote2({}, [], [{
      fieldName: 'name',
      opr: 'eq',
      value: newVal
    }, {
      fieldName: 'objectType',
      opr: 'eq',
      value: Contact.CONTACTTYPE.收货联系人
    }]);

    let receiverPhoneConfig = this.constructor.fieldConfigs.find(config => config.field == 'receiverContactPhone');
    receiverPhoneConfig.select.list = DictArray.$(res.records).filter2(item => item.name == this.receiverContactName).sortBy2("seq");
    receiverPhoneConfig.select.value = 'mobile';
    receiverPhoneConfig.select.label = 'mobile';
    let receiver = receiverPhoneConfig.select.list.first() || {};
    if (oldVal) this.receiverContactPhone = null
    this.receiverContactPhone = this.receiverContactPhone || receiver.mobile;

    // 联系地址
    res = await Address.fetchFromRemote2({}, [], [{
      fieldName: 'contactName',
      opr: 'eq',
      value: newVal
    }, {
      fieldName: 'customerNo',
      opr: 'eq',
      value: this.businessCustomerNo
    }]);
    let receiverAddressConfig = this.constructor.fieldConfigs.find(config => config.field == 'receiverContactAddress');
    receiverAddressConfig.select.list = DictArray.$(res.records).sortBy2("seq");
    receiverAddressConfig.select.value = 'addrStr';
    receiverAddressConfig.select.label = 'addrStr';
    let defaultAddress = receiverAddressConfig.select.list.find((item) => item.isDefault == true) || receiverAddressConfig.select.list.first() || {}
    if (oldVal) this.receiverContactAddress = null
    this.receiverContactAddress = this.receiverContactAddress || defaultAddress.addrStr;
  };
  async onReceiverContactAddress(oldVal, newVal) {
    if (oldVal == newVal) return;
    if (!newVal) return;
    if (newVal.includes('/')) return;
    const result = await addressResolver(newVal);
    switch (result.length) {
      case 2:
        if (this.deliveryType && this.deliveryType == '6') {
          result[4] = result[1];
          result[1] = 'E';
          result[2] = 'E';
          result[3] = 'E';
        }
        break;
      case 4:
        result[4] = result[3];
        result[3] = '';
        break;
      default:
        break;
    }
    this.receiverContactAddress = result.slice(1).join('/').replace(/[\'\"\\\b\f\n\r\t]/g, '');
  }
  validate(editConfig) {
    return this.validateRule(rules => {
      editConfig = this.constructor.fieldConfigs.filter(item => item.isRequired&&this.isShow(item.field));
      let result = editConfig.find(item => this[item.field] === null || this[item.field] === '');
      if (result) {
        rules.new(!this[result.field], `${result.name}不能为空！`);
      }
    });
  }
}

export class DOItem extends BaseDOItem {
  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'doItem';
  static VALIDFIELD = 'productNo';
  selected = true;
  constructor(data = {}, state) {
    super(data, state);
    this.returnableQuantity = this.returnableQuantity || this.quantity
  }
  validate(editConfig) {
    return this.validateRule(rules => {
      let _editConfig =(editConfig|| this.constructor.fieldConfigs).filter(item => item.isRequired&&this.isShow(item.field));
      let result = _editConfig.find(item => (this[item.field] === null || this[item.field] === ''));
      // let result = _editConfig.find(item => !this[item.field]);
      if (result) {
        rules.new(!this[result.field], `第${this.lineNo}行:${result.name}不能为空！`);
      }
    });
  }
}

export class Customer extends BaseCustomer {
  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'customer';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class Contact extends BaseContact {
  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'contact';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class Address extends BaseAddress {
  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'address';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class Department extends BaseDepartment {
  static serviceName = 'udb'; // 根据具体情况配置
  static modelName = 'department';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class BusinessCustomerSalesRep extends BaseBusinessCustomerSalesRep {
  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'businessCustomerSalesRep';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class BusinessCustomerSalesAssistant extends BaseBusinessCustomerSalesAssistant {
  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'businessCustomerSalesAssistant';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class User extends BaseUser {
  static serviceName = 'udb'; // 根据具体情况配置
  static modelName = 'user';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class Account extends BaseAccount {
  ITEMCLASS = AccountItem;
  ITEMCLASSFIELD = 'headId';
  constructor(data = {}, state) {
    super(data, state);
  }
  validate(editConfig) {
    return this.validateRule(rules => {
      editConfig = this.constructor.fieldConfigs.map(item => item[item.name].filter(item => item.isRequired && this.isShow(item.field)))
      const result = editConfig.find(item => !this[item.field]);
      if (result) {
        rules.new(!this[result.field], `${result.name}不能为空！`);
      }
    });
  }
}
export class AccountItem extends BaseAccountItem {
  static serviceName = 'account'; // 需要根据具体情况赋值
  static modelName = 'accountItem';
  selected = true;
  constructor(data = {}, state) {
    super(data, state);
    this.merge(data);
  }
  validate(editConfig) {
    return this.validateRule(rules => {
      editConfig = editConfig.map(item => item[item.name].filter(item => item.isRequired && this.isShow(item.field)));
      const result = editConfig.find(item => !this[item.field]);
      if (result) {
        rules.new(!this[result.field], `${result.name}不能为空！`);
      }
    });
  }
}

export class SO extends BaseSO{
  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'so';
  ITEMCLASSFIELD =['invoiceNo','invoiceNo'];
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class Dict extends BaseDict {
  static serviceName = 'infrastructure';//需要根据具体情况赋值
  static modelName = 'dict';
  constructor(data = {}, state) {
    super(data, state);
  }
}
/* 以上是数据结构声明区 */
