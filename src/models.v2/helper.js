// commonHelper
import {DictArray} from "./utils/dictArray"
import {
  getToday,
  round,
  toHash,
  toHashByGroup,
  timeFormat
} from '@/utils/index.js';
import { postApi } from '@/api/utils';
import {BaseRecord} from './baseRecord'
const commonHelper = {
  /**
   *  从一个目标列表上进行clone，生成凭证行
   * @method cloneListFrom
   * @param {Array} arr 目标数组
   * @param {Boolean} filter 是否过滤无效数组元素
   * @params {Funciton} callback 回调函数
   * @example
   *      this.cloneListFrom(this.hotInstanceSetting.data)
   */
  cloneListFrom(arr, filter = false, callback) {
    //uuid不一样
    let r = this.createListFrom(arr, filter);
    r = r.map((line, index) => {
      line.uuid = uuidv4();
      if (callback) callback(line);
      return line
    })
    return r;
  },
  /**
   *  从一个目标列表上进行创建，生成凭证行
   * @method createListFrom
   * @param {Array} arr 目标数组
   * @param {Boolean} filter 是否过滤无效数组元素
   * @params {Funciton} callback 回调函数
   * @example
   *     this.createListFrom(this.hotInstanceSetting.data)
   */
  createListFrom(arr = [], filter = false, callback) {
    let _arr = arr;
    if (filter == true) {
      _arr = arr.map((line, index) => {
        if (line != undefined && Object.keys(line).length !== 0 && line.message == null)
          return line
      }).filter(ele => ele != null);
    }
    return _arr.map((item, index) => {
      item.getHeader = () => this;
      let result = new this.ITEMCLASS(item);
      result.showLineNum = index + 1;
      if (callback) {
        callback(result, item)
      }
      return result;
    });
  },
  /**
   *  返回格式化后的createTime
   * @method getCreateTime
   * @example
   *     TODO, 这个其实应该用get_createTime方法解决
   *     this.getCreateTime
   */
  getCreateTime() {
    return timeFormat(this.createTime);
  },
  /**
   *  itemList的setter方法，用以保证凭证行的对象都是标准类对象
   * @method set_itemList
   * @example
   *     this.orderLines=hotInstanceSetting.data
   */
  set_itemList(list) { //赋值表单行的时候，自动将自己挂载到行实例上
    if (!list) return;
    this._itemList = list.map((line) => {
      let result = new this.ITEMCLASS(line)
      result.getHeader = () => this;
      return result
    })
  },
  /**
   *  根据行号获取行对象
   * @method getLineByLineNum
   * @example
   *     this.getLineByLineNum(2)//获取行号为２的行
   */
  getLineByLineNum(num) {
    return this.itemList.filter(item => item.lineNum == num).pop()
  },
  /**
   *  创建行号,通常在保存或者向后端创建的时候调用一次
   * @method createLineNum
   * @example
   *     this.createLineNum()
   */
  createLineNum() {
    let list = this.itemList;
    this.getMaxLineNum();
    list.filter(item => item.lineNum == 0 || !Number.isInteger(item.lineNum)).forEach((item, index) => item.lineNum = ++this._maxLineNum);
    return
  },
  /**
   *  获取一个当前的最大行号，用于createLineNum自增
   * @method getMaxLineNum
   * @example
   *     this.validLines().map(line=>line.productCode);
   */
  getMaxLineNum() {
    if (!Number.isInteger(this._maxLineNum)) this._maxLineNum = 0; //如果已经调用过了就不再改变了
    let list = this.itemList ? this.itemList : [];
    let lineNums = list.filter(item => Number.isInteger(item.lineNum)).map((item, index) => item.lineNum)
    let maxLineNum = Math.max(...lineNums)
    maxLineNum = maxLineNum ? maxLineNum : 0
    this._maxLineNum = Math.max(maxLineNum, this._maxLineNum);
  },
  /**
   *  有效的凭证行，过滤掉了id为空的行
   * @method validLines
   * @return {Array} lines
   * @example
   *     this.validLines().map(line=>line.productCode);
   */
  validLines(callback=()=>true) {
    if (!this.orderLines) return [];
    let r=this.orderLines.map((line, index) => {
      if (line == null) return null;
      if (line.type && line.type == "SUMMARY") return null;
      if (!line.uuid) return null;
      if(!callback(line,index))  return null;
      if(!line[line.constructor.VALIDFIELD||"id"]) return null;
      return line
      // if (line.id) return line;
    }).filter(ele => ele);
    return r
  },
  /**
   *   对凭证行进行求和
   * @method sum
   * @example
   * 　　this.sum("quantity"); //对数量进行求和
   */
  sum(attr, accuracy = 2) { //汇总行上的数值
    let result = DictArray.$(this.validLines()).sum(attr, accuracy)
    return round(result, accuracy)
  },
  /**
   *   对凭证行进行求最小值
   * @method min
   * @example
   * 　　this.min("price"); //对单价进行求最小值
   * 　　this.min("lineNum")
   */
  min(attr) { //汇总行上的数值
    let result = DictArray.$(this.validLines()).min(attr)
    return result
  },
  /**
   *   对凭证行进行求最大值
   * @method max
   * @example
   * 　　this.min("amount"); //对金额进行求最大值
   * 　　this.min("showNum")
   */
  max(attr) { //汇总行上的数值
    let result = DictArray.$(this.validLines()).max(attr)
    return result
  },
  /**
   *   对凭证行进行求平均值
   * @method avg
   * @example
   * 　　this.avg("price");
   * 　　this.avg("quantity")
   */
  avg(attr, accuracy = 2) { //汇总行上的数值
    let result = DictArray.$(this.validLines()).avg(attr, accuracy)
    return result
  },
  /**
   *   对凭证行进行变换数组导出
   * @method avg
   * @example
   * 　　this.toArray("lineNum")//导出凭证行的行号列表
   * 　　this.toArray()//等价与this.validLines()
   */
  toArray(attr, distinct = false, lines = this.validLines()) {
    //将凭证行列表map成指定属性值的数组，如产品代码数组
    let filter = attr ? item => item && item[attr] && !item.message : item => item && !item.message
    let result = DictArray.$(lines.filter(filter)).toArray(attr, distinct)
    return result
  },
  /**
   *  根据传入的凭证行，生成一行汇总行
   * @method getSummaryLine
   * @param {Array} activeLines 凭证行
   * @param {Object} 汇总字段  {sum:[],avg:[],max:[],min:{}}
   * @example
   *         classs A extends BaseInvoice{
   *              constructor(){
   *                 this.currency=1
   *              }
   *         }
   *         let a=new A()
   *         this.getSummaryLine(this.orderLines,{sum:["quantity"],avg:["amount"]}) //生成汇总行，数量求和，金额求平均
   */
  getSummaryLine(activeLines = [], prop = {}) {
    let {
      sum,
      avg,
      min,
      max
    } = {
      sum: [],
      avg: [],
      min: [],
      max: [],
      ...prop
    };
    let summaryLine = {};
    summaryLine.type = "SUMMARY"
    activeLines = this.createListFrom(activeLines, true)
    sum.forEach(attr => {
      let r = DictArray.$(activeLines).sum(attr)
      summaryLine[attr] = `SUM[${round(r, 2)}]`
    })
    avg.forEach(attr => {
      let r = DictArray.$(activeLines).avg(attr)
      summaryLine[attr] = `AVG[${round(r, 2)}]`
    })
    max.forEach(attr => {
      let r = DictArray.$(activeLines).max(attr)
      summaryLine[attr] = `MAX[${r}]`
    })
    min.forEach(attr => {
      let r = DictArray.$(activeLines).min(attr)
      summaryLine[attr] = `MIN[${r}]`
    })
    return summaryLine;
  },
  /**
   *   获取汇率
   * @method fetchExchangeRate
   * @example
   *         classs A extends BaseInvoice{
   *              constructor(){
   *                 this.currency=1
   *              }
   *         }
   *         let a=new A()
   *         a.fetchExchangeRate();
   */
  async fetchExchangeRate(callback) {
    this.exchangeRate = "";
    this.exchangeRateEUR = "";
    let currencyList = [{
        index: 1,
        name: 'CNY' // 人民币
      },
      {
        index: 2,
        name: 'USD' // 美元
      },
      {
        index: 3,
        name: 'EUR' // 欧元
      },
      {
        index: 4,
        name: 'GBP' // 英镑
      },
      {
        index: 5,
        name: 'JPY' // 日元
      },
      {
        index: 6,
        name: 'KRW' // 韩元
      },
      {
        index: 7,
        name: 'HKD' // 港币
      }
    ];
    let currencyNameEn = DictArray.$(currencyList).simpleGroupBy('index', (_, value) => value.name)[this.currency];
    let startDate = this.createTime ? this.getCreateTime().split(' ')[0] : timeFormat(new Date()).split(' ')[0];
    let endDate = this.createTime ? this.getCreateTime().split(' ')[0] : timeFormat(new Date()).split(' ')[0];
    let res = await this.exchangeRateList.invoke('', currencyNameEn, startDate, endDate);
    let EURRes = await this.exchangeRateList.invoke('', 'EUR', startDate, endDate);
    this.exchangeRate = res.data && res.data.length ? res.data[0].midPrice : '';
    this.exchangeRateEUR = EURRes.data && EURRes.data.length ? EURRes.data[0].midPrice : '';
    // this.exchangeRate = res.data && res.data.length ? JSON.parse(res.data).rate : '';
    if (callback) callback(this.exchangeRate)
    return this.exchangeRate;
  },
  /**
   *   凭证行用于展现时候的列表集合
   * @method viewLines
   * @example
   *         classs A extends BaseInvoice{
   *              constructor(){
   *              }
   *         }
   *         let a=new A()
   *         hotInstanceSetting.changeData(a.viewLines());//更新列表行
   */
  viewLines(activeLines = this.orderLines) {
    let orderList = this.validLines();
    if (this.enableSummary == true) {
      let summaryLine = this.getSummaryLine(activeLines);
      summaryLine.lineNum = `[${DictArray.$(activeLines).length()}]`;
      orderList = [...orderList, summaryLine]
    }
    return orderList;
  },
  mergeLines(lines) {
    if (!lines) return;
    let newLines = DictArray.$(this.orderLines).mergeBy(lines, "uuid")
    this.orderLines = newLines;
  },
  /**
   *   重载父类的toJsonObject方法，允许调用凭证行的toJsonObject。
   *    注意，
   *    1. 子类可以通过继承重载来定制逻辑
   * @method toJsonObject
   * @example
   *         classs A extends BaseInvoice{
   *              constructor(){
   *              }
   *             toJsonObject(opts={}){
   *                 return super.toJsonObject(opts);
   *             }
   *         }
   *         let a=new A()
   *         a.toJsonObject()
   *
   */
  // toJsonObject(opts = {}) {
  //   let _itemList = this.itemList
  //   this._itemList = this.validLines().map(line => line._toJsonObject())
  //   let result = this._toJsonObject(opts);
  //   this._itemList = _itemList;
  //   return result
  // }
};

// BaseObject
export const objectHelper = {};

// // BaseSO
// export const soHelper = {};

// // BaseSOItem
// export const soItemHelper = {};

// // BaseDO
// export const doHelper = {};

// // BaseDOItem
// export const doItemHelper = {};

// BaseSaleInvoice
export const saleInvoiceHelper = {};

// BaseSaleInvoiceItem
export const saleInvoiceItemHelper = {};

// BasePrereceipt
export const prereceiptHelper = {};

// BaseBill
export const billHelper = {};

// BaseBillItem
export const billItemHelper = {};

// BaseWriteoff
export const writeoffHelper = {};

// BaseWriteoffItem
export const writeoffItemHelper = {};

// BaseMasterData
export const masterDataHelper = commonHelper;

// BaseAccount
export const accountHelper = {};

// BaseAccountItem
export const accountItemHelper = {};

// BaseContact
export const contactHelper = {};

// BaseAddress
export const addressHelper = {};

// BasePartner
export const partnerHelper = {};

// BaseCustomerV2
export const customerHelper = {};

// Reservation
export const reservationHelper = {
};


// BaseOBOrder
export const oBOrderHelper = {
  ...commonHelper,
    async createDo(doklass,isSave="1",itemIds){
      let result = await postApi(doklass.url('createFrom'), {}, {invoiceNo:this.invoiceNo,isSave:isSave,itemIds,invoiceClass:this.constructor.name});
      if(result.code==='0'){
          let r=new doklass(result.data)
          let doItems=result.data.doItems&&result.data.doItems.map(item=>new r.ITEMCLASS(item))
          r.orderLines=doItems||[]
          return r
      }
      return null;
    },
    async shipmentType(){
      this._invoiceTypeList =  DictArray.bind(BaseRecord.dictList, ['SaleOrderType']);
      let list=await this._invoiceTypeList.loadOnce();
      let select=list.find(item=>item.key==this.invoiceType);
      if(!select) select=list[0]||{}
      console.log(select,"shipmentType");
      return select.value.split(".")[0];
    },

};

// BaseOBOrderItem
export const oBOrderItemHelper = {};

// BaseDO
export const dOHelper = {};

// BaseDOItem
export const dOItemHelper = {};

// BaseSO
export const sOHelper = {

};

// BaseSOItem
export const sOItemHelper = {};

// OBInvoice
export const oBInvoiceHelper = commonHelper;

// OBInvoiceItem
export const oBInvoiceItemHelper = {};

// BasePaymentInvoice
export const paymentInvoiceHelper = {};

// BaseReturnOrder
export const returnOrderHelper = {};

// BaseReturnOrderItem
export const returnOrderItemHelper = {};

// BaseInvoice
export const invoiceHelper = {};

// BaseInvoiceItem
export const invoiceItemHelper = {};

// BaseClaimOrder
export const claimOrderHelper = {};

// BaseClaimOrderItem
export const claimOrderItemHelper = {};
