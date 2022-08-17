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
  BaseMaterial
} from '@/models.v2/baseMasterData/baseMaterial/baseMaterial.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { fabricMaterialHelper } from '@/models.v2/helper';
import { fabricMaterialStaticHelper } from '@/models.v2/staticHelper';

export class BaseFabricMaterial extends BaseMaterial{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 面料物料模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'material'; // 根据具体情况配置
  static modelName = 'fabricMaterial';
  
  
  /**
   * @class BaseFabricMaterial
   * @constructor
   * @extends BaseMaterial
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    fabricMaterialHelper ? Object.assign(this,fabricMaterialHelper) : '';
  };
};

//if(fabricMaterialHelper) Object.assign(BaseFabricMaterial.prototype,fabricMaterialHelper);
if(fabricMaterialStaticHelper) Object.assign(BaseFabricMaterial,fabricMaterialStaticHelper);
export default BaseFabricMaterial;
