import {
  v4 as uuidv4
} from 'uuid';
import {
  DictArray
} from './utils/dictArray.js';
import {
  convertCurrency
} from '@/utils/convertCurrency.js';
import {
  getApi,
  postApi,
  deleteApi,
  putApi,
  downloadApi
} from '@/api/utils';
import {
  dictList
} from '@/api/dictList';
import {
  uploadFile
} from '@/api/publicApi';
import {
  Message
} from 'element-ui';
export class BaseRecord {
  ITEMCLASS = null;
  ITEMCLASSFIELD = null;
  _aliasMap = {};
  /**
   * BaseClass是前端库的顶级基类
   * @class BaseObject
   * @constructor
   */
  constructor(data = {}, state) {
    this.applyState(state);
    this.merge(data);
  }
  /**
   *  当前对象的所有可读属性。
   * @method entries
   * @param {Function} callback 回调函数
   * ＠param {Object} opts 过滤选项
   * ＠return {Array} result
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_accessor("name","age") //声明属性 name，age
   *                  this.attr_accessor({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *              }
   *         }
   *         let a=new A()
   *         a.entries()// [["name",{...}],["age",{...}]]
   */
  entries(callback, opts = {}) {
    let {
      except = []
    } = opts
    let result = Object.entries(Object.getOwnPropertyDescriptors(this)).filter(([key, des]) => !key.startsWith("_") && des.get);
    //let result=Object.keys(this).filter(item=>!item.startsWith("_"))
    if (callback && result) {
      result = result.map(callback)
    }
    result = result != null ? result : []
    return result
  };
  _attr_accessor(opt, ...attrs) { //声明属性变量，可读写
    attrs.forEach(attr => {
      if (attr instanceof Object) { //如果是个Object，这声明带赋值默认值
        Object.keys(attr).forEach(key => {
          this._attr_accessor(opt, key)
          this[`_${key}`] = attr[key] //设置默认值
        })
        return
      }

      let _attr = `_${attr}`

      let getter = () => this[_attr]; //默认getter
      let setter = (val) => this[_attr] = val //默认setter

      //如果定义get_newattr则作为getter
      if (this[`get_${attr}`]) {
        getter = this[`get_${attr}`];
      }

      //如果定义set_newattr则作为getter
      if (this[`set_${attr}`]) {
        setter = this[`set_${attr}`];
      }

      let opts = {
        enumerable: false
      }
      if (Object.keys(opt).includes("get")) opts["get"] = getter
      if (Object.keys(opt).includes("set")) opts["set"] = setter
      let result = Object.defineProperty(this, attr, opts)
    })
  };
  /**
   *   声明可读写的属性变量, 注意:
   * 　  1. 在构造函数中声明，
   *  　 2.声明的变量在toJsonObject()之后，变量会自动过滤掉
   *  　 3. 可使用get_<属性名>,set_<属性名>,来覆盖默认的getter/setter
   * @method attr_accessor
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_accessor("name","age") //声明属性 name，age
   *                  this.attr_accessor({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *                }
   *               get_name(){return "Name:"+this._name; }//覆盖默认的getter
   *               set_name(val){this._name=value}//覆盖默认的setter
   *            }
   *          let a=new A()
   *          console.log(a.name,a.age) // "Name:defaultName",10
   *          a.name="test";
   *          console.log(a,name) // "Name:test"
   */
  attr_accessor(...attrs) { //声明属性变量，可读写
    this._attr_accessor({
      get: true,
      set: true
    }, ...attrs)
  };
  /**
   *  声明只读的属性变量。 配合Alias等使用，用来声明类似不可变的变量，保证在和后端返回对象merge的时候不会被污染
   *  注意，
   *   1. 在构造函数中声明，
   *   2.声明的变量在toJsonObject()之后，变量会自动过滤掉
   *   3. 可使用get_<属性名>，来覆盖默认的getter
   * @method attr_reader
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_reader({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *              }
   *             get_name(){return "Name:"+this._name; }//覆盖默认的getter
   *          }
   *           let a=new A()
   *           console.log(a.name,a.age) // "Name:defaultName",10
   *           a.name="test";//会报错
   */
  attr_reader(...attrs) { //声明只读属性
    this._attr_accessor({
      get: true
    }, ...attrs)
  };

  /**
   *   声明只写的属性变量。配合Alias等使用， 用来声明不可读的变量，保证发送后端对象的时候不会发送
   *     注意，
   *      1.  在构造函数中声明，
   *      2.  声明的变量在toJsonObject()之后，变量会自动过滤掉
   *      3.  可使用set_<属性名>，来覆盖默认的setter
   * @method attr_writer
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_reader({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *              }
   *             set_name(val){ this._name=val; }//覆盖默认的getter
   *            }
   *         let a=new A()
   *         console.log(a.name,a._name,a.age) // undefined,"defaultName",10
   *         a.name="test";
   *         a._name//"test"
   */
  attr_writer(...attrs) { //声明只写属性
    this._attr_accessor({
      set: true
    }, ...attrs)
  };
  _alias(opt, attr, new_attr) { //给一个属性声明别名，可读写
    if (!this.hasOwnProperty(attr)) return;
    let getter = () => this[attr]; //默认getter
    let setter = (val) => this[attr] = val //默认setter
    //如果定义get_newattr则作为getter
    if (this[`get_${new_attr}`]) {
      getter = this[`get_${new_attr}`];
    }
    //如果定义set_newattr则作为getter
    if (this[`set_${new_attr}`]) {
      setter = this[`set_${new_attr}`];
    }
    let opts = {
      enumerable: true
    }
    if (Object.keys(opt).includes("get")) opts["get"] = getter
    if (Object.keys(opt).includes("set")) opts["set"] = setter
    let result = Object.defineProperty(this, new_attr, opts)
  };
  /**
   */
  /**
   *  声明可读写的属性别名，主要用来对其后端字段。
   *     注意，
   *     1. 在构造函数中声明，
   *     2.声明的别名在toJsonObject()之后，变量会存在
   *     3. 可使用get_<属性名>,set_<属性名>,来覆盖默认的getter/setter
   * @method alias
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_accessor({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *                  this.alias("amount","price")// amount声明别名price， 使用price等价于使用amount
   *                  this.alias("name","lastName")// name声明别名lastName,使用lastName等价使用name
   *              }
   *             get_lastName(){return "Name:"+this.name; }//覆盖默认的getter
   *             set_lastName(val){this.name=value}//覆盖默认的setter
   *         }
   *         let a=new A()
   *         console.log(a.lastName,a.age) // "Name:defaultName",10
   *         a.lastName="test";
   *         console.log(a.name,a.lastName) // "test","Name:test"
   */
  alias(attr, new_attr) { //给一个属性声明别名，可读写
    this._alias({
      get: true,
      set: true
    }, attr, new_attr)
    this._aliasMap[new_attr] = attr
    this._aliasMap[attr] = attr
  };
  _getAliasAttrs(attr) {
    // console.log(this._aliasMap, attr, Object.entries(this._aliasMap), "map")
    if(this._aliasMap[attr]!=attr) attr=this._aliasMap[attr];
    let result = Object.entries(this._aliasMap).filter(([key, value], index) => key == attr || value == attr).map(([key, value]) => key);
    // console.log(result, "result")
    return result
  }
  /**
   *  声明只读的属性别名，主要用来对其后端字段，并防止其他地方该属性被误覆盖。
   *   注意，
   *   1. 在构造函数中声明
   *   2.声明的别名在toJsonObject()之后，变量会存在
   *   3. 可使用get_<属性名>来覆盖默认的getter
   * @method alias_reader
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_accessor({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *                  this.alias("amount","price")// amount声明别名price， 使用price等价于使用amount
   *                  this.alias_reader("name","lastName")// name声明别名lastName,使用lastName等价使用name
   *              }
   *             get_lastName(){return "Name:"+this.name; }//覆盖默认的getter
   *         }
   *         let a=new A()
   *         console.log(a.lastName,a.age) // "Name:defaultName",10
   *         a.lastName="test";//会报错
   *         console.log(a.name,a.lastName) // "test","Name:test"
   */
  alias_reader(attr, new_attr) { //给一个属性声明只读别名
    this._alias({
      get: true
    }, attr, new_attr)
  };
  /**
   *   声明只写的属性别名，主要用来对其后端字段，并接受后端信息，如delete_status,只允许读取，不允许发送给后端。
   *    注意，
   *    1. 在构造函数中声明，
   *    2.声明的别名在toJsonObject()之后，变量会存在
   *    3. 可使用set_<属性名>,来覆盖默认的 setter
   * @method alias_writer
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_accessor({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *                  this.alias("amount","price")// amount声明别名price， 使用price等价于使用amount
   *                  this.alias_writer("name","lastName")// name声明别名lastName,使用lastName等价使用name
   *              }
   *             set_lastName(val){this.name=value}//覆盖默认的setter
   *         }
   *         let a=new A()
   *         console.log(a.lastName,a.age) // undefined,10
   *         a.lastName="test";
   *         console.log(a.name,a.lastName) // "test",undefined
   */
  alias_writer(attr, new_attr) { //给一个属性声明只写别名
    this._alias({
      set: true
    }, attr, new_attr)
  };

  // onChange(fieldName, callback) {
  //   fieldName = this._aliasMap[fieldName] || fieldName
  //   let setter = `set_${fieldName}`
  //   this[setter] = (val) => {
  //     let oldVal = this[`_${fieldName}`]
  //     let newVal = val
  //     this[`_${fieldName}`] = val
  //     callback.bind(this)(oldVal, newVal)
  //   }
  //   this[`_${fieldName}`] = this[`${fieldName}`]
  //   this.attr_accessor(fieldName)
  // };
  onChange(fieldName, callback) {
    fieldName = this._aliasMap[fieldName] || fieldName
    let setter = `set_${fieldName}`
    this[setter] = (val) => {
      let oldVal = this[`_${fieldName}`]
      let newVal = val
      this[`_${fieldName}`] = val
      callback.bind(this)(oldVal, newVal)
    }
    let getter = `get_${fieldName}`
    this[getter] = () => this[`_${fieldName}`]

    this[`_${fieldName}`] = this[`${fieldName}`]
    this.attr_accessor(fieldName)
  };
  needShow(fieldName,callback){
    this._isShowMap=this._isShowMap||{}
    if(callback) this._isShowMap[fieldName]=callback
  }
  /**
   *    返回纯对象，移除对象中的方法。 <font color="red">注意</font>：
   *       1. 类里声明的变量 <font color="red">**会**</font>被包含在ｊｓｏｎ对象中
   *       2. attr_accessor/attr_writer/attr_reader声明的变量 <font color="red">**不会**</font>被包含在ｊｓｏｎ对象中
   *       3. alias/alias_reader/alias_writer 声明的别名 <font color="red">**会**</font>被包含在ｊｓｏｎ对象中
   *       4. "_"下划线开头的变量 <font color="red">**会**</font>被包含在ｊｓｏｎ对象中
   *       5. 各个子类（可以）通过继承覆盖该方法来获得特定的toJsonObject()逻辑
   *       - 约定，BaseObject的子类，需要和后端做交互的字段在类内部声明或使用别名对齐;不需要的，使用attr_accessor在构造函数里声明

  * @method toJsonObject
   * @param {Object} opts {except=[],accept=[]}
   * @return {Object}
   * @example
  *         classs A extends BaseObject{
  *             name="abc"
  *              constructor(){
  *                  this.attr_accessor({age:10})//声明属性name，age 默认值分别为"defaultName"和10
  *                  this.alias("age","newAge")
  *               } 　　　
  *             toJsonObject(opts={}){
  *                 let result= super.toJsonObject(opt={})
  *                 //这里可以增加自己的产生逻辑
  *                 return result
  *             }
  *          }
  *          let a=new A()
  *          a.toJsonObject()//生成JSON对象，{name:"abc",newAge:10}
  *          a.toJsonObject({accept:["name"]})//生成JSON对象，{name:"abc"}
  *          a.toJsonObject({except:["name"]})//生成JSON对象，{newAge:10}
  *
*/
  toJsonObject(opts = {}) {
    //返回纯对象，移除set/get的影响
    let result = JSON.parse(JSON.stringify(this))
    //把所有get也当作属性放入json对象中
    let entries = this.entries().filter(item => item[1].get != null)

    entries.forEach(([field, des]) => {
      result[field] = this[field]
    })
    entries = Object.keys(result)
    let {
      except = [],
        accept = entries
    } = opts
    except = except.concat(Object.keys(this).filter(item => item.startsWith("_")));
    let unaccept = entries.filter(attr => !accept.includes(attr))
     unaccept = unaccept.concat(except)
     unaccept.forEach(attr => {
       delete result[attr]
     })
    Object.keys(result).forEach(attr => {
      if (result[attr] instanceof Function) delete result[attr]
      if (result[attr]==null&&opts.removeNULL) delete result[attr]
      if (result[attr]==null&&opts.removeNULL==false) result[attr]=''

    })
    // Object.keys(result).forEach(attr => {
    //   if (result[attr] === null)
    //     // delete result[attr]
    // })
    return result
  };

  _toJsonObject(opts = {}) {
    //返回纯对象，移除set/get的影响
    let result = JSON.parse(JSON.stringify(this))
    //把所有get也当作属性放入json对象中
    let entries = this.entries().filter(item => item[1].get != null)

    entries.forEach(([field, des]) => {
      result[field] = this[field]
    })
    entries = Object.keys(result)
    let {
      except = [],
        accept = entries
    } = opts
    except = except.concat(Object.keys(this).filter(item => item.startsWith("_")));
    let unaccept = entries.filter(attr => !accept.includes(attr))
    unaccept = unaccept.concat(except)
    unaccept.forEach(attr => {
      delete result[attr]
    })
    Object.keys(result).forEach(attr => {
      if (result[attr] === null)
        delete result[attr]
    })
    return result
  };
  /**
   *  重新分配新的uuid
   * @method resetUUID
   */
  resetUUID() {
    this.uuid = uuidv4()
  };
  /**
   *  clone自己，uuid重新分配
   * @method clone
   * @return {Object}
   * @example
   *        this.clone()
   */
  clone() {
    let r = new this.constructor(this);
    this.uuid = uuidv4();
    return r;
  }
  static async cloneForNew(item, selectedLines) {
    // console.log('基类复制', item, selectedLines);
    // let obj = new this(item.toJsonObject({except:["id", "objectNo"]}));
    let obj = new this(DictArray.simpleClone(item).toJsonObject({except:["id","objectNo"]}));
    obj.reset();
    obj.objectStatus = this.INVOICESTATUS.新增;
    if (!selectedLines && item.ITEMCLASS) {
      const res = await item.fetchItemsFromRemote2({ currentPage: 1, pageSize: 200 });
      selectedLines = res.records || [];
    }
    obj.orderLines = obj.createListFrom(selectedLines, true, line => {line.reset();line.tag="新建"});
    return obj;
  }
  /**
   *  合并一个对象，用来copy目标对象上的值
   * @method merge
   * @param {Object} obj 目标对象
   * @params {Object} opts {except:[],accept:[]}
   * @example
   *         classs A extends BaseObject{
   *             name="abc"
   *              constructor(){
   *                  this.attr_accessor({age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *                  this.alias("age","newAge")
   *               } 　　　
   *          }
   *          let a=new A()
   *          a.merge({name:"123",newAge:333,other:"gogog"},{})// a={name:"123",age:333,newAge:333,other:"gogog"}
   *          a.merge({name:"123",newAge:333,other:"gogog"},{except:["other"]})// a={name:"123",age:333,newAge:333}
   *
   */
  merge(obj, opts = {}) {
    if (!obj || Object.keys(obj).length == 0) return;
    if (!(obj instanceof Object)) return;
    let entries = Object.entries(Object.getOwnPropertyDescriptors(obj)).map(([field, des]) => field)
    let {
      except = [],
        accept = entries
    } = opts

    let unaccept = entries.filter(attr => !accept.includes(attr))
    unaccept = unaccept.concat(except)
    unaccept.forEach(attr => {
      delete obj[attr]
    })
    try {
      Object.assign(this, obj)
    } catch (err) {
      console.error(err);
    }

  };

  copy(obj={},...attrs){
    if(attrs[0] instanceof Object){
      Object.entries(attrs[0]).forEach(([from,to])=>this[to]=obj[from]||"")
      return
    }
    attrs.forEach(attr=>this[attr]=obj[attr])
  }
  /**
   *  校验方法，子类应该覆盖该方法，通过validateRule来定义校验规则
   * @method validate
   * @return {Array} [[cond,trueMessage]] 所有校验结果为真和显示的信息
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_reader({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *              }
   *              validate(){
   *                       let result= this.validateRule((rules)=>{
   *                               rules.new(age>18,"未成年")
   *                               rules.new(name!="test","测试名称")
   *                     })
   *                 return result;
   *              }
   *         }
   *         let a=new A()
   *         a.validate() //[[true,"未成年"],[true,"测试名称"]],返回所有校验规则为真的结果
   */
  validate() {
    // // 手机号码验证
    // const validatePhone = (rule, value, callback) => {
    //   const patter = new RegExp('^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$')
    //   if (!patter.test(value)) {
    //     return callback(new Error('请输入正确格式的手机号！'));
    //   }
    // }
    return [];
  }
  /**
   * @example
   *    　　classs A extends BaseObject{
   *        　      constructor(){
   *        　          this.attr_reader({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *        　      }
   *         　     validate(){
   *                       let result= this.validateRule((rules)=>{
   *                               rules.new(age>18,"未成年")
   *                               rules.new(name!="test","测试名称")
   *                 　    })
   *             　    return result;
   *             　 }
   *    　     }
   *    　     let a=new A()
   */
  /**
   *  校验结果方法
   * @method isValidate
   * @return {Array} [cond,trueMessage] 返回校验结果和显示的信
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_reader({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *              }
   *              validate(){
   *                       let result= this.validateRule((rules)=>{
   *                               rules.new(age>18,"未成年")
   *                               rules.new(name!="test","测试名称")
   *                     })
   *                 return result;
   *              }
   *         }
   *         let a=new A()  　
   *         a.isValidate() //[true,"未成年"],只返回一条校验规则为真的结果或者为假的结果
   *         if(this.validator(a.isValidate())==true) return //结合controller里的validator方法可以显示校验消息
   *
   */
  isValidate(options) {
    let result = this.validate(options).filter(([cond, message]) => cond == true)
    result = result.length > 0 ? result.pop() : [false, ""]
    return result
  }
  /**
   *  定义校验规则
   * @method validateRule
   * @param {Function} callback 回调函数
   * @return {Array} [cond,trueMessage] 校验结果和显示的信息
   * @example
   *         classs A extends BaseObject{
   *              constructor(){
   *                  this.attr_reader({name:"defaultName",age:10})//声明属性name，age 默认值分别为"defaultName"和10
   *              }
   *              validate(){
   *                       let result= this.validateRule((rules)=>{
   *                               rules.new(age>18,"未成年")
   *                               rules.new(name!="test","测试名称")
   *                     })
   *                 return result;
   *              }
   *         }
   *         let a=new A()
   *         a.validate() //[true,"未成年"],只返回第一条符合校验规则的结果
   */
  validateRule(callback) {
    let rules = [];
    rules.new = function(...params) {
      this.push(params)
    };
    if (callback) callback(rules)
    let result = rules.filter(([cond, message]) => cond == true)
    // console.log('校验规则 ', result);
    return result;
  }

  /**
   *   获取授权信息
   * @method getAuthData
   */
  getAuthData() {
    return {
      userName: this.applicant,
      roles: this.roles,
    }
  }

  /**
   *  更新前端的用户认证信息
   * @method applyState
   * @param {Object} state 前端用户的认证信息
   */
  applyState(state) { //支持SSO及相关API调用
    if (state) {
      this.applicant = state.userName;
      this.applicantName = state.realName;
      this.applicantDepartment = state.currentDepartment.id;
      this.applicantDepartmentName = state.currentDepartment.name;
      this.ownedAgentId = state.userName;
      this.operateAgentId = state.userName;
      this.updateByAgent = state.userName;
      this.roles = state.roles;
    }
  };

  toCNCurrency(amount) {
    return convertCurrency(amount);
  }

  saveToLocal() {
    return DictArray.$([this]).saveToLocal(this.uuid)
  }

  loadFromLocal() {
    let result = DictArray.$([]).localFromLocal(this.uuid)
    return new this.constructor(result.first())
  }

  static url(action,serviceName, apiVersion = 'v2') {
    serviceName=serviceName||this.serviceName
    return `/${serviceName}/${this.modelName}/${apiVersion}/${action}`; // axios已配置baseURL，不用再拼接
    // return `${this.baseURL}/${this.serviceName}/${this.modelName}/${apiVersion}/${action}`;
  }
  /**
   * CRUD 凭证静态基类
   * 拉取凭证类方法
   * @method fetchFromRemote
   * @example
   *      SO.fetchFromRemote();
   */
  static async fetchFromRemote2(pages = {}, orderBy = [{
    orderBy: 'id',
    orderOpr: 'asc'
  }], query = [], subTotal = [], groupBy = []) {
    let result = await postApi(this.url('index'), pages, {
      orderBy,
      query,
      subTotal,
      groupBy
    });
    // console.log('DO-基类拉取凭证 ', result);
    result.data.records = result.code === '0' ? (result.data.records.map(obj => {
      return new this(obj);
    })) : [];
    return result.data;
  }
  /**
   * 导出凭证类方法
   * @method exportExcel
   * @example
   *      SO.exportExcel();
   */
  static async exportExcel(pages, orderBy, query, subTotal = [], groupBy = [], templateName, downloadName) {
    let params = { ...pages,
      excelTemplate: templateName
    }
    downloadName = downloadName || this.name
    let result = await downloadApi(this.url('exportExcel'), params, {
      orderBy,
      query,
      subTotal,
      groupBy
    }, downloadName);
    return result;
  }
  /**
   * 创建凭证方法
   * @method createToRemote
   * @example
   *      let so = new SO();
   *      so.createToRemote();
   */
  async createToRemote2() {
    let result = await postApi(this.constructor.url('create'), {}, this.toJsonObject({except: ['orderLines', 'proxy', 'doItems', 'getOwnerBility']}));
    // console.log('基类创建凭证 ', result);
    this.merge(result.data);
    return result.code === '0' ? this : {};
  }
  /**
   * 批量创建凭证类方法
   * @method batchCreateToRemote
   * @example
   *      SO.batchCreateToRemote([so1, so2, so3]);
   */
  static async batchCreateToRemote2(arr) {
    let result = await postApi(this.url('batchcreate'), {}, arr.map(item => item.toJsonObject({except: ['orderLines', 'proxy', 'doItems', 'getOwnerBility']})));
    // console.log('基类批量创建凭证 ', result);
    return result.code === '0' ? (result.data && result.data.length && result.data.map(obj => {
      return new this(obj);
    })) : [];
  }
  /**
   * 删除凭证方法
   * @method deleteToRemote
   * @example
   *      let so = new SO();
   *      so.deleteToRemote();
   */
  async deleteToRemote2() {
    let result = await deleteApi(this.constructor.url(`delete/${this.id}`));
    // console.log('基类删除凭证 ', result);
    return result.code === '0' ? this : {};
  }
  /**
   * 批量删除凭证类方法
   * @method batchDeleteToRemote
   * @example
   *      SO.batchDeleteToRemote([id1, id2, id3]);
   */
  static async batchDeleteToRemote2(arr) {
    let result = await deleteApi(this.url('batchdelete'), {
      data: arr.map(item => item)
    });
    // console.log('基类批量删除凭证 ', result);
    return result.code === '0' ? (result.data && result.data.length && result.data.map(obj => {
      return new this(obj);
    })) : [];
  }
  /**
   * 更新凭证方法
   * @method updateToRemote
   * @example
   *      let so = new SO();
   *      so.updateToRemote();
   */
  async updateToRemote2() {
    let result = await putApi(
      this.constructor.url(`update/${this.id}`),
      this.toJsonObject({
        except: ['orderLines', 'proxy', 'doItems', 'getOwnerBility', 'paymentStatus'],
        removeNULL:false
      }));
    // console.log('基类更新凭证 ', result);
    this.merge(result.data);
    return result.code === '0' ? this : {};
  }
  /**
   * 批量更新凭证类方法
   * @method batchUpdateToRemote
   * @example
   *      SO.batchUpdateToRemote([so1, so2, so3]);
   */
  static async batchUpdateToRemote2(arr) {
    let result = await putApi(this.url('batchupdate'), arr.map(item => item.toJsonObject({
      except: ['orderLines', 'proxy', 'doItems', 'getOwnerBility'],
      removeNULL:false
    })));
    // console.log('基类批量更新凭证 ', result);
    return result.code === '0' ? (result.data && result.data.length && result.data.map(obj => {
      return new this(obj);
    })) : [];
  }
  /**
   * 详情凭证类方法
   * @method showFromRemote
   * @example
   *      let so = new SO();
   *      so.showFromRemote();
   *      let so = SO.showFromRemote();
   */
  static async showFromRemote2(id) {
    let result = await getApi(this.url(`show/${id}`));
    // console.log('基类详情凭证 ', result);
    if (result.data == null) return null;
    let obj = new this(result.data);
    return obj;
  }
  /**
   *  根据ＶＵＥ的route query获取详情
   */
  static async show(routeQuery) {
    if(routeQuery.id) routeQuery.id=Number(routeQuery.id)
    const query = Object.entries(routeQuery).map(([field, value]) => { return { fieldName: field, opr: 'eq', value: value }; });
    const res = await this.fetchFromRemote2({ currentPage: 1, pageSize: 1 }, [{ orderBy: 'updateTime', orderOpr: 'desc' }], query);
    const result = res.records.length == 1 ? res.records[0] : null;
    return result;
  }
  /**
   * 支付方法
   * @method payToRemote
   * @example
   *      PaymentInvoice.payToRemote();
   */
  static async payToRemote(obj) {
    let result = await postApi(this.url('pay'), {}, obj.toJsonObject({except: ['orderLines', 'proxy', 'doItems', 'getOwnerBility', 'uuid','balance','credit','totalBalance']}));
    // console.log('基类支付凭证 ', result);
    return result.code === '0' ? result.data : {};
  }
  /**
   * 确认凭证方法
   * @method confirmToRemote
   * @example
   *      let so = new SO();
   *      so.confirmToRemote();
   */
  async confirmToRemote2() {
    console.log('SO-confirmToRemote2', this.id);
    let result = await putApi(this.constructor.url(`confirm`), {id: this.id});
    // let result = await putApi(this.constructor.url(`confirm`), this.toJsonObject({except:['proxy', 'getOwnerBility', 'paymentStatus']}));
    // console.log('基类确认凭证 ', result);
    if (result.code === '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  /**
   * 取消凭证方法
   * @method cancelToRemote
   * @example
   *      let so = new SO();
   *      so.cancelToRemote();
   */
  async cancelToRemote2() {
    let result = await putApi(this.constructor.url(`cancel`), {id: this.id});
    // let result = await putApi(this.constructor.url(`cancel`), this.toJsonObject({except: ['proxy', 'getOwnerBility']}));
    // console.log('基类取消凭证 ', result);
    if (result.code == '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  /**
   * 驳回凭证方法
   * @method rejectToRemote
   * @example
   *      let so = new SO();
   *      so.rejectToRemote();
   */
  async rejectToRemote2() {
    let result = await putApi(this.constructor.url(`reject`), {id: this.id});
    // let result = await putApi(this.constructor.url(`reject`), this.toJsonObject({except:["proxy","getOwnerBility"]}));
    // console.log('基类驳回凭证 ', result);
    if (result.code == '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  /**
   * 撤回凭证方法
   * @method withdrawToRemote
   * @example
   *      let so = new SO();
   *      so.withdrawToRemote();
   */
  async withdrawToRemote2() {
    let result = await putApi(this.constructor.url(`withdraw`), {id: this.id});
    // let result = await putApi(this.constructor.url(`withdraw`), this.toJsonObject({except:["proxy","getOwnerBility"]}));
    // console.log('基类撤回凭证 ', result);
    if (result.code == '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  /**
   * 通过凭证方法
   * @method approveToRemote
   * @example
   *      let so = new SO();
   *      so.approveToRemote();
   */
  async approveToRemote2() {
    let result = await putApi(this.constructor.url(`approve`), {id: this.id});
    // let result = await putApi(this.constructor.url(`approve`), this.toJsonObject({except:["proxy","getOwnerBility"]}));
    // console.log('基类通过凭证 ', result);
    if (result.code == '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  /**
   * 完成凭证方法
   * @method completeToRemote
   * @example
   *      let so = new SO();
   *      so.completeToRemote();
   */
  async completeToRemote2() {
    let result = await putApi(this.constructor.url(`complete`), {id: this.id});
    // let result = await putApi(this.constructor.url(`complete`), this.toJsonObject({except:["proxy","getOwnerBility"]}));
    // console.log('基类完成凭证 ', result);
    if (result.code == '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  /**
   * 关闭凭证方法
   * @method closeToRemote
   * @example
   *      let so = new SO();
   *      so.closeToRemote();
   */
  async closeToRemote2() {
    let result = await putApi(this.constructor.url(`close`), {id: this.id});
    // let result = await putApi(this.constructor.url(`close`), this.toJsonObject({except:["proxy","getOwnerBility"]}));
    // console.log('基类关闭凭证 ', result);
    if (result.code == '0') {
      this.invoiceStatus = this.constructor.INVOICESTATUS[result.data.newStatus];
      return this;
    }
    return {};
  }
  async fetchItemsFromRemote2(pages, orderBy) {
    if (!this.ITEMCLASS) return;
    const result = await this.ITEMCLASS.fetchFromRemote2(pages, orderBy, [{
      fieldName: `${this.ITEMCLASSFIELD[1]}`,
      opr: 'eq',
      value: this[this.ITEMCLASSFIELD[0]]
    }]);
    result.records.forEach(item=>item.getHeader=()=>this)
    return result;
  }
  async deleteItemsFromRemote2(items) {
    if (!this.ITEMCLASS) return;
    let result = await this.ITEMCLASS.batchDeleteToRemote2(items.map(item => item.id));
    this.orderLines = this.orderLines && this.orderLines.length ? this.orderLines.filter(line => !items.find(item => item.id == line.id)) : this.orderLines;
    return result;
  }
  async updateItemsFromRemote2(items) {
    if (!this.ITEMCLASS) return;
    let result = await this.ITEMCLASS.batchUpdateToRemote2(items);
    this.validLines().forEach(line=>{
      let item=result.find(item=>item.id==line.id)
      if(item){
        line.merge(item)
      }
    })
    return result;
  }
  async createItemsFromRemote2(items) {
    if (!this.ITEMCLASS) return;
    let result = await this.ITEMCLASS.batchCreateToRemote2(items);
    this.orderLines.filter(line=>!line.id).forEach(line=>{
      let item=result.find(item=>item.uuid==line.uuid)
      if(item){
        line.merge(item)
      }
    })

    return result;
  }
  static async importToRemote(params, data) {
    return await uploadFile(params, data);
  }
  static async dictList(data) {
    BaseRecord.cache=BaseRecord.cache||{}
    let cache=BaseRecord.cache[data[0]]
    if(!cache) {
       BaseRecord.cache[data[0]]= await dictList(data);
     }
    return BaseRecord.cache[data[0]]
  }
  _currencyOpt(currencyField = "currency") {
    let result = '';
    if (this[currencyField]||this.originalCurrency) result = this[currencyField]||this.originalCurrency;
    if (result == "1" || result == "人民币") result = "CNY"
    if (result == "欧元") result = "EUR"
    if (result == "美元") result = "USD"
    if (result == "日元") result = "JNY"
    if (Number.isInteger(Number(result))) result = '';
    return result;
  }
  format(fieldName, options) {
    let value = this[fieldName];
    if (value == null) return;

    if (!options) return value;
    let formatter = options.type;
    if (!formatter) return value;

    let option = Object.assign({},options.option)
    if(option.style=='currency') option.currency=''
    const locals = 'zh';
    if (formatter == 'Number') {
      if (option.style === 'currency') option.currency = this._currencyOpt(option.currencyField);
      value = Number(value);
      if (option.style === 'currency'&&!option.currency) return value;
    }
    if (formatter == 'DateTime') {
      value = new Date(value);
      option = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        ...option
      };
    }
    // console.log(formatter, option, "formatter");
    try {
      formatter = new Intl[`${formatter}Format`](locals, option);
      return formatter.format(value);
    } catch (err) {
     return value;
    }
  }
  /**
   * 文件解析
   * @return {Array}
   */
  static file2Array(file) {
    return new Promise(function(resolve, reject) {
      const reader = new FileReader(); // 创建FileReader对象，将文件内容读入内存
      reader.onload = function(e) {
        const data = e.target.result;
        let XLSX = require('xlsx');
        let wb = XLSX.read(data, {
          type: 'binary'
        });
        let result = [];
        // result = wb.SheetNames.map(sheetName => {
        //   return {
        //     sheetName: sheetName,
        //     sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
        //   };
        // });
        result =  XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        resolve(result);
      };
      reader.readAsBinaryString(file.raw);
    });
  }
  static importLines(lines = [], fields) {
    return lines.map(line => {
      let data = {};
      data.id = line.ID;
      line.HeadID ? data.headId = line.HeadID : '';
      let itemList = fields.map(field => {
        line[field.name] ? data[field.field] = line[field.name] : '';
        return data;
      });
      return new this(itemList[0]);
    });
  }

  // 上传校验
  static validUpload(file, fileType = [], fileSize = 10) {
    const types = DictArray.$(file.name.split('.')).last();
    const type = fileType.some(item => item === types);
    const is10M = (file.size / 1024 / 1024) < fileSize; // 这里做文件大小限制
    if (!type || !is10M) return false;
    return true;
  }
  isShow(fieldName){
    this._isShowMap=this._isShowMap||{}
    let result= this._isShowMap[fieldName]?this._isShowMap[fieldName]():true
    return result
  }
  /**
   * 重置单据
   * @method reset
   */
  reset() {
    this.resetUUID();
    this.id = null;
    this.headId = null;
    this.objectNo = null;
    this.objectStatus = null;
    this.createUser = null;
    this.createTime = null;
    this.updateUser = null;
    this.updateTime = null;
    this.ownerId = null;
    this.deptId = null;
  };
  static INVOICESTATUS = {
    '新增': '0',
    '草稿': '8',
    '审批中': '1',
    '已确认': '2',
    '已取消': '5',
    '已撤回': '21',
    '已驳回': '11',
    '已完成': '4',
    '已关闭': '41',
  }
  static BUSINESSTYPE={
    '零剪':"Retail",
    '职业装':"Suits",
    '订货':"Agency",
    '集团':'Group',
  }
  static SHORTBUSINESSTYPE = {
    '60530': '零剪事业部', // 120-零剪事业部
    '60529': '职业装事业部', // 110-职业装事业部
    '60531': '订货事业部', // 130-订货事业部
    '60528': '集团事业部', // 100-集团事业部
  }
  static DICTPARAMS = {
    '业务客户': { query: [{ fieldName: 'isBusinessCustomer', opr: 'eq', value: true }] },
    '财务客户': { query: [{ fieldName: 'isFinanceCustomer', opr: 'eq', value: true }] }
  }
  static ACCOUNTTYPE = {
    '返利账户': '1', // name 返利账户 key 1
    '预收账户': '2',
    '信用账户': '3'
  }
  static ACCOUNTTYPENAME = {
    '1': '返利账户',
    '2': '预收账户',
    '3': '信用账户'
  }
}
