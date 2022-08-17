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
import { accountItemHelper } from '@/models.v2/helper';
import { accountItemStaticHelper } from '@/models.v2/staticHelper';

export class BaseAccountItem extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 账户流水模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 预收单转入，返利、订单支付，订单取消，人为调整，还款出，还款入，退货，退款，贷项应收，贷项通知
   * @property category
   * 字段含义: 发生事由
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  category ;
  
  /**
   * 流水发生金额，扣减类型的为负，新增或退返类型为正
   * @property amount
   * 字段含义: 发生金额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  amount ;
  
  /**
   * 账户对应金额币种（标准字典：人民币~新台币）
   * @property originalCurrency
   * 字段含义: 币种
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  originalCurrency ;
  
  /**
   * 客户中文名称
   * @property customerName
   * 字段含义: 付款方
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  customerName ;
  
  /**
   * 预收账户，信用账户，返利账户
   * @property accountType
   * 字段含义: 账户类型
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  accountType ;
  
  /**
   * 账户实际充值金额在该流水发生后余额
   * @property balance
   * 字段含义: 账户余额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  balance ;
  
  /**
   * 账户额度+实际充值金额，在该流水发生后余额
   * @property totalBalance
   * 字段含义: 账户可用余额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  totalBalance ;
  
  /**
   * 预收单号，退款单号，销售订单号，退货单号，贷项通知，贷项应收
   * @property refInvoiceNo
   * 字段含义: 相关凭据号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  refInvoiceNo ;
  
  /**
   * 可透支的金额，绝对值
   * @property credit
   * 字段含义: 账户额度
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  credit ;
  
  /**
   * 款到发货，下月30日，下月25日，下月15日，下下月30日，下下月25日，下下月15日，下下月10日，发货日+90天，发货日+40天，发货日+30天，发货日+5天，6月20日/12月31日，半月收，dh当年6月30日，dh当年12月31日，dh明年6月30日，dh明年12月31日（dh指订货），等
   * @property paymentTerms
   * 字段含义: 付款条件
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  paymentTerms ;
  
  /**
   * 对应预收，信用，返利账户可支付单一订单百分比比例
   * @property chargableRate
   * 字段含义: 支付比例
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  chargableRate ;
  
  /**
   * 唯一标识，MDM账户ID
   * @property accountNo
   * 字段含义: 账户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  accountNo ;
  
  /**
   * 客户编号
   * @property customerNo
   * 字段含义: 客户编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  customerNo ;
  
  /**
   * 记录过渡过程中CRM的账户流水信息
   * @property refAccountItemId
   * 字段含义: CRM账户流水ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  refAccountItemId ;
  
  /**
   * 账户表id,数据库id
   * @property headId
   * 字段含义: 账户id
   * 字段类型: Long
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  headId ;
  
  /**
   * 账户币种对应人民币汇率
   * @property exchangeRate
   * 字段含义: 汇率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  exchangeRate ;
  
  /**
   * 行号
   * @property lineNo
   * 字段含义: 行号
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
   */
  lineNo ;
  
  /**
   * 
   * @property refDoNo
   * 字段含义: 关联发货单号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  refDoNo ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'account'; // 根据具体情况配置
  static modelName = 'accountItem';
  
  
  /**
   * @class BaseAccountItem
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 唯一标识，MDM账户流水ID,
    * 字段状态: undefined
    * 字段含义: 流水号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
    */
    this.alias('objectNo', 'accountItemNo');
    
    
    /*
    * 有效，无效,
    * 字段状态: undefined
    * 字段含义: 流水状态
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: {"原型字段":true,"配置名称":"BaseAccountItem"}
    */
    this.alias('objectStatus', 'accountItemStatus');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    accountItemHelper ? Object.assign(this,accountItemHelper) : '';
  };
};

//if(accountItemHelper) Object.assign(BaseAccountItem.prototype,accountItemHelper);
if(accountItemStaticHelper) Object.assign(BaseAccountItem,accountItemStaticHelper);
export default BaseAccountItem;
