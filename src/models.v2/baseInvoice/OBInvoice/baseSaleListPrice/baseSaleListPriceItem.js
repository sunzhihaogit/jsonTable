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
  OBInvoiceItem
} from '@/models.v2/baseInvoice/OBInvoice/obInvoiceItem.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { saleListPriceItemHelper } from '@/models.v2/helper';

export class BaseSaleListPriceItem extends OBInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 销售价单明细模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 系列
   * @property serial
   * 字段含义: 系列
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  serial = null;
  
  /**
   * 截止产品号，和品号组成一个产品号段
   * @property toProductNo
   * 字段含义: 号段
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  toProductNo = null;
  
  /**
   * 优先级
   * @property priority
   * 字段含义: 优先级
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  priority = null;
  
  /**
   * 起始数量
   * @property fromQty
   * 字段含义: 起始数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  fromQty = null;
  
  /**
   * 结束数量
   * @property toQty
   * 字段含义: 结束数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  toQty = null;
  
  /**
   * 起始日期
   * @property startDate
   * 字段含义: 起始日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  startDate = null;
  
  /**
   * 结束日期
   * @property endDate
   * 字段含义: 结束日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItem"}
   */
  endDate = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'saleListPriceItem';
  
  
  /**
   * @class BaseSaleListPriceItem
   * @constructor
   * @extends OBInvoiceItem
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    saleListPriceItemHelper ? this.merge(saleListPriceItemHelper) : '';
  };
};
export default BaseSaleListPriceItem;
