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
  BasePartner
} from '@/models.v2/baseMasterData/basePartner/basePartner.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { customerHelper } from '@/models.v2/helper';
import { customerStaticHelper } from '@/models.v2/staticHelper';

export class BaseCustomer extends BasePartner{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 客户模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 判断客户业务或财务属性，财务客户是收款和开增值税发票的客户
   * @property isFinanceCustomer
   * 字段含义: 付款方
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  isFinanceCustomer ;
  
  /**
   * 判断客户业务或财务属性，业务客户为下单客户
   * @property isBusinessCustomer
   * 字段含义: 客户
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  isBusinessCustomer ;
  
  /**
   * 职业装、零剪、订货、集团
   * @property businessType
   * 字段含义: 业务类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  businessType ;
  
  /**
   * EMT，IT，零剪销售部，全公司等
   * @property department
   * 字段含义: 所属部门
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  department ;
  
  /**
   * 是客户付款类型标签，月结、现金，空，是一个业务标签，纯财务客户该值为空，非月结客户均为现金
   * @property paymentChannel
   * 字段含义: 付款方式
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  paymentChannel ;
  
  /**
   * 标记客户自动核销属性
   * @property isAutoWriteOff
   * 字段含义: 自动核销
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  isAutoWriteOff ;
  
  /**
   * 客户税务发票抬头编辑
   * @property taxInvoiceTitle
   * 字段含义: 发票抬头
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  taxInvoiceTitle ;
  
  /**
   * 发货时的织标配比，默认为3，财务客户不需要
   * @property labelRate
   * 字段含义: 织标配比
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  labelRate ;
  
  /**
   * 客户归属的销售代表，财务客户显示空值
   * @property salesRep
   * 字段含义: 销售代表
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  salesRep ;
  
  /**
   * 客户归属的销售助理，财务客户显示财务端操作人，
   * @property salesAssistant
   * 字段含义: 销售助理
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  salesAssistant ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'customer';
  
  
  /**
   * @class BaseCustomer
   * @constructor
   * @extends BasePartner
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 唯一标识,
    * 字段状态: undefined
    * 字段含义: 客户类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
    */
    this.alias('objectType', 'customerType');
    
    
    /*
    * 唯一标识,
    * 字段状态: undefined
    * 字段含义: 客户状态
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
    */
    this.alias('objectStatus', 'customerStatus');
    
    
    /*
    * 唯一标识,
    * 字段状态: undefined
    * 字段含义: 客户编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
    */
    this.alias('objectNo', 'customerNo');
    
    
    /*
    * 记录客户曾用SAP编码,
    * 字段状态: undefined
    * 字段含义: 客户SAP编码
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
    */
    this.alias('refMasterDataNo', 'refCustomerNo');
    
    
    /*
    * ,
    * 字段状态: undefined
    * 字段含义: 状态 
    * 字段类型: Integer
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
    */
    this.alias('objectStatus', 'statusInteger');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    customerHelper ? Object.assign(this,customerHelper) : '';
  };
};

//if(customerHelper) Object.assign(BaseCustomer.prototype,customerHelper);
if(customerStaticHelper) Object.assign(BaseCustomer,customerStaticHelper);
export default BaseCustomer;
