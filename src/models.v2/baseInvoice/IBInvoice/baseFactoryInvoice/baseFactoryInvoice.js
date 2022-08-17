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
  IBInvoice
} from '@/models.v2/baseInvoice/IBInvoice/ibInvoice.js';


import {
  BaseFactoryInvoiceItem
} from './baseFactoryInvoiceItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { factoryInvoiceHelper } from '@/models.v2/helper';
import { factoryInvoiceStaticHelper } from '@/models.v2/staticHelper';

export class BaseFactoryInvoice extends IBInvoice{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 预收货清单模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 每行采购行金额汇总
   * @property totalPoAmount
   * 字段含义: 采购金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  totalPoAmount ;
  
  /**
   * 是发票金额总计-采购金额总计。
   * @property gapAmount
   * 字段含义: 差额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  gapAmount ;
  
  /**
   * 结算供应商名称
   * @property factoryInvoiceNo
   * 字段含义: 工厂发票号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  factoryInvoiceNo ;
  
  /**
   * 为了计算付款截止日而提供的辅助规则，工厂发票时间+付款条件=付款截止日
   * @property paymentTerms
   * 字段含义: 付款条件
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  paymentTerms ;
  
  /**
   * 发票上注明的或计算出来的付款截止日，原到期时间
   * @property paymentDueDate
   * 字段含义: 到期日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  paymentDueDate ;
  
  /**
   * 工厂发票附件
   * @property refBoxListFileId
   * 字段含义: 上传箱单id
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  refBoxListFileId ;
  
  /**
   * 工厂发票附件
   * @property refFactoryInvoiceFileId
   * 字段含义: 上传工厂发票Id
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  refFactoryInvoiceFileId ;
  
  /**
   * 库房已收的实际数量每行明细数量总计，计算值
   * @property receivedQuantity
   * 字段含义: 已收货数量
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  receivedQuantity ;
  
  /**
   * 未同步，同步成功，同步失败（单据流转状态）读取库房状态
   * @property syncStatus
   * 字段含义: 同步WMS状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  syncStatus ;
  
  /**
   * 草稿、新建、编辑、确认、取消，（删除）、已完成、已驳回、审批通过、审批中、已关闭
   * @property auditStatus
   * 字段含义: 凭据状态V1
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  auditStatus ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'scm'; // 根据具体情况配置
  static modelName = 'factoryInvoice';
  ITEMCLASS = BaseFactoryInvoiceItem;
  ITEMCLASSFIELD = ['invoiceNo','invoiceNo'];
  /**
   * @class BaseFactoryInvoice
   * @constructor
   * @extends IBInvoice
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    factoryInvoiceHelper ? Object.assign(this,factoryInvoiceHelper) : '';
  };
};

//if(factoryInvoiceHelper) Object.assign(BaseFactoryInvoice.prototype,factoryInvoiceHelper);
if(factoryInvoiceStaticHelper) Object.assign(BaseFactoryInvoice,factoryInvoiceStaticHelper);
export default BaseFactoryInvoice;
