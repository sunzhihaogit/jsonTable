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
import { storageHelper } from '@/models.v2/helper';
import { storageStaticHelper } from '@/models.v2/staticHelper';

export class BaseStorage extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 库模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 仓位编号
   * @property warehouseNo
   * 字段含义: 仓位编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  warehouseNo ;
  
  /**
   * 仓位名称
   * @property warehouseName
   * 字段含义: 仓位名称
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  warehouseName ;
  
  /**
   * 虚拟库 (1：是，0：否)
   * @property isVirtual
   * 字段含义: WMS虚拟库 
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  isVirtual ;
  
  /**
   * 仓位id
   * @property headId
   * 字段含义: 仓位id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: 
   */
  headId ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'virtualinventory'; // 根据具体情况配置
  static modelName = 'storage';
  
  
  /**
   * @class BaseStorage
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 库位编号,
    * 字段状态: undefined
    * 字段含义: 库位编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectNo', 'storageNo');
    
    
    /*
    * 库位名称,
    * 字段状态: undefined
    * 字段含义: 库位名称
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('name', 'storageName');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    storageHelper ? Object.assign(this,storageHelper) : '';
  };
};

//if(storageHelper) Object.assign(BaseStorage.prototype,storageHelper);
if(storageStaticHelper) Object.assign(BaseStorage,storageStaticHelper);
export default BaseStorage;
