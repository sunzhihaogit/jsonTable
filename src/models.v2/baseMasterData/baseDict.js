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
import { dictHelper } from '@/models.v2/helper';
import { dictStaticHelper } from '@/models.v2/staticHelper';

export class BaseDict extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 字典模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 
   * @property key
   * 字段含义: 键
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  key ;
  
  /**
   * 
   * @property value
   * 字段含义: 值
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  value ;
  
  /**
   * 
   * @property bakValue
   * 字段含义: 备用值
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  bakValue ;
  
  /**
   * 
   * @property seq
   * 字段含义: 顺序
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  seq ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'infrastructure'; // 根据具体情况配置
  static modelName = 'dict';
  
  
  /**
   * @class BaseDict
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    dictHelper ? Object.assign(this,dictHelper) : '';
  };
};

//if(dictHelper) Object.assign(BaseDict.prototype,dictHelper);
if(dictStaticHelper) Object.assign(BaseDict,dictStaticHelper);
export default BaseDict;
