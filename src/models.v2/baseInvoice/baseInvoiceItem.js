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
  BaseObject
} from '@/models.v2//baseObject.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { invoiceItemHelper } from '@/models.v2/helper';
import { invoiceItemStaticHelper } from '@/models.v2/staticHelper';

export class BaseInvoiceItem extends BaseObject{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 凭证行基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 物料编号
   * @property materialNo
   * 字段含义: 物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  materialNo ;
  
  /**
   * 每行的单位，米、本、件、条等
   * @property unit
   * 字段含义: 单位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  unit ;
  
  /**
   * 发票上登记的每行单价，
   * @property price
   * 字段含义: 单价
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  price ;
  
  /**
   * 发票单价*发票数量，
   * @property amount
   * 字段含义: 金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  amount ;
  
  /**
   * 发票上记录的包号，Piece No.
   * @property factoryBatchNo
   * 字段含义: 工厂包号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  factoryBatchNo ;
  
  /**
   * 匹染货物的会有缸号
   * @property vatNo
   * 字段含义: 工厂缸号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  vatNo ;
  
  /**
   * 如调拨单上该物料每包的数量，如果调拨单某一包被拆包，则为拆后的每包米数，原每包米数
   * @property packageUnit
   * 字段含义: 调拨规格
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  packageUnit ;
  
  /**
   * 调拨单上一行的总数量，调拨单位规格米数*调拨规格数
   * @property quantity
   * 字段含义: 调拨数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  quantity ;
  
  /**
   * 行号，如1，2，3 相对编号
   * @property lineNo
   * 字段含义: 行号
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  lineNo ;
  
  /**
   * 零剪，职业装，订货，集团
   * @property businessType
   * 字段含义: 业务类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  businessType ;
  
  /**
   * 本币
   * @property localCurrency
   * 字段含义: 本位币
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  localCurrency ;
  
  /**
   * 汇率
   * @property exchangeRate
   * 字段含义: 汇率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  exchangeRate ;
  
  /**
   * 关联头id
   * @property headId
   * 字段含义: 凭证头id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  headId ;
  
  /**
   * 该行产品的折扣
   * @property rebateDiscount
   * 字段含义: 返利折扣率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  rebateDiscount ;
  
  /**
   * 过账时间
   * @property glDate
   * 字段含义: 过账时间
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  glDate ;
  
  /**
   * 已发货数量
   * @property deliveredQuantity
   * 字段含义: 已发货数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  deliveredQuantity ;
  
  /**
   * 行号，如1,2,3，相对序号，会变化
   * @property showLineNo
   * 字段含义: 行号
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  showLineNo ;
  
  /**
   * 
   * @property originalCurrency
   * 字段含义: 原位币
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  originalCurrency ;
  
  /**
   * 关联头uuid
   * @property headUuid
   * 字段含义: 凭证头等幂id
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  headUuid ;
  
  /**
   * 供应商简码
   * @property supplierShortCode
   * 字段含义: 供应商简码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  supplierShortCode ;
  
  /**
   * 物料系统编码
   * @property materialSn
   * 字段含义: 物料系统编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
   */
  materialSn ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'invoiceItem';
  
  
  /**
   * @class BaseInvoiceItem
   * @constructor
   * @extends BaseObject
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 预收货清单编号,
    * 字段状态: undefined
    * 字段含义: 预收货清单编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoiceItem"}
    */
    this.alias('objectNo', 'invoiceNo');
    
    
    /*
    * 凭证类型,
    * 字段状态: undefined
    * 字段含义: 凭证类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
    */
    this.alias('objectType', 'invoiceType');
    
    
    /*
    * 关联头uuid,
    * 字段状态: undefined
    * 字段含义: 关联凭证头id
    * 字段类型: Long
    * 声明类型: ALIAS
    * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
    */
    this.alias('headId', 'invoiceId');
    
    
    /*
    * 单据状态,
    * 字段状态: undefined
    * 字段含义: 单据状态
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoiceItem"}
    */
    this.alias('objectStatus', 'invoiceStatus');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    invoiceItemHelper ? Object.assign(this,invoiceItemHelper) : '';
  };
};

//if(invoiceItemHelper) Object.assign(BaseInvoiceItem.prototype,invoiceItemHelper);
if(invoiceItemStaticHelper) Object.assign(BaseInvoiceItem,invoiceItemStaticHelper);
export default BaseInvoiceItem;
