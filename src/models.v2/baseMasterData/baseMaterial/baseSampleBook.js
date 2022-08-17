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
  BaseSampleBookItem
} from './baseSampleBookItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { sampleBookHelper } from '@/models.v2/helper';
import { sampleBookStaticHelper } from '@/models.v2/staticHelper';

export class BaseSampleBook extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 样本画册模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 总页数
   * @property totalPages
   * 字段含义: 总页数
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  totalPages ;
  
  /**
   * 销售季
   * @property salesSeason
   * 字段含义: 销售季
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  salesSeason ;
  
  /**
   * 供应商名称
   * @property supplierName
   * 字段含义: 生产商名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  supplierName ;
  
  /**
   * 样本画册物料编号
   * @property materialNo
   * 字段含义: 样本画册物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialNo ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'material'; // 根据具体情况配置
  static modelName = 'sampleBook';
  ITEMCLASS = BaseSampleBookItem;
  ITEMCLASSFIELD = ['id','headId'];
  /**
   * @class BaseSampleBook
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 样本画册物料系统内码,
    * 字段状态: undefined
    * 字段含义: 样本画册物料系统内码
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true}
    */
    this.alias('objectNo', 'materialSn');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    sampleBookHelper ? Object.assign(this,sampleBookHelper) : '';
  };
};

//if(sampleBookHelper) Object.assign(BaseSampleBook.prototype,sampleBookHelper);
if(sampleBookStaticHelper) Object.assign(BaseSampleBook,sampleBookStaticHelper);
export default BaseSampleBook;
