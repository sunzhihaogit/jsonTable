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
  IBInvoiceItem
} from './ibInvoiceItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { iBInvoiceHelper } from '@/models.v2/helper';
import { iBInvoiceStaticHelper } from '@/models.v2/staticHelper';

export class IBInvoice extends BaseInvoice{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 采购凭证基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 供应商简码
   * @property supplierShortCode
   * 字段含义: 供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  supplierShortCode ;
  
  /**
   * 结算供应商编号
   * @property financeSupplierNo
   * 字段含义: 结算供应商编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  financeSupplierNo ;
  
  /**
   * 唯一标识，主数据中的供应商编码，如S0000164
   * @property businessSupplierNo
   * 字段含义: 实际供应商编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  businessSupplierNo ;
  
  /**
   * 结算供应商名称
   * @property financeSupplierName
   * 字段含义: 结算供应商名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  financeSupplierName ;
  
  /**
   * 供应商编号
   * @property businessSupplierName
   * 字段含义: 实际供应商名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  businessSupplierName ;
  
  /**
   * 
   * @property deliveryType
   * 字段含义: 发运方式
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  deliveryType ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'ibInvoice';
  ITEMCLASS = IBInvoiceItem;
  
  /**
   * @class IBInvoice
   * @constructor
   * @extends BaseInvoice
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 供应商编号,
    * 字段状态: undefined
    * 字段含义: 供应商编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
    */
    this.alias('businessSupplierNo', 'supplierNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    iBInvoiceHelper ? Object.assign(this,iBInvoiceHelper) : '';
  };
};

//if(iBInvoiceHelper) Object.assign(IBInvoice.prototype,iBInvoiceHelper);
if(iBInvoiceStaticHelper) Object.assign(IBInvoice,iBInvoiceStaticHelper);
export default IBInvoice;
