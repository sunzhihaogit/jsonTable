import {
  getToday,
  round,
  toHash,
  toHashByGroup,
  timeFormat
} from '@/utils/index.js';
import {
  Query
} from './query';
import _ from 'lodash';
export class DictArray {
  data;
  api;
  partial_params;
  /**
   *     数组工具类。用来提高对数组的操控效率，同时
   *     提供统一形式来声明绑定远程API和参数，解开业务逻辑代码和API调用形式之间的耦合
   * @class DictArray
   * @constructor
   *  @example
   *         //取数组的最大值
   *         let a=[1,2,3,4]
   *         DictArray.$(a).max();//==>4.
   *         // 对象数组变形
   *  @example
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).groupBy("age");//=>{1:[{age:1,name"n1"}],2:[{age:1,name:"n2"}]}
   *         DictArray.$(a).simpleGroupBy("age");//=>{1:{age:1,name"n1"},2:{age:2,name:"n2"}}
   *         DictArray.$(a).simpleGroupBy("age",(key,value)=>value.name);//=>{1:"n1",2:"n2"}
   *  @example
   *         //绑定币种字典API，
   *          let currencyList1=DictArray.bind(CurrencyListAPI) //声明
   *          let res=await currencyList.load();// 需要的时候使用，如init的时候
   *          //注意， 声明部分可以使用固定参数，
   *           let currencyList2=DictArray.bind(CurrencyListAPI,user,roles);
   *           let res=await currencyList2.load();
   *           let res=currencyList1.load(user,roles);//和上面一行等价
   */
  key="index";
  valueKey="value";
  constructor(data = []) {
    this.data = data
  }
  /**
   * 取数组的最大值，或对象数组中指定属性的最大值
   * @method max
   * @param  {String} attr  对象数组的属性
   * @return {Integer} result 最大值
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).max();//==>4.
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).max("age");//==>3.
   */
  max(attr) {
    //取数组的最大值
    let _data = this.data.filter(item => item!=null)
    let vals = attr ? _data.map(item => Number(item[attr])) : _data.map(item=>Number(item))
    let result = Math.max(...vals);
    return result
  }
  /**
   * 取数组的最小值，或对象数组中指定属性的最小值
   * @method min
   * @param  {String} attr  对象数组的属性
   * @return {Integer} result 最小值
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).min();//==>1.
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).min("age");//==>1.
   */
  min(attr) {
    //取数组的最小数
    let _data = this.data.filter(item => item!=null)
    let vals = attr ? _data.map(item => Number(item[attr])) : _data.map(item=>Number(item))
    let result = Math.min(...vals);
    return result
  }
  /**
   * 取数组的平均值，或对象数组中指定属性的平均值
   * @method avg
   * @param  {String} attr  对象数组的属性
   * @return {Integer} result 平均值
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).avg();//==>2.5.
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).avg("age");//==>2.
   */
  avg(attr, accuracy = 2) {
    //取数组的平均值
    let _data = this.data.filter(item => item!=null)
    let result = this.sum(attr) / _data.length;
    return round(result, accuracy)
  }
  /**
   * 取数组的之和，或对象数组中指定属性的之和
   * @method sum
   * @param  {String} attr  对象数组的属性
   * @return {Integer} result 之和
   * @example
   *         let a = [1,2,3,4]
   *         DictArray.$(a).sum();//==>10.
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).sum("age");//==>4.
   */
  sum(attr, accuracy = 2) {
    //取数组的总和
    let _data = this.data.filter(item => item!=null)
    let result = attr ? _data.reduce((val, item) => Number(item[attr]) + val, 0) : _data.reduce((val, item) => Number(item) + val, 0)
    return round(result, accuracy)
  }
  /**
   *
   * @method map
   * @param  {Function} callback  对象数组的属性
   * @return {Array} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).map(item=>item);//==>[1,2,3,4]
   */
  map(callback) {
    return this.data.map(callback)
  }
  /**
   *
   * @method reduce
   * @param  {Function} callback
   * @return {Object} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).reduce((r,item)=>item+r,0);//==>10.
   */
  reduce(callback) {
    return this.data.reduce(callback)
  }

  /**
   *
   * @method map2
   * @param  {Function} callback  对象数组的属性
   * @return {Array} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).map(item=>item);//==>[1,2,3,4]
   */
  map2(callback) {
    return DictArray.$(this.data.map(callback))
  }
  /**
   *
   * @method reduce2
   * @param  {Function} callback
   * @return {Object} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).reduce((r,item)=>item+r,0);//==>10.
   */
  reduce2(callback) {
    return DictArray.$(this.data.reduce(callback))
  }
  /**
   *
   * @method filter
   * @param  {Function} callback
   * @return {Array} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).filter(item=>item>2);//==>[3,4]
   */
  filter(callback) {
    return this.data.filter(callback)
  }
  /**
   *
   * @method filter
   * @param  {Function} callback
   * @return {Array} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).filter(item=>item>2);//==>[3,4]
   */
  filter2(callback) {
    return DictArray.$(this.data.filter(callback));
  }
  find(callback) {
    return this.data.find(callback)
  }
  /**
   * 取数组的第一位，注意如果count有值，返回的是数组
   * @method first
   * @param  {Integer} count
   * @return {Object} item
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).first()//==>1.
   *         DictArray.$(a).first(2)//==>[1,2]
   */
  first(count) {
    if (!count) return this.data[0]
    return this.data.slice(0, count)
  }
  /**
   * 取数组的最后一位，注意如果count有值，返回的是数组
   * @method last
   * @param  {Integer} count
   * @return {Object} item
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).last()// 4
   *         DictArray.$(a).last(2)// [3,4]
   */
  last(count) {
    if (!count) return this.data[this.data.length-1];
    return this.data.slice(this.data.length - count)
  }

  /**
   *  排序方法，按指定属性进行排序
   * @method sortBy
   * @param  {String} attr  对象数组的属性
   * @param  {Function} sortFunc  排序方法
   * @return {Array} result 排序结果
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).sortBy();//==>[4,3,2,1]
   *         DictArray.$(a).sortBy(,(a,b)=>b-a);//==>[1,2,3,4]. *
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).sortBy("age");//==>[{age:3,name:"n2"},{age:1,name:"n1"}].
   *         DictArray.$(a).sortBy("age",(a,b)=>b-a);//==>[{age:1,name:"n1"},{age:3,name:"n2"}].
   */
  sortBy(attr, sortFunc = (a, b) => a - b) {
    if (!attr) return this.data.sort(sortFunc)
    return this.data.sort((a, b) => sortFunc(a[attr], b[attr]))
  }
  sortBy2(attr, sortFunc = (a, b) => a - b) {
    return DictArray.$(this.sortBy(attr,sortFunc))
  }

  /**
   * 分组方法，或按对象的属性进行分组
   * @method groupBy
   * @param  {String} attr  对象数组的属性
   * @param  {Function} callback  分组回调方法
   * @return {Object} result
   * @example
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).groupBy("name");//==>{"n1":[{age:1,name:"n1"}],"n2":[{age:3,name:"n2"}]}.
   *         DictArray.$(a).groupBy("name",(key,array)=>array.pop());//==>{"n1":{age:1,name:"n1"},"n2":{age:3,name:"n2"}}. 等价simpleGroupBy
   */
  groupBy(attr, callback) {
    let result = toHashByGroup(this.data, attr)
    if (callback) {
      result = Object.keys(result).reduce((r, key) => {
        r[key] = callback(key, result[key])
        return r
      }, {})
    }
    return result
  }
  /**
   * 简化分组方法
   * @method simpleGroupBy
   * @param  {String} attr  对象数组的属性
   * @param  {Function} callback  分组回调方法
   * @return {Object} result
   * @example
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).simpleGroupBy("name");//==>{"n1":{age:1,name:"n1"},"n2":{age:3,name:"n2"}}.
   *         DictArray.$(a).simpleGroupBy("name",(key,value)=>value.age);//==>{"n1":1"n2":3}.
   */
  simpleGroupBy(attr, callback) {
    let result = toHash(this.data, attr)
    if (callback) {
      result = Object.keys(result).reduce((r, key) => {
        r[key] = callback(key, result[key])
        return r
      }, {})
    }
    return result
  }
  uniqBy(attr,callback){
    if(attr){
      let result=this.simpleGroupBy(attr,callback)
      return Object.values(result)
    }
    let result=[...new Set(this.data)]
    return result
  }
  uniqBy2(attr,callback){
    return DictArray.$(this.uniqBy(attr,callback))
  }
  /**
   * 数组长度
   * @method length
   * @return {Integer} result
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).length();//==>4
   */
  length() {
    return this.data.length;
  }

  /**
   *  根据特定属性copy数组到目标数组,并覆盖原元素，
   * @method mergeBy
   * @param {Array} source 源对象数组
   * @param {String} attr  根据指定的属性认为是相等
   * @example
   *     this.mergeBy(this.hotInstanceSetting.data,"uuid")
   */
  mergeBy(source, attr = "uuid") {
    let target = this.simpleGroupBy(attr)
    source = DictArray.$(source).simpleGroupBy(attr)
    let result = {
      ...target,
      ...source,
    }
    result = Object.values(result)
    return result
  };
  /**
   * 转换成普通对象，移除this.data上的类信息
   * @method toJsonObject
   * @return {Object} result
   */
  toJsonObject() {
    //转换成普通对象，移除this.data上的类信息
    let result=JSON.parse(JSON.stringify(this.data));
    return result
  }
  /**
   * 返回数组类型
   * @method toArray
   * @param  {String} attr  对象数组的属性
   * @return {Array} result
   * @example
   *         let a=[1,2,3,4,3,4,4]
   *         DictArray.$(a).toArray(,true);//==>[1,2,3,4].
   *         let a=[{age:1,name:"n"},{age:3,name:"n"}];
   *         DictArray.$(a).toArray();//==>[{age:1,name:"n"},{age:3,name:"n"}]
   *         DictArray.$(a).toArray("age");//==>[1,3].
   *         DictArray.$(a).toArray("name");//==>["n","n"].
   *         DictArray.$(a).toArray("name",true);//==>["n"].
   */
  toArray(attr, distinct = false) {
    this.data = this.data || [];
    let result = attr ? this.data.filter(item => item!=null && item[attr]).map(item => item[attr]) : this.data
    if (distinct == true) result = [...new Set(result)]
    return result
  }
  /**
   * 根据绑定的api和参数，调用远程接口,并将结果装配自己
   * @method load
   * @param  {Array} params  远程接口（部分)参数
   * @return {Array} result
   * @example
   *           //以下两种形式等价，API实际调用的参数是bind时候的参数加上load时候的参数
   *           let currencyList2=DictArray.bind(CurrencyListAPI,user,roles);
   *           let res=await currencyList2.load();
   *
   *           let currencyList1=DictArray.bind(CurrencyListAPI);
   *           let res=currencyList1.load(user,roles);
   */
  async load(...params) {
    //调用绑定的远程API，并返回res中的data数据
    params = params ? params : [];
    let callback = params.pop()

    if (callback != null && typeof(callback) != "function") {
      params = [...params, callback]
      callback = null
    }
    if (this.api) {
      let res = await this.invoke(...params);
      if (!res.code && res.records instanceof Array) {
        this.data.splice(0, this.data.length, ...res.records);
      }
      if (res.code === '0') {
        let records = res.data;
        if(res.data.records instanceof Array) records = res.data.records;
        this.data.splice(0, this.data.length, ...records);
      }
    }
    if (callback) callback(this.data);
    if(this.loaded) this.data=this.loaded(this.data)
    return this.data;
  };
  async loadOnce(...params) {
    if (this.data.length > 0) return this.data;
    return await this.load(...params);
  }
  /**
   * 根据绑定的api和参数，调用远程接口,不装配自己，仅返回response对象
   * @method invoke
   * @param  {Array} params  远程接口（部分)参数
   * @return {Object} res
   * @example
   *           //以下两种形式等价，API实际调用的参数是bind时候的参数加上invoke时候的参数
   *           let currencyList2=DictArray.bind(CurrencyListAPI,user,roles);
   *           let res=await currencyList2.invoke();
   *
   *           let currencyList1=DictArray.bind(CurrencyListAPI);
   *           let res=currencyList1.invoke(user,roles);
   */
  async invoke(...params) {
    //调用绑定的远程API，并返回res原始数据
    let apiFunc = this.api;
    if (apiFunc == null) return;
    params = params ? params : [];
    let callback = params.pop();

    if (callback != null && typeof(callback) != "function") {
      params = [...params, callback]
      callback = null
    }
    params = this.partial_params.concat(params);
    let res = await apiFunc(...params); // 调用API
    if (res.code === '0') {
      if (callback) callback(res.data); // 如果返回成功，调用回调函数，允许调用方做额外处理
      return res;
    }
    // console.error("调用失败", apiFunc.name, res.data);
    return res;
  };
  saveToLocal(key) {
    return localStorage.setItem(key, JSON.stringify(this.data));
  }
  loadFromLocal(key) {
    this.data = JSON.parse(localStorage.getItem(key)) || [];
    return this
  }
  translate(value, key, valueKey,callback) {
    let _key=key||this.key
    let _valueKey=valueKey||this.valueKey
//    console.log(value,this.key,this.valueKey,this,this.filter2(item => item[_key] == value),"dd");
//    key = this.key || key;
//    valueKey = this.valueKey || valueKey;
    let result = this.filter2(item => item[_key] == value).first();
    if(callback) return callback(result)
    return result ? result[_valueKey] : value;
  }

  /**
   * 类方法，绑定API
   * @method bind
   * @static
   * @param  {Function} api 后端API
   * @param  {Array} partial 调用时候需要的参数
   * @return {DictArray} result
   *           let currencyList2=DictArray.bind(CurrencyListAPI,user,roles);
   *           let res=await currencyList2.invoke();
   */
  static bind(api, ...partial) {
    //绑定远处API函数，以及部分参数，如role,username,等
    let result = new DictArray([])
    result.api = api;
    result.partial_params = partial ? partial : []
    return result;
  };
  /**
   * new的语法糖,快速将一个普通数组转换成DictArray，以便于使用DictArray的能力
   * @method $
   * @param  {Array} arr  对象数组
   * @return {DictArray} result
   * @static
   * @example
   *         let a=[1,2,3,4]
   *         DictArray.$(a).max();//==>4.
   *         let a=[{age:1,name:"n1"},{age:3,name:"n2"}];
   *         DictArray.$(a).max("age");//==>3.
   */
  static $(arr,key,valueKey) {
    // 语法糖函数，new DictArray(arr)的另一种写法
    // 如  a=[1,2,3,4]; DictArray.$(a).max() ; 等价于 new DictArray(arr)
    // let result = new DictArray(arr);
    let result;
    if (arr instanceof DictArray) result = arr;
    // if (arr.data && (arr.data instanceof Array)) arr = arr.data;
    if(arr instanceof Array) result = new DictArray(arr);
    if(key) result.key=key
    if(valueKey) result.valueKey=valueKey
    return result;
  };
  static simpleClone(source = []) {
    return _.cloneDeep(source);
    // let result=source.map(s=>{let r=Object.assign({},s);return r})
    // let result=this.$(source)
    // result=result._toJsonObject()
    // let result = JSON.parse(JSON.stringify(source))
    // return result
  }
  static bindModel(model, callback) {
    let q = new Query();
    let pages = { currentPage: 1, pageSize: 1000 };
    let subTotal = [];
    let groupBy = [];
    let r = callback(q, pages, subTotal, groupBy);
    let [keyField, valueField] = r || ['key', 'value'];
    let result = this.bind(model.fetchFromRemote2.bind(model), pages, null, q.toArray(), subTotal, groupBy);
    // valueField = valueField || keyField;
    result.key = keyField;
    result.valueKey = valueField;
    result.loaded = (data) => {
      data.forEach(item => {
        item.name = item[result.valueKey];
        item.index = item[result.key];
      });
      return data;
    }
    return result;
  }
}

export default DictArray;
