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
import { userHelper } from '@/models.v2/helper';
import { userStaticHelper } from '@/models.v2/staticHelper';

export class BaseUser extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 用户模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 用户序号
   * @property userNo
   * 字段含义: 用户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  userNo ;
  
  /**
   * 登录用户名,小写与keycloak一致
   * @property username
   * 字段含义: 登录名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  username ;
  
  /**
   * 邮箱
   * @property email
   * 字段含义: 邮箱
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  email ;
  
  /**
   * 姓
   * @property lastName
   * 字段含义: 姓
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  lastName ;
  
  /**
   * 性别
   * @property sex
   * 字段含义: 性别
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  sex ;
  
  /**
   * 是否是部门主管
   * @property isDirector
   * 字段含义: 是否主管
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  isDirector ;
  
  /**
   * 上级领导人id
   * @property superiorLeadersId
   * 字段含义: 上级领导
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  superiorLeadersId ;
  
  /**
   * 上级领导人名称
   * @property superiorLeadersName
   * 字段含义: 领导名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  superiorLeadersName ;
  
  /**
   * 所有部门名称
   * @property groupName
   * 字段含义: 部门名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  groupName ;
  
  /**
   * 职位
   * @property title
   * 字段含义: 职位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  title ;
  
  /**
   * 域名
   * @property realmName
   * 字段含义: 域名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  realmName ;
  
  /**
   * 公司名
   * @property companyName
   * 字段含义: 公司名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  companyName ;
  
  /**
   * 办公电话
   * @property officePhone
   * 字段含义: 办公电话
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  officePhone ;
  
  /**
   * 电话号码
   * @property phoneNumber
   * 字段含义: 电话号码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  phoneNumber ;
  
  /**
   * 用户头像文件id
   * @property userImage
   * 字段含义: 头像id
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  userImage ;
  
  /**
   * 所有部门id
   * @property groupId
   * 字段含义: 部门编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  groupId ;
  
  /**
   * 名称
   * @property firstName
   * 字段含义: 名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
   */
  firstName ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'udb'; // 根据具体情况配置
  static modelName = 'user';
  
  
  /**
   * @class BaseUser
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * keycloak用户id,
    * 字段状态: undefined
    * 字段含义: 用户id
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置建模":"BaseUser"}
    */
    this.alias('userNo', 'userId');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    userHelper ? Object.assign(this,userHelper) : '';
  };
};

//if(userHelper) Object.assign(BaseUser.prototype,userHelper);
if(userStaticHelper) Object.assign(BaseUser,userStaticHelper);
export default BaseUser;
