/* 以下是模型声明区, 这块以后可以单独剥离出去，让这页的代码结构清晰一点 */
import modules from '@/models.v2';
const {
  DictArray,
  BaseDO,
  BaseDOItem,
  BaseCustomer,
  BaseContact,
  BaseAddress,
  BaseDepartment,
  BaseBusinessCustomerSalesRep,
  BaseBusinessCustomerSalesAssistant,
  BaseUser,
  BaseDict,
  BaseSO
} = modules;
export {
  DictArray,
  BaseDO,
  BaseDOItem,
  BaseCustomer,
  BaseContact,
  BaseAddress,
  BaseDepartment,
  BaseBusinessCustomerSalesRep,
  BaseBusinessCustomerSalesAssistant,
  BaseUser,
  BaseDict,  
  BaseSO
};
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
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class DOItem extends BaseDOItem {
  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'doItem';
  selected = true;
  constructor(data = {}, state) {
    super(data, state);
    this.returnableQuantity=this.returnableQuantity||this.quantity
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
export class SO extends BaseSO {
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
