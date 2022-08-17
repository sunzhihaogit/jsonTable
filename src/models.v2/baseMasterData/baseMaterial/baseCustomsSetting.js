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
import { customsSettingHelper } from '@/models.v2/helper';
import { customsSettingStaticHelper } from '@/models.v2/staticHelper';

export class BaseCustomsSetting extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 物料报关配置模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 供应商简码
   * @property supplierShortCode
   * 字段含义: 供应商简码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  supplierShortCode ;
  
  /**
   * 纯毛面料-51121100、羊绒面料-51111911、纯麻面料-52084200、混纺面料-53091900、桑蚕丝面料-50072019、领带成品-62159000、纱线-51071000、其他。
   * @property customsCategory
   * 字段含义: 报关品类
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  customsCategory ;
  
  /**
   * 海关编号，由报关品类带出来
   * @property hsCode
   * 字段含义: 海关编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  hsCode ;
  
  /**
   * 指面料的密度
   * @property yarnCount
   * 字段含义: 纱支
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  yarnCount ;
  
  /**
   * 区间值填写两个值,固定值任意填写一个文本框即可
   * @property weightPerMeter
   * 字段含义: 延米克重
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  weightPerMeter ;
  
  /**
   * 海关关税系数，由报关品类带出来
   * @property customsRate
   * 字段含义: 海关关税系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  customsRate ;
  
  /**
   * 区间值填写两个值,固定值任意填写一个文本框即可
   * @property width
   * 字段含义: 幅宽
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  width ;
  
  /**
   * 物料所含各种物质的成分
   * @property composition
   * 字段含义: 物料成分
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  composition ;
  
  /**
   * 增值税系数，由报关品类带出来
   * @property taxRate
   * 字段含义: 增值税系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  taxRate ;
  
  /**
   * 运费系数
   * @property freightRate
   * 字段含义: 运费系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  freightRate ;
  
  /**
   * 杂费系数，由报关品类带出来
   * @property othersRate
   * 字段含义: 杂费系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  othersRate ;
  
  /**
   * 按规则自定义编号；如VBC是V+系列+花型+颜色
   * @property materialNo
   * 字段含义: 物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialNo ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'material'; // 根据具体情况配置
  static modelName = 'customsSetting';
  
  
  /**
   * @class BaseCustomsSetting
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 按规则自定义编号；如VBC是V+系列+花型+颜色,
    * 字段状态: undefined
    * 字段含义: 物料内码
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true}
    */
    this.alias('objectNo', 'materialSn');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    customsSettingHelper ? Object.assign(this,customsSettingHelper) : '';
  };
};

//if(customsSettingHelper) Object.assign(BaseCustomsSetting.prototype,customsSettingHelper);
if(customsSettingStaticHelper) Object.assign(BaseCustomsSetting,customsSettingStaticHelper);
export default BaseCustomsSetting;
