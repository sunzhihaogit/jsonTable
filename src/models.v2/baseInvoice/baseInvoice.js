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
  BaseInvoiceItem
} from './baseInvoiceItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { invoiceHelper } from '@/models.v2/helper';
import { invoiceStaticHelper } from '@/models.v2/staticHelper';

export class BaseInvoice extends BaseObject{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 凭证基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 产品总数量，CRM叫产品总量
   * @property totalQuantity
   * 字段含义: 数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  totalQuantity ;
  
  /**
   * 订单总金额
   * @property totalAmount
   * 字段含义: 金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  totalAmount ;
  
  /**
   * CIF、C&F、CIP、CFR、DAT、DAP、EXW、FCA、FOB、其他
   * @property shipmentTerm
   * 字段含义: 贸易条款
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  shipmentTerm ;
  
  /**
   * 返利折扣率
   * @property discount
   * 字段含义: 返利折扣率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  discount ;
  
  /**
   * 核销状态
   * @property writeoffStatus
   * 字段含义: 核销状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  writeoffStatus ;
  
  /**
   * 已核销金额
   * @property writeoffAmount
   * 字段含义: 已核销金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  writeoffAmount ;
  
  /**
   * 关联其他凭证
   * @property refInvoiceNo
   * 字段含义: 关联其他凭证
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  refInvoiceNo ;
  
  /**
   * 零剪，职业装，订货，集团？
   * @property businessType
   * 字段含义: 业务类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessType ;
  
  /**
   * 本币
   * @property localCurrency
   * 字段含义: 本位币
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  localCurrency ;
  
  /**
   * 原币
   * @property originalCurrency
   * 字段含义: 原位币
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  originalCurrency ;
  
  /**
   * 对应币种的汇率
   * @property exchangeRate
   * 字段含义: 汇率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  exchangeRate ;
  
  /**
   * 明细行数量
   * @property totalRows
   * 字段含义: 行数
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  totalRows ;
  
  /**
   * 过账日期
   * @property glDate
   * 字段含义: 过账日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  glDate ;
  
  /**
   * EMT，IT，零剪销售部，全公司，财务
   * @property deptId
   * 字段含义: 所属部门
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  deptId ;
  
  /**
   * 单据增加标签，如补单
   * @property tags
   * 字段含义: 标签
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  tags ;
  
  /**
   * 描述
   * @property description
   * 字段含义: 描述
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"架构字段":true,"配置名称":"BaseFactoryInvoice"}
   */
  description ;
  
  /**
   * 
   * @property attachmentIds
   * 字段含义: 附件Id
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseDO"}
   */
  attachmentIds ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'invoice';
  ITEMCLASS = BaseInvoiceItem;
  ITEMCLASSFIELD = ['id','headId'];
  /**
   * @class BaseInvoice
   * @constructor
   * @extends BaseObject
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 收货、贷项（工厂冲红）,
    * 字段状态: undefined
    * 字段含义: 凭据类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
    */
    this.alias('objectType', 'invoiceType');
    
    
    /*
    * 草稿、新建、编辑、确认、取消，（删除）、已完成、已驳回、审批通过、审批中、已关闭,
    * 字段状态: undefined
    * 字段含义: 凭据状态
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
    */
    this.alias('objectStatus', 'invoiceStatus');
    
    
    /*
    * 人民币、美金、港币、新台币、英镑,
    * 字段状态: undefined
    * 字段含义: 币种
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
    */
    this.alias('originalCurrency', 'currency');
    
    
    /*
    * 订单编号SO开头,
    * 字段状态: undefined
    * 字段含义: 预收货编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseFactoryInvoice"}
    */
    this.alias('objectNo', 'invoiceNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    invoiceHelper ? Object.assign(this,invoiceHelper) : '';
  };
};

//if(invoiceHelper) Object.assign(BaseInvoice.prototype,invoiceHelper);
if(invoiceStaticHelper) Object.assign(BaseInvoice,invoiceStaticHelper);
export default BaseInvoice;
