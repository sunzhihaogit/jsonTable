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
  BaseContact
} from '@/models.v2/baseMasterData/baseCustomer/baseContact.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { supplierContactHelper } from '@/models.v2/helper';
import { supplierContactStaticHelper } from '@/models.v2/staticHelper';

export class BaseSupplierContact extends BaseContact{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 供应商联系人模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 供应商编码，唯一标识， 供应商内码
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
   * 社交账号
   * @property socialMedia
   * 字段含义: 社交软件号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {原型字段:true}
   */
  socialMedia ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'supplier'; // 根据具体情况配置
  static modelName = 'supplierContact';
  
  
  /**
   * @class BaseSupplierContact
   * @constructor
   * @extends BaseContact
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 常用联系人，收货联系人，样本联系人，决策联系人，账册联系人，老板，采购员，销售员，店长，量体师，定制业务负责人，产品开发负责人，市场部负责人，中国区负责人，主力供应商的设计师，收票联系人，其他,
    * 字段状态: undefined
    * 字段含义: 联系人类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {原型字段:true}
    */
    this.alias('objectType', 'contactType');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    supplierContactHelper ? Object.assign(this,supplierContactHelper) : '';
  };
};

//if(supplierContactHelper) Object.assign(BaseSupplierContact.prototype,supplierContactHelper);
if(supplierContactStaticHelper) Object.assign(BaseSupplierContact,supplierContactStaticHelper);
export default BaseSupplierContact;
