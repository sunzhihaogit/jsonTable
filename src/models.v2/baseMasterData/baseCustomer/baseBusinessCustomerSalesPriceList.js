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
  BaseMasterData
} from '@/models.v2/baseMasterData/baseMasterData.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { businessCustomerSalesPriceListHelper } from '@/models.v2/helper';
import { businessCustomerSalesPriceListStaticHelper } from '@/models.v2/staticHelper';

export class BaseBusinessCustomerSalesPriceList extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 业务客户价单关系模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 唯一标识
   * @property businessCustomerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBusinessCustomerSalesPriceList"}
   */
  businessCustomerNo ;
  
  /**
   * 客户中文名称
   * @property businessCustomerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBusinessCustomerSalesPriceList"}
   */
  businessCustomerName ;
  
  /**
   * 销售代表ID
   * @property salesPriceListId
   * 字段含义: 销售价单ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBusinessCustomerSalesPriceList"}
   */
  salesPriceListId ;
  
  /**
   * 销售代表中文名
   * @property salesPriceListName
   * 字段含义: 销售价单名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBusinessCustomerSalesPriceList"}
   */
  salesPriceListName ;
  
  /**
   * 顺序
   * @property seq
   * 字段含义: 顺序
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBusinessCustomerSalesPriceList"}
   */
  seq ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'businessCustomerSalesPriceList';
  
  
  /**
   * @class BaseBusinessCustomerSalesPriceList
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    businessCustomerSalesPriceListHelper ? Object.assign(this,businessCustomerSalesPriceListHelper) : '';
  };
};

//if(businessCustomerSalesPriceListHelper) Object.assign(BaseBusinessCustomerSalesPriceList.prototype,businessCustomerSalesPriceListHelper);
if(businessCustomerSalesPriceListStaticHelper) Object.assign(BaseBusinessCustomerSalesPriceList,businessCustomerSalesPriceListStaticHelper);
export default BaseBusinessCustomerSalesPriceList;
