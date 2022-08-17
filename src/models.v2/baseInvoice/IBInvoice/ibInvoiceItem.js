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
import { iBInvoiceItemHelper } from '@/models.v2/helper';
import { iBInvoiceItemStaticHelper } from '@/models.v2/staticHelper';

export class IBInvoiceItem extends BaseInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 采购凭证行基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 销售订单号
   * @property soNo
   * 字段含义: 销售订单号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  soNo ;
  
  /**
   * 发票上记录的工厂确认书编号，也可以从调拨单带出，工厂对账时的重要信息
   * @property confirmationNo
   * 字段含义: 确认书编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  confirmationNo ;
  
  /**
   * 
   * @property batchNo
   * 字段含义: 存货ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  batchNo ;
  
  /**
   * 仓位
   * @property warehouseNo
   * 字段含义: 入库仓位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  warehouseNo ;
  
  /**
   * 库位
   * @property storageNo
   * 字段含义: 入库库位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  storageNo ;
  
  /**
   * 包数
   * @property packQuantity
   * 字段含义: 包数
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  packQuantity ;
  
  /**
   * 工厂季
   * @property factorySeason
   * 字段含义: 工厂季
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  factorySeason ;
  
  /**
   * 
   * @property businessSupplierNo
   * 字段含义: 实际供应商编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessSupplierNo ;
  
  /**
   * 
   * @property financeSupplierName
   * 字段含义: 结算供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  financeSupplierName ;
  
  /**
   * 
   * @property businessSupplierName
   * 字段含义: 实际供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  businessSupplierName ;
  
  /**
   * 
   * @property financeSupplierNo
   * 字段含义: 结算供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BasePrepaidItem"}
   */
  financeSupplierNo ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'ibInvoiceItem';
  
  
  /**
   * @class IBInvoiceItem
   * @constructor
   * @extends BaseInvoiceItem
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
    * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
    */
    this.alias('businessSupplierNo', 'supplierNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    iBInvoiceItemHelper ? Object.assign(this,iBInvoiceItemHelper) : '';
  };
};

//if(iBInvoiceItemHelper) Object.assign(IBInvoiceItem.prototype,iBInvoiceItemHelper);
if(iBInvoiceItemStaticHelper) Object.assign(IBInvoiceItem,iBInvoiceItemStaticHelper);
export default IBInvoiceItem;
