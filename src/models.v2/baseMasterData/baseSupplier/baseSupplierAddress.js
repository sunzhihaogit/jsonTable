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
  BaseAddress
} from '@/models.v2/baseMasterData/baseCustomer/baseAddress.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { supplierAddressHelper } from '@/models.v2/helper';
import { supplierAddressStaticHelper } from '@/models.v2/staticHelper';

export class BaseSupplierAddress extends BaseAddress{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 供应商联系地址模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 供应商编码，唯一标识
   * @property supplierNo
   * 字段含义: 供应商编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  supplierNo ;
  
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
   * 供应商uuid
   * @property headUuid
   * 字段含义: 供应商uuid
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  headUuid ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'supplier'; // 根据具体情况配置
  static modelName = 'supplierAddress';
  
  
  /**
   * @class BaseSupplierAddress
   * @constructor
   * @extends BaseAddress
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 企业经营地址，家庭地址，收货（发货）地址，发票地址，企业注册地址，通讯地址， 其他，,
    * 字段状态: undefined
    * 字段含义: 地址类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {原型字段:true}
    */
    this.alias('objectType', 'addressType');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    supplierAddressHelper ? Object.assign(this,supplierAddressHelper) : '';
  };
};

//if(supplierAddressHelper) Object.assign(BaseSupplierAddress.prototype,supplierAddressHelper);
if(supplierAddressStaticHelper) Object.assign(BaseSupplierAddress,supplierAddressStaticHelper);
export default BaseSupplierAddress;
