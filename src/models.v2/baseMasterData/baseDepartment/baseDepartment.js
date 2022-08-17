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
import { departmentHelper } from '@/models.v2/helper';
import { departmentStaticHelper } from '@/models.v2/staticHelper';

export class BaseDepartment extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 部门模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 部门主管
   * @property groupDirector
   * 字段含义: 部门主管
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDepartment"}
   */
  groupDirector ;
  
  /**
   * 业务线
   * @property businessTypes
   * 字段含义: 业务线
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDepartment"}
   */
  businessTypes ;
  
  /**
   * 排序
   * @property groupOrder
   * 字段含义: 排序
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDepartment"}
   */
  groupOrder ;
  
  /**
   * 分组节点
   * @property groupPath
   * 字段含义: 分组节点
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDepartment"}
   */
  groupPath ;
  
  /**
   * 分组所属域
   * @property realmName
   * 字段含义: 分组所属域
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDepartment"}
   */
  realmName ;
  
  /**
   * keycloak分组编码
   * @property groupId
   * 字段含义: 分组编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDepartment"}
   */
  groupId ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'udb'; // 根据具体情况配置
  static modelName = 'department';
  
  
  /**
   * @class BaseDepartment
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    departmentHelper ? Object.assign(this,departmentHelper) : '';
  };
};

//if(departmentHelper) Object.assign(BaseDepartment.prototype,departmentHelper);
if(departmentStaticHelper) Object.assign(BaseDepartment,departmentStaticHelper);
export default BaseDepartment;
