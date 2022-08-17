/* 以下是模型声明区, 这块以后可以单独剥离出去，让这页的代码结构清晰一点 */
import modules from '@/models.v2';
const {
  DictArray,
  Query,
  BaseUser,
  BaseDict,
  BaseDO,
  BaseDOItem
} = modules;
export {
  DictArray,
  Query,
  BaseUser,
  BaseDict,
  BaseDO,
  BaseDOItem
};

export class DO extends BaseDO {
  static serviceName = 'oms';//需要根据具体情况赋值
  static modelName = 'do';

  ITEMCLASS = DOItem;
  ITEMCLASSFIELD = ['invoiceNo','doNo'];
  constructor(data = {}, state) {
    super(data, state);
  }
  validate(editConfig) {
    return this.validateRule(rules => {
      editConfig = editConfig.filter(item => item.isRequired&&this.isShow(item.field)).reduce((r, item) => { r = [...r, ...item]; return r; }, []).filter(item => item);

      let result = editConfig.find(item => !this[item.field]);
      if (result) {
        rules.new(!this[result.field], `${result.name}不能为空！`);
      }
    });
  }
}


export class DOItem extends BaseDOItem {
  static serviceName = 'oms'; // 需要根据具体情况赋值
  static modelName = 'doItem';
  selected = true;
  constructor(data = {}, state) {
    super(data, state);
  }
}


export class User extends BaseUser {
  static serviceName = 'udb'; // 需要根据具体情况赋值
  static modelName = 'user';
  constructor(data = {}, state) {
    super(data, state);
  }
}


/* 以上是数据结构声明区 */
