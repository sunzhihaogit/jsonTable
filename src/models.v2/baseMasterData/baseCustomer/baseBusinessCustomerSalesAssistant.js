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
import { businessCustomerSalesAssistantHelper } from '@/models.v2/helper';
import { businessCustomerSalesAssistantStaticHelper } from '@/models.v2/staticHelper';

export class BaseBusinessCustomerSalesAssistant extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 业务客户助理关系模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 业务客户编号
   * @property businessCustomerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessCustomerNo ;
  
  /**
   * 业务客户名称
   * @property businessCustomerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessCustomerName ;
  
  /**
   * 销售助理ID
   * @property salesAssistantId
   * 字段含义: 销售助理ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  salesAssistantId ;
  
  /**
   * 销售助理中文名
   * @property salesAssistantCnName
   * 字段含义: 销售助理姓名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  salesAssistantCnName ;
  
  /**
   * 销售助理名称
   * @property salesAssistantName
   * 字段含义: 销售助理名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  salesAssistantName ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'businessCustomerSalesAssistant';
  
  
  /**
   * @class BaseBusinessCustomerSalesAssistant
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    businessCustomerSalesAssistantHelper ? Object.assign(this,businessCustomerSalesAssistantHelper) : '';
  };
};

//if(businessCustomerSalesAssistantHelper) Object.assign(BaseBusinessCustomerSalesAssistant.prototype,businessCustomerSalesAssistantHelper);
if(businessCustomerSalesAssistantStaticHelper) Object.assign(BaseBusinessCustomerSalesAssistant,businessCustomerSalesAssistantStaticHelper);
export default BaseBusinessCustomerSalesAssistant;
