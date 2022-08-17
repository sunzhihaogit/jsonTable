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
import { leadTimeHelper } from '@/models.v2/helper';
import { leadTimeStaticHelper } from '@/models.v2/staticHelper';

export class BaseLeadTime extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 物料交期模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 工厂生产交期
   * @property produceLeadTime
   * 字段含义: 工厂生产交期
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  produceLeadTime ;
  
  /**
   * 发货（空运+清关+入库操作）交期
   * @property shipLeadTime
   * 字段含义: 发运交期
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  shipLeadTime ;
  
  /**
   * 预付款交期
   * @property prepaidLeadTime
   * 字段含义: 预付款交期
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  prepaidLeadTime ;
  
  /**
   * 新首工厂生产交期
   * @property firstProduceLeadTime
   * 字段含义: 新首工厂生产交期
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  firstProduceLeadTime ;
  
  /**
   * 新首发货（空运+清关+入库操作）交期
   * @property firstShipLeadTime
   * 字段含义: 新首发货交期
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  firstShipLeadTime ;
  
  /**
   * 最小起订量
   * @property moq
   * 字段含义: 最小起订量
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  moq ;
  
  /**
   * 新首最小起订量
   * @property firstMoq
   * 字段含义: 新首最小起订量
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  firstMoq ;
  
  /**
   * 按规则自定义编号；如VBC是V+系列+花型+颜色
   * @property materialNo
   * 字段含义: 物料编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialNo ;
  
  /**
   * 物料的系统内码
   * @property materialSn
   * 字段含义: 物料系统编码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialSn ;
  
  /**
   * 物料的数据表id
   * @property materialId
   * 字段含义: 物料id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true}
   */
  materialId ;
  
  /**
   * 供应商简码
   * @property supplierShortCode
   * 字段含义: 供应商简码
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  supplierShortCode ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'material'; // 根据具体情况配置
  static modelName = 'leadTime';
  
  
  /**
   * @class BaseLeadTime
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    leadTimeHelper ? Object.assign(this,leadTimeHelper) : '';
  };
};

//if(leadTimeHelper) Object.assign(BaseLeadTime.prototype,leadTimeHelper);
if(leadTimeStaticHelper) Object.assign(BaseLeadTime,leadTimeStaticHelper);
export default BaseLeadTime;
