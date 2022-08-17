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
import { businessCustomer2FinanceCustomerHelper } from '@/models.v2/helper';
import { businessCustomer2FinanceCustomerStaticHelper } from '@/models.v2/staticHelper';

export class BaseBusinessCustomer2FinanceCustomer extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 业财客户关系模型
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
   * 唯一标识
   * @property financeCustomerNo
   * 字段含义: 付款方编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  financeCustomerNo ;
  
  /**
   * 业务类型
   * @property businessType
   * 字段含义: 业务类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSO"}
   */
  businessType ;
  
  /**
   * 客户中文名称
   * @property financeCustomerName
   * 字段含义: 付款方
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  financeCustomerName ;
  
  /**
   * 默认顺序
   * @property seq
   * 字段含义: 默认顺序
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  seq ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'businessCustomer2FinanceCustomer';
  
  
  /**
   * @class BaseBusinessCustomer2FinanceCustomer
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    businessCustomer2FinanceCustomerHelper ? Object.assign(this,businessCustomer2FinanceCustomerHelper) : '';
  };
};

//if(businessCustomer2FinanceCustomerHelper) Object.assign(BaseBusinessCustomer2FinanceCustomer.prototype,businessCustomer2FinanceCustomerHelper);
if(businessCustomer2FinanceCustomerStaticHelper) Object.assign(BaseBusinessCustomer2FinanceCustomer,businessCustomer2FinanceCustomerStaticHelper);
export default BaseBusinessCustomer2FinanceCustomer;
