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
  OBInvoiceItem
} from './obInvoiceItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { oBInvoiceHelper } from '@/models.v2/helper';

export class OBInvoice extends BaseInvoice{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 销售凭证基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 原币
   * @property contactAddress
   * 字段含义: 联系地址
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  contactAddress = null;
  
  /**
   * 汇率
   * @property taxInvoiceCompany
   * 字段含义: 开票公司名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxInvoiceCompany = null;
  
  /**
   * 行数
   * @property taxInvoiceAmount
   * 字段含义: 开票金额
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxInvoiceAmount = null;
  
  /**
   * 单据状态
   * @property taxInvoiceDate
   * 字段含义: 开票日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxInvoiceDate = null;
  
  /**
   * 财务客户主数据编号
   * @property financeCustomerNo
   * 字段含义: 财务客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  financeCustomerNo = null;
  
  /**
   * 业务客户主数据编号
   * @property businessCustomerNo
   * 字段含义: 业务客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessCustomerNo = null;
  
  /**
   * 
   * @property financeCustomerName
   * 字段含义: 财务客户名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  financeCustomerName = null;
  
  /**
   * 
   * @property businessCustomerName
   * 字段含义: 业务客户名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessCustomerName = null;
  
  /**
   * 
   * @property soNo
   * 字段含义: 销售订单编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  soNo = null;
  
  /**
   * 
   * @property channel
   * 字段含义: 下单渠道
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  channel = null;
  
  /**
   * 
   * @property postCode
   * 字段含义: 邮编
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  postCode = null;
  
  /**
   * 
   * @property contactName
   * 字段含义: 联系人
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  contactName = null;
  
  /**
   * 
   * @property contactPhone
   * 字段含义: 联系电话
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  contactPhone = null;
  
  /**
   * 
   * @property taxInvoiceStatus
   * 字段含义: 开票状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxInvoiceStatus = null;
  
  /**
   * 
   * @property soType
   * 字段含义: 销售订单类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  soType = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'obInvoice';
  ITEMCLASS = OBInvoiceItem;
  
  /**
   * @class OBInvoice
   * @constructor
   * @extends BaseInvoice
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    oBInvoiceHelper ? this.merge(oBInvoiceHelper) : '';
  };
};
export default OBInvoice;
