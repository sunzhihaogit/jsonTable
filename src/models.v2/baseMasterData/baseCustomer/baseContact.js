/******************************************/
/*@author: 自动生成
/*@createTime:
/******************************************/
import {
  v4 as uuidv4
} from 'uuid';
import {
  round
} from '@/utils/index.js';

import {
  BaseMasterData
} from '@/models.v2/baseMasterData/baseMasterData.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { contactHelper } from '@/models.v2/helper';
import { contactStaticHelper } from '@/models.v2/staticHelper';

export class BaseContact extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 客户联系人模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 
   * @property customerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  customerName ;
  
  /**
   * 
   * @property position
   * 字段含义: 联系人职位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  position ;
  
  /**
   * 
   * @property mobile
   * 字段含义: 移动电话
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  mobile ;
  
  /**
   * 
   * @property officePhone
   * 字段含义: 办公电话
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  officePhone ;
  
  /**
   * 
   * @property tel
   * 字段含义: 固话电话
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  tel ;
  
  /**
   * 
   * @property fax
   * 字段含义: 传真
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  fax ;
  
  /**
   * 
   * @property mail
   * 字段含义: 邮箱
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  mail ;
  
  /**
   * 
   * @property wechat
   * 字段含义: 微信号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  wechat ;
  
  /**
   * 
   * @property customerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  customerNo ;
  
  /**
   * 
   * @property isDefault
   * 字段含义: 是否默认
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: 
   */
  isDefault ;
  
  /**
   * 
   * @property refContactId
   * 字段含义: CRM联系人ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  refContactId ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'contact';
  
  
  /**
   * @class BaseContact
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * ,
    * 字段状态: undefined
    * 字段含义: 联系人编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'contactNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    contactHelper ? Object.assign(this,contactHelper) : '';
  };
};

//if(contactHelper) Object.assign(BaseContact.prototype,contactHelper);
if(contactStaticHelper) Object.assign(BaseContact,contactStaticHelper);
export default BaseContact;
