/* 以下是模型声明区, 这块以后可以单独剥离出去，让这页的代码结构清晰一点 */
import modules from '@/models.v2';
const {
  DictArray,
  BaseDO,
  BaseDOItem,
  BaseUser,
  BaseDepartment,
  BaseSO,
  BaseDict,
} = modules;
export {
  DictArray,
  BaseDO,
  BaseDOItem,
  BaseUser,
  BaseDepartment,
  BaseSO,
  BaseDict,
};

export class DO extends BaseDO {
  static serviceName = 'oms';//需要根据具体情况赋值
  static modelName = 'do';
  ITEMCLASS = DOItem;
  ITEMCLASSFIELD = ['invoiceNo','doNo'];
  constructor(data = {}, state) {
    super(data, state);
  }
}

export class DOItem extends BaseDOItem {
  static serviceName = 'oms'; // 需要根据具体情况赋值
  static modelName = 'doItem';
  selected = true;
  constructor(data = {}, state) {
    super(data, state);
    this.merge(data);
  }
}

export class User extends BaseUser {
  static serviceName = 'udb'; // 需要根据具体情况赋值
  static modelName = 'user';
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
