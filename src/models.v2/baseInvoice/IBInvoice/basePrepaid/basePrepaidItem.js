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
  IBInvoiceItem
} from '@/models.v2/baseInvoice/IBInvoice/ibInvoiceItem.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { prepaidItemHelper } from '@/models.v2/helper';

export class BasePrepaidItem extends IBInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 预付单明细模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 支付申请单号
   * @property payRequestNo
   * 字段含义: 支付申请单号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  payRequestNo = null;
  
  /**
   * 申请币种
   * @property applicationCurrency
   * 字段含义: 申请币种
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  applicationCurrency = null;
  
  /**
   * 申请金额
   * @property applicationAmount
   * 字段含义: 申请金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  applicationAmount = null;
  
  /**
   * 合同号
   * @property contractNo
   * 字段含义: 合同号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  contractNo = null;
  
  /**
   * 收款银行账户
   * @property recAccountBank
   * 字段含义: 收款银行账户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  recAccountBank = null;
  
  /**
   * 收款银行名称
   * @property recAccountBankName
   * 字段含义: 收款银行名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  recAccountBankName = null;
  
  /**
   * swiftCode
   * @property swiftCode
   * 字段含义: swiftCode
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  swiftCode = null;
  
  /**
   * 收款人
   * @property recCompany
   * 字段含义: 收款人
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  recCompany = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'finance-cost-engine/api'; // 根据具体情况配置
  static modelName = 'prepaidItem';
  
  
  /**
   * @class BasePrepaidItem
   * @constructor
   * @extends IBInvoiceItem
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 申请汇率,
    * 字段状态: undefined
    * 字段含义: 申请汇率
    * 字段类型: BigDecimal
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
    */
    this.alias('exchangeRate', 'applicationRate');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    prepaidItemHelper ? this.merge(prepaidItemHelper) : '';
  };
};
export default BasePrepaidItem;
