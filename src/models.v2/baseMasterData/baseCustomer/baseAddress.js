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
import { addressHelper } from '@/models.v2/helper';
import { addressStaticHelper } from '@/models.v2/staticHelper';

export class BaseAddress extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 客户联系地址模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 
   * @property customerName
   * 字段含义: 客户
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  customerName ;
  
  /**
   * 
   * @property contactName
   * 字段含义: 联系人姓名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  contactName ;
  
  /**
   * 
   * @property countryCode
   * 字段含义: 所在国家
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  countryCode ;
  
  /**
   * 
   * @property provinceCode
   * 字段含义: 所在省份
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  provinceCode ;
  
  /**
   * 
   * @property cityCode
   * 字段含义: 所在市
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  cityCode ;
  
  /**
   * 
   * @property townCode
   * 字段含义: 区县
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  townCode ;
  
  /**
   * 
   * @property addrStr
   * 字段含义: 详细地址
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  addrStr ;
  
  /**
   * 
   * @property postCode
   * 字段含义: 邮编
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  postCode ;
  
  /**
   * 
   * @property isDefault
   * 字段含义: 默认地址
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: 
   */
  isDefault ;
  
  /**
   * 
   * @property customerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  customerNo ;
  
  /**
   * 
   * @property contactNo
   * 字段含义: 联系人编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  contactNo ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'customer'; // 根据具体情况配置
  static modelName = 'address';
  
  
  /**
   * @class BaseAddress
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * ,
    * 字段状态: undefined
    * 字段含义: 地址编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'addressNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    addressHelper ? Object.assign(this,addressHelper) : '';
  };
};

//if(addressHelper) Object.assign(BaseAddress.prototype,addressHelper);
if(addressStaticHelper) Object.assign(BaseAddress,addressStaticHelper);
export default BaseAddress;
