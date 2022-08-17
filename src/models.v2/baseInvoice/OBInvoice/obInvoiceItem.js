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
  BaseInvoiceItem
} from '@/models.v2/baseInvoice/baseInvoiceItem.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { oBInvoiceItemHelper } from '@/models.v2/helper';

export class OBInvoiceItem extends BaseInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 销售凭证行基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 业务客户主数据编号
   * @property businessCustomerNo
   * 字段含义: 业务客户编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlowItem"}
   */
  businessCustomerNo = null;
  
  /**
   * 业务客户名称
   * @property businessCustomerName
   * 字段含义: 业务客户名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlowItem"}
   */
  businessCustomerName = null;
  
  /**
   * 财务客户主数据编号
   * @property financeCustomerNo
   * 字段含义: 财务客户编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlowItem"}
   */
  financeCustomerNo = null;
  
  /**
   * 财务客户名称
   * @property financeCustomerName
   * 字段含义: 财务客户名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlowItem"}
   */
  financeCustomerName = null;
  
  /**
   * 是否自动核销
   * @property isAutoWriteoff
   * 字段含义: 是否自动核销
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  isAutoWriteoff = null;
  
  /**
   * 产品描述
   * @property productDescription
   * 字段含义: 产品描述
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productDescription = null;
  
  /**
   * 如世家宝、SVBC
   * @property productBrand
   * 字段含义: 产品品牌
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productBrand = null;
  
  /**
   * 价单维护价格
   * @property listPrice
   * 字段含义: 价单价格
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  listPrice = null;
  
  /**
   * 内部批次号
   * @property batchNo
   * 字段含义: 内部批次号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  batchNo = null;
  
  /**
   * 开票日期
   * @property taxInvoiceDate
   * 字段含义: 开票日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxInvoiceDate = null;
  
  /**
   * 产品编号
   * @property productNo
   * 字段含义: 产品编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productNo = null;
  
  /**
   * 产品内码
   * @property productSn
   * 字段含义: 产品内码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productSn = null;
  
  /**
   * 开票状态
   * @property taxInvoiceStatus
   * 字段含义: 开票状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxInvoiceStatus = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'obInvoiceItem';
  
  
  /**
   * @class OBInvoiceItem
   * @constructor
   * @extends BaseInvoiceItem
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 币种,
    * 字段状态: undefined
    * 字段含义: 币种
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlowItem"}
    */
    this.alias('originalCurrency', 'currency');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    oBInvoiceItemHelper ? this.merge(oBInvoiceItemHelper) : '';
  };
};
export default OBInvoiceItem;
