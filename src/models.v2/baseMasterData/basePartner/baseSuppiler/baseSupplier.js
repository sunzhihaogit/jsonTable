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
  BasePartner
} from '@/models.v2/baseMasterData/basePartner/basePartner.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { supplierHelper } from '@/models.v2/helper';
import { supplierStaticHelper } from '@/models.v2/staticHelper';

export class BaseSupplier extends BasePartner{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 供应商模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 供应商名称简写，原系统叫做供应商编码（包含中文值）业务编码
   * @property shortCode
   * 字段含义: 供应商简码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  shortCode ;
  
  /**
   * 是否是结算供应商
   * @property isFinanceSupplier
   * 字段含义: 是否结算供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  isFinanceSupplier ;
  
  /**
   * 是否是实际供应商
   * @property isBusinessSupplier
   * 字段含义: 是否实际供应商
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  isBusinessSupplier ;
  
  /**
   * 是否是关联方
   * @property isRelatedSupplier
   * 字段含义: 是否关联方
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  isRelatedSupplier ;
  
  /**
   * SWIFT CODE
   * @property bankCode
   * 字段含义: 银行代码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  bankCode ;
  
  /**
   * 收款人信息
   * @property recipient
   * 字段含义: 收款人信息
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  recipient ;
  
  /**
   * 供应商税务发票抬头编辑
   * @property taxInvoiceTitle
   * 字段含义: 发票抬头
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  taxInvoiceTitle ;
  
  /**
   * 银行具体地址
   * @property bankAddress
   * 字段含义: 银行地址
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  bankAddress ;
  
  /**
   * 实际办公地址？  工商注册地址不一定等于实际办公地址
   * @property location
   * 字段含义: 公司地址
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  location ;
  
  /**
   * 记录供应商曾用SAP编码
   * @property refSupplierNo
   * 字段含义: 供应商SAP编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  refSupplierNo ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'supplier'; // 根据具体情况配置
  static modelName = 'supplier';
  
  
  /**
   * @class BaseSupplier
   * @constructor
   * @extends BasePartner
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 原料商，面料商，加工商，物流服务商,
    * 字段状态: undefined
    * 字段含义: 供应商类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {原型字段:true}
    */
    this.alias('objectType', 'supplierType');
    
    
    /*
    * 正常，冻结，注销，禁用，活跃，其他,
    * 字段状态: undefined
    * 字段含义: 供应商状态
    * 字段类型: Integer
    * 声明类型: ALIAS
    * 字段备注: {原型字段:true}
    */
    this.alias('objectStatus', 'supplierStatus');
    
    
    /*
    * 供应商编号,
    * 字段状态: undefined
    * 字段含义: 供应商编码
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {原型字段:true}
    */
    this.alias('objectNo', 'supplierNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    supplierHelper ? Object.assign(this,supplierHelper) : '';
  };
};

//if(supplierHelper) Object.assign(BaseSupplier.prototype,supplierHelper);
if(supplierStaticHelper) Object.assign(BaseSupplier,supplierStaticHelper);
export default BaseSupplier;
