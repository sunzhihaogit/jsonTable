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
import { virtualProductHelper } from '@/models.v2/helper';
import { virtualProductStaticHelper } from '@/models.v2/staticHelper';

export class BaseVirtualProduct extends BaseProduct{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 虚拟产品模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'product'; // 根据具体情况配置
  static modelName = 'virtualProduct';
  
  
  /**
   * @class BaseVirtualProduct
   * @constructor
   * @extends BaseProduct
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    virtualProductHelper ? Object.assign(this,virtualProductHelper) : '';
  };
};

//if(virtualProductHelper) Object.assign(BaseVirtualProduct.prototype,virtualProductHelper);
if(virtualProductStaticHelper) Object.assign(BaseVirtualProduct,virtualProductStaticHelper);
export default BaseVirtualProduct;
