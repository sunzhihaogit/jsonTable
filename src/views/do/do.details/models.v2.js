/* 以下是模型声明区, 这块以后可以单独剥离出去，让这页的代码结构清晰一点 */
import modules from '@/models.v2';

const {
  DictArray,
  BaseDict,
  Query,
  BaseDO,
  BaseDOItem,
  
  BaseCustomer,
  
  BaseDepartment,
  
  BaseBusinessCustomerSalesRep,
  
  BaseBusinessCustomerSalesAssistant,
  
  BaseContact,
  
  BaseAddress,
  
  BaseUser,
  
} = modules;
export {
  DictArray,
  BaseDict,
  Query,
  BaseDO,
  BaseDOItem,
  
  BaseCustomer,
  
  BaseDepartment,
  
  BaseBusinessCustomerSalesRep,
  
  BaseBusinessCustomerSalesAssistant,
  
  BaseContact,
  
  BaseAddress,
  
  BaseUser,
  
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

export class DO extends BaseDO{
  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'do';
  ITEMCLASS = DOItem;
  ITEMCLASSFIELD = ['invoiceNo','doNo'];
  constructor(data = {}, state) {
    super(data, state);
    //以下可配置字段在编辑和显示页中的显示开关
    //this.needShow("saleChanceCode",()=>[DO.BUSINESSTYPE.职业装].includes(this.businessType))
  }
}


export class DOItem extends BaseDOItem {
  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'doItem';
  selected = true;
  constructor(data = {}, state) {
    super(data, state);
    //以下可配置字段在编辑和显示页中的显示开关
    //this.needShow("saleChanceCode",()=>[DOItem.BUSINESSTYPE.职业装].includes(this.businessType))
  }
}





export class Customer extends BaseCustomer {
  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'customer';
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

export class Contact extends BaseContact {
  static serviceName = 'undefined'; // 根据具体情况配置
  static modelName = 'undefined';
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class Address extends BaseAddress {
  static serviceName = 'undefined'; // 根据具体情况配置
  static modelName = 'undefined';
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


/* 以上是数据结构声明区 */
