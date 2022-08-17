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
import { sampleBookItemHelper } from '@/models.v2/helper';
import { sampleBookItemStaticHelper } from '@/models.v2/staticHelper';

export class BaseSampleBookItem extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 样本画册明细模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 样本画册物料编号；如M5404
   * @property headMaterialNo
   * 字段含义: 样本画册物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  headMaterialNo ;
  
  /**
   * 面料产品编号
   * @property productNo
   * 字段含义: 面料产品编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  productNo ;
  
  /**
   * 面料产品对应的物料编号
   * @property materialNo
   * 字段含义: 面料物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialNo ;
  
  /**
   * 面料产品显示的页码
   * @property pageNo
   * 字段含义: 页码
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  pageNo ;
  
  /**
   * 面料产品显示的位置
   * @property position
   * 字段含义: 位置
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  position ;
  
  /**
   * 是否拍照款
   * @property isPhotoModel
   * 字段含义: 拍照款
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  isPhotoModel ;
  
  /**
   * 面料的长
   * @property length
   * 字段含义: 长
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  length ;
  
  /**
   * 面料的宽
   * @property width
   * 字段含义: 宽
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  width ;
  
  /**
   * 厘米、其他。
   * @property unit
   * 字段含义: 单位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  unit ;
  
  /**
   * 样本画册物料系统内码
   * @property headMaterialSn
   * 字段含义: 样本画册物料系统内码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  headMaterialSn ;
  
  /**
   * 样本画册物料数据表id
   * @property headMaterialId
   * 字段含义: 样本画册物料数据表id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  headMaterialId ;
  
  /**
   * 样本画册Id
   * @property headId
   * 字段含义: 样本画册Id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  headId ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'material'; // 根据具体情况配置
  static modelName = 'sampleBookItem';
  
  
  /**
   * @class BaseSampleBookItem
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    sampleBookItemHelper ? Object.assign(this,sampleBookItemHelper) : '';
  };
};

//if(sampleBookItemHelper) Object.assign(BaseSampleBookItem.prototype,sampleBookItemHelper);
if(sampleBookItemStaticHelper) Object.assign(BaseSampleBookItem,sampleBookItemStaticHelper);
export default BaseSampleBookItem;
