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
import { saleListPriceItemStatusHelper } from '@/models.v2/helper';

export class BaseSaleListPriceItemStatus extends OBInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 销售价单明细备注模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 优先级
   * @property priority
   * 字段含义: 优先级
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItemStatus"}
   */
  priority = null;
  
  /**
   * 起始数量
   * @property fromQty
   * 字段含义: 起始数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItemStatus"}
   */
  fromQty = null;
  
  /**
   * 结束数量
   * @property toQty
   * 字段含义: 结束数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItemStatus"}
   */
  toQty = null;
  
  /**
   * 起始日期
   * @property startDate
   * 字段含义: 起始日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItemStatus"}
   */
  startDate = null;
  
  /**
   * 结束日期
   * @property endDate
   * 字段含义: 结束日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseSaleListPriceItemStatus"}
   */
  endDate = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'saleListPriceItemStatus';
  
  
  /**
   * @class BaseSaleListPriceItemStatus
   * @constructor
   * @extends OBInvoiceItem
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    saleListPriceItemStatusHelper ? this.merge(saleListPriceItemStatusHelper) : '';
  };
};
export default BaseSaleListPriceItemStatus;
