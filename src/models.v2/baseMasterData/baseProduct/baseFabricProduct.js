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
  BaseProduct
} from '@/models.v2/baseMasterData/baseProduct/baseProduct.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { fabricProductHelper } from '@/models.v2/helper';
import { fabricProductStaticHelper } from '@/models.v2/staticHelper';

export class BaseFabricProduct extends BaseProduct{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 面料产品模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'product'; // 根据具体情况配置
  static modelName = 'fabricProduct';
  
  
  /**
   * @class BaseFabricProduct
   * @constructor
   * @extends BaseProduct
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    fabricProductHelper ? Object.assign(this,fabricProductHelper) : '';
  };
};

//if(fabricProductHelper) Object.assign(BaseFabricProduct.prototype,fabricProductHelper);
if(fabricProductStaticHelper) Object.assign(BaseFabricProduct,fabricProductStaticHelper);
export default BaseFabricProduct;
