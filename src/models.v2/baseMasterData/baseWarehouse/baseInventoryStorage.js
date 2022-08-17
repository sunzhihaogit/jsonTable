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
  BaseStorage
} from '@/models.v2/baseMasterData/baseWarehouse/baseStorage.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { inventoryStorageHelper } from '@/models.v2/helper';
import { inventoryStorageStaticHelper } from '@/models.v2/staticHelper';

export class BaseInventoryStorage extends BaseStorage{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 可售库存关联库模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 业务类型(集团，职业装，零剪等)
   * @property businessType
   * 字段含义: 业务类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessType ;
  
  /**
   * 优先级
   * @property priority
   * 字段含义: 优先级
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  priority ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'inventoryStorage';
  
  
  /**
   * @class BaseInventoryStorage
   * @constructor
   * @extends BaseStorage
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 业务类型(日常订单,样本画册订单等),
    * 字段状态: undefined
    * 字段含义: 订单类型
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 
    */
    this.alias('objectType', 'invoiceType');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    inventoryStorageHelper ? Object.assign(this,inventoryStorageHelper) : '';
  };
};

//if(inventoryStorageHelper) Object.assign(BaseInventoryStorage.prototype,inventoryStorageHelper);
if(inventoryStorageStaticHelper) Object.assign(BaseInventoryStorage,inventoryStorageStaticHelper);
export default BaseInventoryStorage;
