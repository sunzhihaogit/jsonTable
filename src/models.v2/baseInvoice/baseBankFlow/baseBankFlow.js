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
  BaseInvoice
} from '@/models.v2/baseInvoice/baseInvoice.js';


import {
  BaseBankFlowItem
} from './baseBankFlowItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { bankFlowHelper } from '@/models.v2/helper';

export class BaseBankFlow extends BaseInvoice{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 流水单模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 批次编号
   * @property flowBatchNo
   * 字段含义: 批次编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  flowBatchNo = null;
  
  /**
   * 银行流水号
   * @property bankSerialNo
   * 字段含义: 银行流水号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  bankSerialNo = null;
  
  /**
   * 收款名称
   * @property receiptName
   * 字段含义: 收款名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  receiptName = null;
  
  /**
   * 收款金额
   * @property receiptAmount
   * 字段含义: 收款金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  receiptAmount = null;
  
  /**
   * 人民币、美金、港币、新台币、英镑
   * @property receiptCurrency
   * 字段含义: 收款币种
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  receiptCurrency = null;
  
  /**
   * 收款银行
   * @property bankName
   * 字段含义: 收款银行
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  bankName = null;
  
  /**
   * 付款名称
   * @property payerName
   * 字段含义: 付款名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  payerName = null;
  
  /**
   * 价内手续费
   * @property serviceChargeWithinPrice
   * 字段含义: 价内手续费
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  serviceChargeWithinPrice = null;
  
  /**
   * 转换金额
   * @property toAmount
   * 字段含义: 转换金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  toAmount = null;
  
  /**
   * 转换币种
   * @property toCurrency
   * 字段含义: 转换币种
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  toCurrency = null;
  
  /**
   * 转换汇率
   * @property toExchangeRate
   * 字段含义: 转换汇率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  toExchangeRate = null;
  
  /**
   * 分解金额
   * @property usedAmount
   * 字段含义: 已分解金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  usedAmount = null;
  
  /**
   * 剩余金额
   * @property notUsedAmount
   * 字段含义: 剩余金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  notUsedAmount = null;
  
  /**
   * 价外手续费
   * @property serviceCharge
   * 字段含义: 价外手续费
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  serviceCharge = null;
  
  /**
   * 是否生成预收款单
   * @property withPrereceipt
   * 字段含义: 是否生成预收款单
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  withPrereceipt = null;
  
  /**
   * 分解状态
   * @property usedStatus
   * 字段含义: 分解状态
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
   */
  usedStatus = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'finance-middle-platform'; // 根据具体情况配置
  static modelName = 'bankFlow';
  ITEMCLASS = BaseBankFlowItem;
  ITEMCLASSFIELD = ['id','headId'];
  /**
   * @class BaseBankFlow
   * @constructor
   * @extends BaseInvoice
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 收款日期,
    * 字段状态: undefined
    * 字段含义: 收款日期
    * 字段类型: LocalDateTime
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlow"}
    */
    this.alias('transactionTime', 'receiptDate');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    bankFlowHelper ? this.merge(bankFlowHelper) : '';
  };
};
export default BaseBankFlow;
