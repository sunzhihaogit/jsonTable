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
import { customerGroupHelper } from '@/models.v2/helper';
import { customerGroupStaticHelper } from '@/models.v2/staticHelper';

export class BaseCustomerGroup extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 客户组模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'customerGroup';
  
  
  /**
   * @class BaseCustomerGroup
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 唯一标识,
    * 字段状态: undefined
    * 字段含义: 客户组编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'groupNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    customerGroupHelper ? Object.assign(this,customerGroupHelper) : '';
  };
};

//if(customerGroupHelper) Object.assign(BaseCustomerGroup.prototype,customerGroupHelper);
if(customerGroupStaticHelper) Object.assign(BaseCustomerGroup,customerGroupStaticHelper);
export default BaseCustomerGroup;
