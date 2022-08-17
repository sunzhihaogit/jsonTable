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
import { bankFlowItemHelper } from '@/models.v2/helper';

export class BaseBankFlowItem extends OBInvoiceItem{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 流水单明细模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 预收单号
   * @property refPrereceiptNo
   * 字段含义: 预收单号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseBankFlowItem"}
   */
  refPrereceiptNo = null;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'finance-middle-platform'; // 根据具体情况配置
  static modelName = 'bankFlowItem';
  
  
  /**
   * @class BaseBankFlowItem
   * @constructor
   * @extends OBInvoiceItem
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    bankFlowItemHelper ? this.merge(bankFlowItemHelper) : '';
  };
};
export default BaseBankFlowItem;
