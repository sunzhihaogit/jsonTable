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
import { businessCustomerApiClientHelper } from '@/models.v2/helper';
import { businessCustomerApiClientStaticHelper } from '@/models.v2/staticHelper';

export class BaseBusinessCustomerApiClient extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 业务客户API账号关系模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 业务客户名称
   * @property businessCustomerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  businessCustomerName ;
  
  /**
   * 业务客户号
   * @property businessCustomerNo
   * 字段含义: 客户号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  businessCustomerNo ;
  
  /**
   * 登陆账号
   * @property clientId
   * 字段含义: 登陆账号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  clientId ;
  
  /**
   * 付款账户名称
   * @property accountName
   * 字段含义: 付款账户名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  accountName ;
  
  /**
   * 付款账户号
   * @property accountNo
   * 字段含义: 付款账户号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  accountNo ;
  
  /**
   * 价单编码
   * @property priceListId
   * 字段含义: 价单编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  priceListId ;
  
  /**
   * 财务客户名称
   * @property financeCustomerName
   * 字段含义: 付款方
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  financeCustomerName ;
  
  /**
   * 财务客户号
   * @property financeCustomerNo
   * 字段含义: 付款方号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置建模":"BaseBusinessCustomerApiClient"}
   */
  financeCustomerNo ;
  
  /**
   * 付款账户id
   * @property accountId
   * 字段含义: 付款账户id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: 
   */
  accountId ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'mdm-platform'; // 根据具体情况配置
  static modelName = 'businessCustomerApiClient';
  
  
  /**
   * @class BaseBusinessCustomerApiClient
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    businessCustomerApiClientHelper ? Object.assign(this,businessCustomerApiClientHelper) : '';
  };
};

//if(businessCustomerApiClientHelper) Object.assign(BaseBusinessCustomerApiClient.prototype,businessCustomerApiClientHelper);
if(businessCustomerApiClientStaticHelper) Object.assign(BaseBusinessCustomerApiClient,businessCustomerApiClientStaticHelper);
export default BaseBusinessCustomerApiClient;
