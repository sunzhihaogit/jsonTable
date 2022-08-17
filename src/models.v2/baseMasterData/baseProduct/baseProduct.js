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
import { productHelper } from '@/models.v2/helper';
import { productStaticHelper } from '@/models.v2/staticHelper';

export class BaseProduct extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 产品模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 唯一标识，产品业务代码，创建后允许被修改
   * @property productNo
   * 字段含义: 产品编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productNo ;
  
  /**
   * 该产品关联的物料业务编码，默认物料编号
   * @property materialNo
   * 字段含义: 物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  materialNo ;
  
  /**
   * 产品条形码barcode，订货没有条形码，展示形态不同
   * @property barCode
   * 字段含义: 产品条形码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  barCode ;
  
  /**
   * 面料、纱线：纱织+成分+克重+幅宽，订单明细中产品描述
   * @property description
   * 字段含义: 产品描述
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  description ;
  
  /**
   * 面料：面料、POLO衫面料、其他。同现在分类。成品：样衣、织标、其他、领带、毛衣、围巾、POLO、圆T、样本、画册。同现在分类。虚拟：费用、电子画册
   * @property subType
   * 字段含义: 产品分类
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  subType ;
  
  /**
   * 面料：在产品号上头部相似或相同的部分。成品和虚拟都为空
   * @property serial
   * 字段含义: 产品系列
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  serial ;
  
  /**
   * 产品所在业务类型，零剪，职业装，订货，集团
   * @property businessType
   * 字段含义: 业务类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessType ;
  
  /**
   * 可售，停售，原产品状态
   * @property productStatus
   * 字段含义: 可售状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productStatus ;
  
  /**
   * 该产品官方正式宣布售卖的时间，一般是7.1或1.1
   * @property validDate
   * 字段含义: 上市日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  validDate ;
  
  /**
   * 该产品意厉维不再采购入库备货的时间，生命周期截止时间，原退市日期
   * @property delistDate
   * 字段含义: 生命周期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  delistDate ;
  
  /**
   * 产品可售的时间，目前SCM前端没有
   * @property putawayDate
   * 字段含义: 上架日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  putawayDate ;
  
  /**
   * 产品不可售的时间，目前SCM前端没有
   * @property invalidDate
   * 字段含义: 下架日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: 
   */
  invalidDate ;
  
  /**
   * 产品销售时按什么品牌销售，如STB、VBC等
   * @property brand
   * 字段含义: 产品品牌
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  brand ;
  
  /**
   * 面料：产品的组成成分，也是产品描述取值的一部分。成品和虚拟为空。默认物料同名值
   * @property productComposition
   * 字段含义: 产品成分
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productComposition ;
  
  /**
   * 面料：纱的粗细程度，支数越大越粗糙.默认物料同名值
   * @property yarnCount
   * 字段含义: 纱支
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  yarnCount ;
  
  /**
   * 面料：前端数据，允许展示区间值.成品和虚拟为空,默认物料同名值
   * @property weightPerMeterShow
   * 字段含义: 展示延米克重
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  weightPerMeterShow ;
  
  /**
   * 每平米产品的重量，计算值
   * @property weightPerSquareMeter
   * 字段含义: 每平米克重
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  weightPerSquareMeter ;
  
  /**
   * 米，本，件，条...，延用现有字典值.默认物料同名值
   * @property saleMeasurementUnit
   * 字段含义: 销售计量单位
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  saleMeasurementUnit ;
  
  /**
   * 取单位重量，计算值
   * @property weightUnit
   * 字段含义: 单位重量
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  weightUnit ;
  
  /**
   * 每个销售单位内对应的物料数量，组合售卖产品对应的物料数量
   * @property numbersPerMeasurementUnit
   * 字段含义: 每个销售单位的物料数量
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 
   */
  numbersPerMeasurementUnit ;
  
  /**
   * 面料：宝蓝色、其他、白色...,延用现有字典值，默认物料同名值
   * @property color
   * 字段含义: 颜色
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  color ;
  
  /**
   * 面料：素色，人字，格...，延用现有字典值。默认物料同名值
   * @property pattern
   * 字段含义: 花型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  pattern ;
  
  /**
   * 面料：单件、大衣、衬衫...，延用现有字典值，默认物料同名值
   * @property category
   * 字段含义: 品类
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  category ;
  
  /**
   * 面料：面料的生产地点，延用现有字典值。默认物料同名值
   * @property placeOfProduction
   * 字段含义: 产地
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  placeOfProduction ;
  
  /**
   * 面料+成品：是由海关合作理事会（现名世界海关组织）主持制定的一部供海关、统计、进出口管理及与国际贸易各方共同使用的商品分类编码，HS编码虚拟为空。默认物料同名值
   * @property hsCode
   * 字段含义: 海关编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  hsCode ;
  
  /**
   * 面料：原产品分类，常规-A，新品，清货...,延用现有字典值。成品+虚拟为空。默认物料同名值
   * @property productClass
   * 字段含义: 产品属性
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  productClass ;
  
  /**
   * 与之相关的可替代产品编号
   * @property suggestion
   * 字段含义: 推荐替代品
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  suggestion ;
  
  /**
   * 基础款，时尚潮流款，时尚基础款，延用现有字典值
   * @property fashion
   * 字段含义: 时尚度
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  fashion ;
  
  /**
   * 四季、夏季，冬季，其他，延用现有字典值 。虚拟为空。默认其他
   * @property season
   * 字段含义: 产品特性
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  season ;
  
  /**
   * 该产品意厉维放在那一季销售，W17，S23等，一般指所在画册样本的季节，也就是初上市的季节，延用现有字典值。虚拟产品为空
   * @property saleSeason
   * 字段含义: 销售季
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  saleSeason ;
  
  /**
   * 面料：APP团购推荐展示，目前为空，1星，2星，3星
   * @property suggestStar
   * 字段含义: 团购推荐指数
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  suggestStar ;
  
  /**
   * 说明产品更多详细信息的文本
   * @property details
   * 字段含义: 产品详细信息
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  details ;
  
  /**
   * APP或其他展示平台，需要获取的产品图片信息
   * @property thumbnail
   * 字段含义: 产品缩略图地址
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  thumbnail ;
  
  /**
   * 面料：固定幅宽下，每延米产品的重量，计算固定值，.后端取值时：如为空可以取延米克重展示使用的区间平均值.成品和虚拟为空.默认物料同名值
   * @property weightPerMeter
   * 字段含义: 延米克重
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  weightPerMeter ;
  
  /**
   * 
   * @property materialSn
   * 字段含义: 物料内码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  materialSn ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'product'; // 根据具体情况配置
  static modelName = 'product';
  
  
  /**
   * @class BaseProduct
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 面料，成品，虚拟,
    * 字段状态: undefined
    * 字段含义: 产品类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectType', 'type');
    
    
    /*
    * 唯一标识，自动生成,
    * 字段状态: undefined
    * 字段含义: 产品内码
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'productSn');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    productHelper ? Object.assign(this,productHelper) : '';
  };
};

//if(productHelper) Object.assign(BaseProduct.prototype,productHelper);
if(productStaticHelper) Object.assign(BaseProduct,productStaticHelper);
export default BaseProduct;
