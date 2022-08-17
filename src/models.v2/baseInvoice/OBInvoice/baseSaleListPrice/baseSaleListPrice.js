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
  OBInvoice
} from '@/models.v2/baseInvoice/OBInvoice/obInvoice.js';


import {
  BaseSaleListPriceItem
} from './baseSaleListPriceItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { saleListPriceHelper } from '@/models.v2/helper';

export class BaseSaleListPrice extends OBInvoice{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 销售价单模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 名称
   * @property name
   * 字段含义: 名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPrice"}
   */
  name = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'saleListPrice';
  ITEMCLASS = BaseSaleListPriceItem;
  ITEMCLASSFIELD = ['listNo','invoiceNo'];
  /**
   * @class BaseSaleListPrice
   * @constructor
   * @extends OBInvoice
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 价单编号,
    * 字段状态: undefined
    * 字段含义: 价单编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPrice"}
    */
    this.alias('objectNo', 'listNo');
    
    
    /*
    * ,
    * 字段状态: undefined
    * 字段含义: 是否启用String
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('isActive', 'isActiveString');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    saleListPriceHelper ? this.merge(saleListPriceHelper) : '';
  };
};
export default BaseSaleListPrice;
