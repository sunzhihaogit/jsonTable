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
import { factoryInvoiceItemHelper } from '@/models.v2/helper';
import { factoryInvoiceItemStaticHelper } from '@/models.v2/staticHelper';

export class BaseFactoryInvoiceItem extends IBInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 预收货清单明细模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 单行发票上记录的数量
   * @property refQuantity
   * 字段含义: 数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  refQuantity ;
  
  /**
   * 单行库房已收的实际数量
   * @property receivedQuantity
   * 字段含义: 已收货数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  receivedQuantity ;
  
  /**
   * 采购时PO单上的该物料单价
   * @property poPrice
   * 字段含义: 采购单价
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  poPrice ;
  
  /**
   * 采购单价*发票数量，原计算行金额
   * @property poAmount
   * 字段含义: 采购行金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  poAmount ;
  
  /**
   * 财务审批时发现差额后，调整采购行金额
   * @property adjAmount
   * 字段含义: 修改后采购行金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  adjAmount ;
  
  /**
   * 所在物料调拨单（创建预收货清单时勾选的调拨单）的编号，如FA4080
   * @property refShippmentInvoiceNo
   * 字段含义: 调拨单编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  refShippmentInvoiceNo ;
  
  /**
   * 工厂提供的发票编号，如2411
   * @property refFactoryInvoiceSn
   * 字段含义: 工厂发票号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  refFactoryInvoiceSn ;
  
  /**
   * 
   * @property businessSupplierShortCode
   * 字段含义: 供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessSupplierShortCode ;
  
  /**
   * 仅用于预收货清单拆行
   * @property originalUuid
   * 字段含义: 原收货清单uuid
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  originalUuid ;
  
  /**
   * 调拨单的发运方式
   * @property deliveryType
   * 字段含义: 发运方式
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  deliveryType ;
  
  /**
   * 确认书关联采购订单的请求方式
   * @property purchaseType
   * 字段含义: 采购请求类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  purchaseType ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'scm'; // 根据具体情况配置
  static modelName = 'factoryInvoiceItem';
  
  
  /**
   * @class BaseFactoryInvoiceItem
   * @constructor
   * @extends IBInvoiceItem
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    factoryInvoiceItemHelper ? Object.assign(this,factoryInvoiceItemHelper) : '';
  };
};

//if(factoryInvoiceItemHelper) Object.assign(BaseFactoryInvoiceItem.prototype,factoryInvoiceItemHelper);
if(factoryInvoiceItemStaticHelper) Object.assign(BaseFactoryInvoiceItem,factoryInvoiceItemStaticHelper);
export default BaseFactoryInvoiceItem;
