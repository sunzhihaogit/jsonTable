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
import { projectItemHelper } from '@/models.v2/helper';
import { projectItemStaticHelper } from '@/models.v2/staticHelper';

export class BaseProjectItem extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 职业装项目明细模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'projectItem';
  
  
  /**
   * @class BaseProjectItem
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    projectItemHelper ? Object.assign(this,projectItemHelper) : '';
  };
};

//if(projectItemHelper) Object.assign(BaseProjectItem.prototype,projectItemHelper);
if(projectItemStaticHelper) Object.assign(BaseProjectItem,projectItemStaticHelper);
export default BaseProjectItem;
