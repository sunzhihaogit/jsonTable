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
import { materialHelper } from '@/models.v2/helper';
import { materialStaticHelper } from '@/models.v2/staticHelper';

export class BaseMaterial extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 物料模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 按规则自定义编号；如VBC是V+系列+花型+颜色
   * @property materialNo
   * 字段含义: 物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  materialNo ;
  
  /**
   * 客户看 纱支270；由纱支-物料成分-延米克重-幅宽组成。
   * @property combination
   * 字段含义: 技术规则描述
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  combination ;
  
  /**
   * 面料：面料、胚布、纱线、毛衣纱线、POLO衫面料、其他。成品：样衣、销售配品（织标）、销售配品（其他）、领带、毛衣、围巾、POLO、圆T、样本、画册。
   * @property subType
   * 字段含义: 物料分类
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  subType ;
  
  /**
   * 物料归属的系列，如V86.903/2321中的V86
   * @property series
   * 字段含义: 系列
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  series ;
  
  /**
   * 供应商简码
   * @property supplierShortCode
   * 字段含义: 供应商简码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  supplierShortCode ;
  
  /**
   * 根据不同类型，显示不同克重
   * @property weightUnit
   * 字段含义: 单位重量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  weightUnit ;
  
  /**
   * 物料所含各种物质的成分
   * @property composition
   * 字段含义: 物料成分
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  composition ;
  
  /**
   * 指面料的密度
   * @property yarnCount
   * 字段含义: 纱支
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  yarnCount ;
  
  /**
   * 区间值填写两个值,固定值任意填写一个文本框即可
   * @property avgWeightPerMeter
   * 字段含义: 延米克重
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  avgWeightPerMeter ;
  
  /**
   * 区间值填写两个值,固定值任意填写一个文本框即可
   * @property avgWidth
   * 字段含义: 幅宽
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  avgWidth ;
  
  /**
   * 面料和成品：新品、常规、清货、清补、清货延续。组合：金牌、银牌、铜牌。
   * @property properties
   * 字段含义: 物料属性
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  properties ;
  
  /**
   * 描述的物料的品牌，如世家宝、SVBC等。
   * @property brand
   * 字段含义: 物料品牌
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  brand ;
  
  /**
   * 计量单位，包含本、条、套、件、箱、个、米、公斤、包、卷。
   * @property unit
   * 字段含义: 采购计量单位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  unit ;
  
  /**
   * 如W22、S23等
   * @property factorySeason
   * 字段含义: 工厂季
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  factorySeason ;
  
  /**
   * 夏季、冬季、四季、其他。
   * @property productSeason
   * 字段含义: 产品特性
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productSeason ;
  
  /**
   * 宝蓝色、其他、白色、粉色、紫色、灰蓝色、橙色、红色、湖蓝色、咖色、卡其色、蓝色、绿色、米色、棕色、藏青色、黑色、灰色。
   * @property color
   * 字段含义: 颜色
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  color ;
  
  /**
   * 素色、人字、小花型、格、暗条、明条、提花、窗格、马德拉斯格、其他格纹、威尔士亲王格、印花、其他。
   * @property pattern
   * 字段含义: 花型
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  pattern ;
  
  /**
   * 如套装、单件、大衣、衬衫、裤子、礼服、其他。
   * @property category
   * 字段含义: 品类
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  category ;
  
  /**
   * 如意大利、英国、比利时。
   * @property placeOfProduction
   * 字段含义: 产地
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  placeOfProduction ;
  
  /**
   * 70米/包
   * @property specifications
   * 字段含义: 规格(米/包)
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  specifications ;
  
  /**
   * 使物料管理达到最细致的层面
   * @property isBatchManaged
   * 字段含义: 批次管理
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: 
   */
  isBatchManaged ;
  
  /**
   * 意厉维向供应商定制产品
   * @property isEv
   * 字段含义: EV产品
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: 
   */
  isEv ;
  
  /**
   * 库存是否充足，不需要采购。可快速销售的货物
   * @property isFast
   * 字段含义: 快货
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: 
   */
  isFast ;
  
  /**
   * 1.欧洲可供；2.欧洲停售；3.欧洲少量库存，补货中;4.欧洲即将停售
   * @property isSupplied
   * 字段含义: 是否可供
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  isSupplied ;
  
  /**
   * 意厉维创建的一款产品物料，还没找到对应的供应商。
   * @property developCode
   * 字段含义: 开发号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  developCode ;
  
  /**
   * 常规A、常规B、常规C、新品、清货、清货延续、清补。
   * @property retailProperties
   * 字段含义: 零剪物料属性
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  retailProperties ;
  
  /**
   * 常规A、常规B、常规C、新品、清货、清货延续、清补。
   * @property suitsProperties
   * 字段含义: 职业装物料属性
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  suitsProperties ;
  
  /**
   * 最小起订量
   * @property moq
   * 字段含义: 最小起订量(米)
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  moq ;
  
  /**
   * 新首最小起订量
   * @property firstMoq
   * 字段含义: 新首最小起订量(米)
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  firstMoq ;
  
  /**
   * 指存货总成本最低的采购批量
   * @property eMoq
   * 字段含义: 经济批量
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  eMoq ;
  
  /**
   * 最晚停售时间，可调整
   * @property disappearDate
   * 字段含义: 生命周期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  disappearDate ;
  
  /**
   * 正式售卖的日期，可调整
   * @property appearDate
   * 字段含义: 上市日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  appearDate ;
  
  /**
   * 属性相近的物料相互替代，放物料号
   * @property substitute
   * 字段含义: 替代品
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  substitute ;
  
  /**
   * 指原布，未经过任何加工处理
   * @property rawMaterialNo
   * 字段含义: 坯布编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  rawMaterialNo ;
  
  /**
   * 海关关税系数，由报关品类带出来
   * @property customsRate
   * 字段含义: 海关关税系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  customsRate ;
  
  /**
   * 纯毛面料-51121100、羊绒面料-51111911、纯麻面料-52084200、混纺面料-53091900、桑蚕丝面料-50072019、领带成品-62159000、纱线-51071000、其他。
   * @property customsCategory
   * 字段含义: 报关品类
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  customsCategory ;
  
  /**
   * 海关编号，由报关品类带出来
   * @property hsCode
   * 字段含义: 海关编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  hsCode ;
  
  /**
   * 杂费系数，由报关品类带出来
   * @property othersRate
   * 字段含义: 杂费系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  othersRate ;
  
  /**
   * 供应商编号
   * @property supplierNo
   * 字段含义: 供应商编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  supplierNo ;
  
  /**
   * 增值税系数，由报关品类带出来
   * @property taxRate
   * 字段含义: 增值税系数
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  taxRate ;
  
  /**
   * 取中间值；最大+最小/2
   * @property weightPerMeter
   * 字段含义: 延米克重（数值）
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  weightPerMeter ;
  
  /**
   * 取中间值；最大+最小/2
   * @property width
   * 字段含义: 幅宽（数值）
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  width ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'material'; // 根据具体情况配置
  static modelName = 'material';
  
  
  /**
   * @class BaseMaterial
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 面料、成品,
    * 字段状态: undefined
    * 字段含义: 物料类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectType', 'type');
    
    
    /*
    * ,
    * 字段状态: undefined
    * 字段含义: 物料系统内码
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'materialSn');
    
    
    /*
    * 取中间值；最大+最小/2,
    * 字段状态: undefined
    * 字段含义: 延米克重
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('weightPerMeter', 'weightPerMeterString');
    
    
    /*
    * 根据不同类型，显示不同克重,
    * 字段状态: undefined
    * 字段含义: 单位重量
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('weightUnit', 'weightUnitString');
    
    
    /*
    * 取中间值；最大+最小/2,
    * 字段状态: undefined
    * 字段含义: 幅宽
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('width', 'widthString');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    materialHelper ? Object.assign(this,materialHelper) : '';
  };
};

//if(materialHelper) Object.assign(BaseMaterial.prototype,materialHelper);
if(materialStaticHelper) Object.assign(BaseMaterial,materialStaticHelper);
export default BaseMaterial;
