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
  BaseRecord
} from '@/models.v2/baseRecord.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { objectHelper } from '@/models.v2/helper';
import { objectStaticHelper } from '@/models.v2/staticHelper';

export class BaseObject extends BaseRecord{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 
   * @property objectType
   * 字段含义: 联系人类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  objectType ;
  
  /**
   * 
   * @property remarks
   * 字段含义: 备注
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  remarks ;
  
  /**
   * 
   * @property createUser
   * 字段含义: 创建人
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  createUser ;
  
  /**
   * 
   * @property createTime
   * 字段含义: 创建时间
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  createTime ;
  
  /**
   * 
   * @property updateUser
   * 字段含义: 修改人
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  updateUser ;
  
  /**
   * 
   * @property updateTime
   * 字段含义: 修改时间
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  updateTime ;
  
  /**
   * 
   * @property ownerId
   * 字段含义: 归属人
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  ownerId ;
  
  /**
   * 
   * @property objectNo
   * 字段含义: 联系人编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  objectNo ;
  
  /**
   * 
   * @property objectStatus
   * 字段含义: 对象状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  objectStatus ;
  
  /**
   * 
   * @property isSync
   * 字段含义: 同步状态
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  isSync ;
  
  /**
   * 
   * @property transactionTime
   * 字段含义: 交易时间
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  transactionTime ;
  
  /**
   * 
   * @property id
   * 字段含义: 数据库id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: 
   */
  id ;
  
  /**
   * 
   * @property deleteStatus
   * 字段含义: 删除状态
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  deleteStatus ;
  
  /**
   * 
   * @property rev
   * 字段含义: 版本号
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  rev ;
  
  /**
   * 
   * @property isActive
   * 字段含义: 是否启用
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  isActive ;
  
  /**
   * 
   * @property uuid
   * 字段含义: 等幂id
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  uuid ;
  
  /**
   * 允许访问的用户
   * @property allowUsers
   * 字段含义: 允许访问的用户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  allowUsers ;
  
  /**
   * 允许访问的角色
   * @property allowRoles
   * 字段含义: 允许访问的角色
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  allowRoles ;
  
  /**
   * 
   * @property isActiveStr
   * 字段含义: 是否启用
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  isActiveStr ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'object';
  
  
  /**
   * @class BaseObject
   * @constructor
   * @extends null
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    objectHelper ? Object.assign(this,objectHelper) : '';
  };
};

//if(objectHelper) Object.assign(BaseObject.prototype,objectHelper);
if(objectStaticHelper) Object.assign(BaseObject,objectStaticHelper);
export default BaseObject;
