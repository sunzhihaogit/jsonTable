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
  BaseCustomer
} from '@/models.v2/baseMasterData/basePartner/baseCustomer/baseCustomer.js';


import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { cRMCustomerHelper } from '@/models.v2/helper';
import { cRMCustomerStaticHelper } from '@/models.v2/staticHelper';

export class CRMCustomer extends BaseCustomer{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // CRM客户信息模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'oms'; // 根据具体情况配置
  static modelName = 'crmCustomer';
  
  
  /**
   * @class CRMCustomer
   * @constructor
   * @extends BaseCustomer
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    cRMCustomerHelper ? Object.assign(this,cRMCustomerHelper) : '';
  };
};

//if(cRMCustomerHelper) Object.assign(CRMCustomer.prototype,cRMCustomerHelper);
if(cRMCustomerStaticHelper) Object.assign(CRMCustomer,cRMCustomerStaticHelper);
export default CRMCustomer;
