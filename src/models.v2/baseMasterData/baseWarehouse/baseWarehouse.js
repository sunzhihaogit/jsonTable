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
  BaseStorage
} from './baseStorage';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { warehouseHelper } from '@/models.v2/helper';
import { warehouseStaticHelper } from '@/models.v2/staticHelper';

export class BaseWarehouse extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 仓模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'virtualinventory'; // 根据具体情况配置
  static modelName = 'warehouse';
  ITEMCLASS = BaseStorage;
  ITEMCLASSFIELD = ['id','headId'];
  /**
   * @class BaseWarehouse
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * A,B,C,D,
    * 字段状态: undefined
    * 字段含义: 仓号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'warehouseNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    warehouseHelper ? Object.assign(this,warehouseHelper) : '';
  };
};

//if(warehouseHelper) Object.assign(BaseWarehouse.prototype,warehouseHelper);
if(warehouseStaticHelper) Object.assign(BaseWarehouse,warehouseStaticHelper);
export default BaseWarehouse;
