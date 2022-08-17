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
  BaseProjectItem
} from './baseProjectItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { projectHelper } from '@/models.v2/helper';
import { projectStaticHelper } from '@/models.v2/staticHelper';

export class BaseProject extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 职业装项目模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'project';
  ITEMCLASS = BaseProjectItem;
  ITEMCLASSFIELD = ['id','headId'];
  /**
   * @class BaseProject
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    projectHelper ? Object.assign(this,projectHelper) : '';
  };
};

//if(projectHelper) Object.assign(BaseProject.prototype,projectHelper);
if(projectStaticHelper) Object.assign(BaseProject,projectStaticHelper);
export default BaseProject;
