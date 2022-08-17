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
  BaseAccountItem
} from './baseAccountItem';

import {
  DictArray
} from '@/models.v2/utils/dictArray';
import { accountHelper } from '@/models.v2/helper';
import { accountStaticHelper } from '@/models.v2/staticHelper';

export class BaseAccount extends BaseMasterData{
  //****************以下代码为自动生成的字段声明，请拷贝到源文件
  // 账户模型
  // @约定：需要和后端做交互的字段在类内部声明；不需要的，使用attr_accessor在构造函数里声明
  
  /**
   * 客户中文名称
   * @property customerName
   * 字段含义: 付款方
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 客户信息查询
   */
  customerName ;
  
  /**
   * 零剪，职业装，订货，集团
   * @property businessType
   * 字段含义: 事业部
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 
   */
  businessType ;
  
  /**
   * 账户实际充值金额-流水总值，原币=账户币种
   * @property balance
   * 字段含义: 余额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 查询账户当前余额
   */
  balance ;
  
  /**
   * 账户额度+账户余额-流水总值，原币=账户币种
   * @property totalBalance
   * 字段含义: 可用余额
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 查询账户当前可用余额
   */
  totalBalance ;
  
  /**
   * 账户对应金额币种（标准字典：人民币~新台币）
   * @property originalCurrency
   * 字段含义: 币种
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 用以区别是那个币种的账户
   */
  originalCurrency ;
  
  /**
   * 可透支的金额，绝对值
   * @property credit
   * 字段含义: 账户额度
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 信用账户额度值
   */
  credit ;
  
  /**
   * 款到发货，下月30日，下月25日，下月15日，下下月30日，下下月25日，下下月15日，下下月10日，发货日+90天，发货日+40天，发货日+30天，发货日+5天，6月20日/12月31日，半月收，dh当年6月30日，dh当年12月31日，dh明年6月30日，dh明年12月31日（dh指订货），等
   * @property paymentTerms
   * 字段含义: 付款条件
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 查看信用账户的付款条件，或辅助判断是否有超期
   */
  paymentTerms ;
  
  /**
   * 对应预收，信用，返利账户可支付单一订单百分比比例
   * @property chargableRate
   * 字段含义: 支付比例
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 主要是管理返利账户可支付单一订单百分比比例
   */
  chargableRate ;
  
  /**
   * 是、否，默认为否，打开强制启用可以避免系统每日扫描时，发现超期自动关闭
   * @property isForcedActive
   * 字段含义: 强制启用
   * 字段类型: Boolean
   * 声明类型: FIELD
   * 字段备注: 打开强制启用可以避免系统每日扫描时，发现超期自动关闭
   */
  isForcedActive ;
  
  /**
   * 是1、否0，默认为0，
   * @property isAutoRepay
   * 字段含义: 是否自动还款
   * 字段类型: Integer
   * 声明类型: FIELD
   * 字段备注: 
   */
  isAutoRepay ;
  
  /**
   * 客户编号
   * @property customerNo
   * 字段含义: 付款方编号
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 客户信息查询
   */
  customerNo ;
  
  /**
   * 账户币种对应人民币汇率
   * @property exchangeRate
   * 字段含义: 汇率
   * 字段类型: BigDecimal
   * 声明类型: FIELD
   * 字段备注: 查询当前账户汇率
   */
  exchangeRate ;
  
  /**
   * 记录过渡过程中CRM的账户信息
   * @property refAccountId
   * 字段含义: CRM账户ID
   * 字段类型: String
   * 声明类型: FIELD
   * 字段备注: 记录过渡过程中CRM的账户信息
   */
  refAccountId ;
  
  // ****************以上代码为自动生成的字段声明，请拷贝到源文件


  static serviceName = 'account'; // 根据具体情况配置
  static modelName = 'account';
  ITEMCLASS = BaseAccountItem;
  ITEMCLASSFIELD = ['accountNo','accountNo'];
  /**
   * @class BaseAccount
   * @constructor
   * @extends BaseMasterData
   */
  constructor(data = {}, state) {
    super(data, state);
    // ****************以下代码为自动生成的别名声明，请拷贝到源文件
    
    /*
    * 消费账户名称，默认是账户类型名称，如预收账户,
    * 字段状态: undefined
    * 字段含义: 账户名称
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 账户信息查询
    */
    this.alias('name', 'accountName');
    
    
    /*
    * 预收账户，信用账户，返利账户，只有财务客户才有账户（预收，返利，信用），暂定后门：业务客户可以有信用账户，未来纯业务客户，是没有账户的,
    * 字段状态: undefined
    * 字段含义: 账户类型
    * 字段类型: Integer
    * 声明类型: ALIAS
    * 字段备注: 区分账户类型
    */
    this.alias('objectType', 'accountType');
    
    
    /*
    * 停用，启用，默认为启用,
    * 字段状态: undefined
    * 字段含义: 账户状态
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 控制账户是否允许使用，一般超过信用管控会自动停用
    */
    this.alias('objectStatus', 'accountStatus');
    
//    this.attr_accessor({"objectStatus":1})//设置默认值
    
    
    /*
    * 唯一标识，MDM账户ID,
    * 字段状态: undefined
    * 字段含义: 账户编号
    * 字段类型: String
    * 声明类型: ALIAS
    * 字段备注: 账户信息查询
    */
    this.alias('objectNo', 'accountNo');
    
    
    //****************以上代码为自动生成的别名声明，请拷贝到源文件
    this.merge(data);
    if (!this.uuid) this.uuid = uuidv4(); //如果没有uuid则分配一个
    accountHelper ? Object.assign(this,accountHelper) : '';
  };
};

//if(accountHelper) Object.assign(BaseAccount.prototype,accountHelper);
if(accountStaticHelper) Object.assign(BaseAccount,accountStaticHelper);
export default BaseAccount;
