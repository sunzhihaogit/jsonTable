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
  BaseObject
} from '@/models.v2//baseObject.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { masterDataHelper } from '@/models.v2/helper';
import { masterDataStaticHelper } from '@/models.v2/staticHelper';

export class BaseMasterData extends BaseObject{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 主数据基类模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 
   * @property name
   * 字段含义: 联系人姓名
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  name ;
  
  /**
   * 
   * @property enName
   * 字段含义: 英文名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  enName ;
  
  /**
   * 
   * @property refMasterDataNo
   * 字段含义: 关联主数据编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  refMasterDataNo ;
  
  /**
   * 
   * @property status
   * 字段含义: 状态
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  status ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = ''; // 根据具体情况配置
  static modelName = 'masterData';
  
  
  /**
   * @class BaseMasterData
   * @constructor
   * @extends BaseObject
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    masterDataHelper ? Object.assign(this,masterDataHelper) : '';
  };
};

//if(masterDataHelper) Object.assign(BaseMasterData.prototype,masterDataHelper);
if(masterDataStaticHelper) Object.assign(BaseMasterData,masterDataStaticHelper);
export default BaseMasterData;
