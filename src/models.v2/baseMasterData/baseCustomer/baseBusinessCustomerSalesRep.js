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
import { businessCustomerSalesRepHelper } from '@/models.v2/helper';
import { businessCustomerSalesRepStaticHelper } from '@/models.v2/staticHelper';

export class BaseBusinessCustomerSalesRep extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 业务客户销售关系模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 唯一标识
   * @property businessCustomerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessCustomerNo ;
  
  /**
   * 客户中文名称
   * @property businessCustomerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessCustomerName ;
  
  /**
   * 销售代表ID
   * @property salesRepId
   * 字段含义: 销售代表ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  salesRepId ;
  
  /**
   * 销售代表中文名
   * @property salesRepCnName
   * 字段含义: 销售代表姓名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  salesRepCnName ;
  
  /**
   * 销售代表名称
   * @property salesRepName
   * 字段含义: 销售代表名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  salesRepName ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'businessCustomerSalesRep';
  
  
  /**
   * @class BaseBusinessCustomerSalesRep
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    businessCustomerSalesRepHelper ? Object.assign(this,businessCustomerSalesRepHelper) : '';
  };
};

//if(businessCustomerSalesRepHelper) Object.assign(BaseBusinessCustomerSalesRep.prototype,businessCustomerSalesRepHelper);
if(businessCustomerSalesRepStaticHelper) Object.assign(BaseBusinessCustomerSalesRep,businessCustomerSalesRepStaticHelper);
export default BaseBusinessCustomerSalesRep;
