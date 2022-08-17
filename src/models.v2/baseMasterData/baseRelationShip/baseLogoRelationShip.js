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
import { logoRelationShipHelper } from '@/models.v2/helper';
import { logoRelationShipStaticHelper } from '@/models.v2/staticHelper';

export class BaseLogoRelationShip extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 织标配比规则模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 织标物料编号
   * @property logoNo
   * 字段含义: 织标物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  logoNo ;
  
  /**
   * 产品编号
   * @property productNo
   * 字段含义: 产品编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  productNo ;
  
  /**
   * 产品对应的物料编号
   * @property materialNo
   * 字段含义: 物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialNo ;
  
  /**
   * 产品对应的物料组成成分
   * @property materialComposition
   * 字段含义: 物料成分
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialComposition ;
  
  /**
   * 产品对应物料的纱支
   * @property yarnCount
   * 字段含义: 物料纱支
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  yarnCount ;
  
  /**
   * 面料产品销售时按什么品牌销售，如STB、VBC等
   * @property brand
   * 字段含义: 产品品牌
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  brand ;
  
  /**
   * 客户唯一标识
   * @property customerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  customerNo ;
  
  /**
   * 客户中文名称
   * @property customerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  customerName ;
  
  /**
   * 客户上的织标配比值，需要带出全部客户
   * @property logoQty
   * 字段含义: 织标配比
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  logoQty ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'logoRelationShip';
  
  
  /**
   * @class BaseLogoRelationShip
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    logoRelationShipHelper ? Object.assign(this,logoRelationShipHelper) : '';
  };
};

//if(logoRelationShipHelper) Object.assign(BaseLogoRelationShip.prototype,logoRelationShipHelper);
if(logoRelationShipStaticHelper) Object.assign(BaseLogoRelationShip,logoRelationShipStaticHelper);
export default BaseLogoRelationShip;
