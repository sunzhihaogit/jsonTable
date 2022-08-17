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
import { partnerHelper } from '@/models.v2/helper';
import { partnerStaticHelper } from '@/models.v2/staticHelper';

export class BasePartner extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 伙伴基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * SKA，NKA，RKA，小B
   * @property level
   * 字段含义: 客户分级
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  level ;
  
  /**
   * 法定代表人，天眼察自动带出
   * @property legalRep
   * 字段含义: 法定代表人
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  legalRep ;
  
  /**
   * 营业执照信息，天眼察自动带出
   * @property licenseNo
   * 字段含义: 营业执照号码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  licenseNo ;
  
  /**
   * 营业执照信息，天眼察自动带出
   * @property orgCode
   * 字段含义: 组织机构代码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  orgCode ;
  
  /**
   * 营业执照信息，天眼察自动带出
   * @property taxCode
   * 字段含义: 税务登记证号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  taxCode ;
  
  /**
   * 营业执照上登记的有效起期，天眼察自动带出
   * @property licenseStartDate
   * 字段含义: 有效起期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  licenseStartDate ;
  
  /**
   * 营业执照上登记的有效起期，天眼察自动带出
   * @property licenseEndDate
   * 字段含义: 有效止期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  licenseEndDate ;
  
  /**
   * 营业执照信息，天眼察自动带出
   * @property launchDate
   * 字段含义: 企业成立日期
   * 字段类型: LocalDateTime
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  launchDate ;
  
  /**
   * 企业信息登记，天眼察自动带出
   * @property bankName
   * 字段含义: 开户行
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  bankName ;
  
  /**
   * 企业信息登记，天眼察自动带出
   * @property bankAccount
   * 字段含义: 开户行账户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  bankAccount ;
  
  /**
   * 企业信息登记，天眼察自动带出
   * @property country
   * 字段含义: 注册地所在国家
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  country ;
  
  /**
   * 企业信息登记，天眼察自动带出
   * @property city
   * 字段含义: 注册地所在城市
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  city ;
  
  /**
   * 企业信息登记，天眼察自动带出
   * @property address
   * 字段含义: 注册地址
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  address ;
  
  /**
   * 定制加工厂，品牌成衣-零剪，定制店，线上定制，定制店连锁，财务客户，匿名客户，品牌成衣-职业装，成衣-订货，加工厂-订货
   * @property category
   * 字段含义: 伙伴类别
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  category ;
  
  /**
   * 三证合一后，记录客户税务号的唯一值，个人客户则为空
   * @property socialCode
   * 字段含义: 税务号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseCustomer"}
   */
  socialCode ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'partner';
  
  
  /**
   * @class BasePartner
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    partnerHelper ? Object.assign(this,partnerHelper) : '';
  };
};

//if(partnerHelper) Object.assign(BasePartner.prototype,partnerHelper);
if(partnerStaticHelper) Object.assign(BasePartner,partnerStaticHelper);
export default BasePartner;
