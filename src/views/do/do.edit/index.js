import {
  fetchUserConfigAPI,
  createUserConfigAPI
} from '@/api/publicApi.js';
import {
  Loading
} from 'element-ui';
import { srollHeadHandle } from '@/utils/index';
import {
  DictArray,
  DO,
  DOItem
} from './models.js';
import moment from 'moment';

export default {
  async initHandle() {
    
    this._headers = DictArray.simpleClone(this.headers);
    await this.userConfig();
    
    // 初始化
    if (this.$route.params && this.$route.params.do) {
      this.doDetails = new DO(this.$route.params.do);
      this.doDetails.orderLines = this.$route.params.do.orderLines;
      await this.loadLists();
      return;
    }
    this.id = this.$route.query.id || this.$route.params.id;
    /*
    this.id && (this.editConfig = this.editConfig.map(item => {
      item[item.name] = item[item.name].map(subitem => {
        subitem.default = '';
        return subitem;
      });
      return item;
    }));
    */
    this.id && await this.queryDO();
    
    this.id && await this.queryDOItems();
    if(!this.id&&!this.doDetails.orderLines) this.doDetails.orderLines=[]
    
    await this.loadLists();
    await this.loaded();
  },
  async loaded(){
    //空函数，用来扩展页面加载完成的逻辑
    return
  },
  async queryDO() {
    // 查询发货单凭证
    this.doDetails = await DO.showFromRemote2(this.id);
  },
  
  async queryDOItems() {
    // 查询发货单明细
    const res = await this.doDetails.fetchItemsFromRemote2({ currentPage: 1, pageSize: 1000 });
    this.doDetails.orderLines = res.records;
    this.hottableRefreshkey+=1
    this.originLines = this.doDetails.validLines();
  },
  async onCellClick(rowIndex, col) {
    // console.log(rowIndex, this.hotInstanceSetting.data[rowIndex], col && col.field, 'onCellClick');
  },
  allowCreateRow() {
    return true;
  },
  
  isEditable(item) {
    return this.editable;
  },
  // 编辑模式
  editFieldHandler(item, type, index) {
    // 编辑模式
    // console.log('触发编辑字段 ', item, type);
    if (item.isEditable == false||this.isEditable(item)==false) return;
    this.editConfig.find(_item => _item.name === type)[type].forEach(_item => { _item.isEdit = false; });
    this.editConfig.find(_item => _item.name === type)[type].find(element => element.field === item.field).isEdit = true;
    // this.editConfigV2[type].forEach(_item => { _item.isEdit = false; });
    // this.editConfigV2[type].find(element => element.field === item.field).isEdit = true;
    // 键盘事件
    this.tabObj.field = item.field;
    this.tabObj.type = type;
    this.tabObj.index = index;
    this.$forceUpdate();
  },
  resetHandler(item, type) {
    // 非编辑模式
    if (item.isEditable == false) return;
    this.editConfig.filter(_item => _item.name === type)[type].forEach(item => { item.isEdit = false; });
  },
  linkHandler() {
    // 跳转
  },
  inputChange(item, type, index) {
    // 键盘事件
    this.tabObj.field = item.field;
    this.tabObj.type = type;
    this.tabObj.index = index;
    this.$forceUpdate();
  },
  selectVisibleChange(val,item) {
    if (val == true) { // select展开的时候
      this.filterMethod(null, item);
    }
  },
  selectChange(val, item) {
    // 动态调用change函数，取代switch结构
    if (!item.select.changeable) return;
    // const handlerName = `${item.field}Change`;
    // this[handlerName](val);
    const select = item.select.list.filter(element => element[item.select.value] == val)[0];
    if (!item.select.relationField) {
      this.doDetails[item.field] = select[item.select.value];
    } else {
      this.doDetails[item.select.relationField] = select[item.select.value];
      this.doDetails[item.field] = select[item.select.label];
    }
  },
  filterMethod(val, item) {
    // console.log('filterMethod ', item);
    if (!item.select || !item.select.filterMethod) return;
    const handlerName = `${item.select.filterMethod}`;
    this[handlerName](val, item);
  },
  dateRangeChange() {
    // 日期范围
  },
  checkboxChange() {
    // 复选框
  },
  async dynamicFilter(val, item) {
    if (!item) return;
    if (val == null && item.select.list && item.select.list.length > 0) return;
    let targetList = [];
    let params = item.select.data;
    params = (typeof(params) == "string") ? this.doDetails.constructor.DICTPARAMS[params] : params;
    params = params instanceof Function ?  params( this.doDetails) : params;
    if (params && params instanceof Array) {
      params = params.map(param => {
        param = DictArray.$(param.split(":"));
        let fieldName = param.first();
        let opr = 'eq';
        let value = null;
        // let value = param.last().includes("#") ? (param.last().includes("$") ? Number(param.last().replace("#$", "")) : param.last().replace("#", "")) : this.doDetails[param.last()];
        // return { fieldName, opr: 'eq', value };
        if (param.last().includes(',')) {
          opr = 'in';
          value = param.last().includes('#') ? (param.last().includes('$') ? param.last().replace('#$', '').split(',').map(Number) : param.last().replace('#', '').split(',')) : this.doDetails[param.last()];
        } else {
          value = param.last().includes('#') ? (param.last().includes('$') ? Number(param.last().replace('#$', '')) : param.last().replace('#', '')) : this.doDetails[param.last()];
        }
        return { fieldName, opr, value };
      });
      params = {query: params};
    }

    const pages = (params && params.pages) || {};
    const orderBy = (params && params.orderBy) || [];
    const query = (params && params.query) || [];
    // const res = await item.select.targetClass.fetchFromRemote2({}, [], val ? [{ fieldName: item.select.label, opr: 'like', value: val }] : []);
    const res = await item.select.targetClass.fetchFromRemote2(pages, orderBy, query ? (val ? [{ fieldName: item.select.label, opr: 'like', value: val }, ...query] : query) : []);
    /*
    targetList = DictArray.$(res.records).uniqBy(item.select.value).map(record => {
      const data = {};
      data[item.select.label] = record[item.select.label];
      data[item.field] = record[item.select.value];
      data[item.select.value] = record[item.select.value];
      return data;
    });
    */
    item.select.list = DictArray.$(res.records).uniqBy2(item.select.value);
  },
  importActionHandler() {
    // 导入
  },
  exportActionHandler() {
    // 导出
    this.$message({
      type: 'info',
      message: '该功能暂未实现！'
    });
  },
  controlHandler(control) {
    // 底部控制栏
    if (!control.command) return;
    if (!control.isDialog) {
      const handlerName = `${control.command}InvoiceHandler`;
      this[handlerName]();
    } else {
      this.dialogVisible = true;
      this.dialogTitle = control.name;
      this.dialogDesc = control.dialogDesc || `请确定是否${control.name}?`;
      this.handlerName = `${control.command}InvoiceHandler`;
    }
  },
  async saveInvoiceHandler() {
    // 保存
    if (!this.validateHandler()) {
      // console.log('通过校验');
      // await this.loading('单据保存中...', async() => {
        this.isLoading = true;
        const handlerName = `${this.id && this.id !== undefined ? 'update' : 'create'}DO`;
        await this[handlerName]();
        
        this.doDetails.orderLines.forEach(line => line.tag = null);
        this.originLines = this.doDetails.validLines();
        

        // await this.queryDO();
        // await this.queryDOItems();
        this.isLoading = false;
      // });
    }
  },
  async confirmInvoiceHandler() {
    // 确认单据
    if (!this.validateHandler()) {
      // await this.loading('单据确认中...', async() => {
        this.isLoading = true;
        await this.saveInvoiceHandler();
        this.doDetails.orderLines.forEach(line => line.tag = null);
        const res = await this.doDetails.confirmToRemote2(); // 确认发货单
        if (res && res.invoiceStatus === '2') {
          this.$message({
            type: 'success',
            message: '确认成功！'
          });
        }
        this.isLoading = false;
      // });
    }
  },
  async cancelInvoiceHandler() {
    // 取消单据
    const res = await this.doDetails.cancelToRemote2(); // 取消发货单
    if (res && res.invoiceStatus === '5') {
      this.$message({
        type: 'success',
        message: '取消成功！'
      });
    }
  },
  backInvoiceHandler() {
    this.back();
  },
  async createDO() {
    // 创建发货单
    this.doDetails.invoiceStatus = DO.INVOICESTATUS.草稿;
    
    // 创建头
    const res = await this.doDetails.createToRemote2();
    this.id = res.id;
    if (Object.keys(res).length) {
      const lines = DOItem.VALIDFIELD ? this.doDetails.orderLines.filter(item => item[DOItem.VALIDFIELD]) : this.doDetails.orderLines;
      // const lines = this.getCreateLines();
      const createLines = lines.map(item => {
        item.invoiceNo = res.invoiceNo;
        item.invoiceType = res.invoiceType ? res.invoiceType : '';
        item.invoiceStatus = res.invoiceStatus ? res.invoiceStatus : '';
        item.headId = res.id;
        item.headUuid = res.uuid;
        item.doNo = res.invoiceNo;
        return item;
      });
      // 创建行
      if (createLines.length > 0) {
        const subres = await this.doDetails.createItemsFromRemote2(createLines);
        this.$message({
          type: subres ? 'success' : 'error',
          message: subres ? `创建成功！` : `创建失败！`
        });
      } else {
        this.$message({
          type: 'success',
          message: `创建成功！`
        });
      }
      // await this.queryDO();
      // await this.queryDOItems();
    }
    
  },
  async updateDO() {
    // 更新发货单
    // console.log('更新发货单 头 ', this.doDetails);
    
    // 行
    if (this.doDetails.changed === true) {
      let updateRes = null;
      let createRes = null;
      let deleteRes = null;
      // 更新行
      let lines = DOItem.VALIDFIELD ? this.getChangeLines().filter(item => item[DOItem.VALIDFIELD]) : this.getChangeLines();
      // let lines = this.getChangeLines();
      if (lines.length > 0) {
        updateRes = await this.doDetails.updateItemsFromRemote2(lines);
        if (!updateRes.length) {
          this.$message({
            type: 'error',
            message: `更新失败！`
          });
          return;
        }
      }
      // 新增行
      const createLines = DOItem.VALIDFIELD ? this.getCreateLines().filter(item => item[DOItem.VALIDFIELD]) : this.getCreateLines();
      // let createLines = this.getCreateLines();
      lines = createLines.map(item => {
        item.invoiceNo = this.doDetails.invoiceNo;
        item.invoiceType = this.doDetails.invoiceType ? this.doDetails.invoiceType : '';
        item.invoiceStatus = this.doDetails.invoiceStatus ? this.doDetails.invoiceStatus : '';
        item.headId = this.doDetails.id;
        item.headUuid = this.doDetails.uuid;
        item.doNo = this.doDetails.invoiceNo;
        return item;
      });
      if (lines.length > 0) {
        createRes = await this.doDetails.createItemsFromRemote2(lines);
        if (!createRes.length) {
          this.$message({
            type: 'error',
            message: `更新失败！`
          });
          return;
        }
      }
      // 删除行
      lines = this.getDeleteLines();
      if (lines.length > 0) {
        deleteRes = await this.doDetails.deleteItemsFromRemote2(lines); // 删除发货单项
        if (!deleteRes.length) {
          this.$message({
            type: 'error',
            message: `更新失败！`
          });
          return;
        }
      }
    }
    // 头
    const res = await this.doDetails.updateToRemote2();
    if (Object.keys(res).length) {
      this.$message({
        type: 'success',
        message: `更新成功！`
      });
      // await this.queryDO();
      // await this.queryDOItems();
    }
    
  },
  // 头部下拉菜单
  menuCommand(command) {
    // 下拉菜单指令
    // console.log('下拉菜单指令 ', command);
    const handlerName = `${command}ActionHandler`;
    this[handlerName]();
  },
  back() {
    // 返回
    this.$router.go(-1);
  },
  // Tab 折叠面板
  tabChange() {
    // Tab切换
  },
  collapseChange() {
    // 面板切换
  },
  
  // HotTable
  async afterChangeHandle(changes, source) {
    // 新增行时，动态改变值
    // console.log('afterChange钩子：', 'changes：' + changes, 'source：' + source);
    if (changes == null) return; // 如果没有变动，直接返回
    if (source == 'populateFromArray') return; // 如果是内存模型更新，直接返回，避免闪烁
    if (source == 'ObserveChanges.change') return;
    this.doDetails.changed = true;
    if (this.doDetails.validLines().length == 0) return; // 如果产品编码列表为空，直接返回
    this.$forceUpdate();
  },
  getChangeLines(changes, source) {
    // 更新行
    const changeLines = this.doDetails.orderLines.filter((line, index) => line.id);
    // const changeLines = this.doDetails.orderLines.filter(item => item.tag == '修改' && item.id != null);
    return changeLines;
  },
  getCreateLines(changes, source) {
    // 新增行
    const createLines = this.doDetails.orderLines.filter((line, index) => !line.id);
    // const createLines = this.doDetails.orderLines.filter(item => item.tag == '新建' && item.id == null);
    return createLines;
  },
  getDeleteLines(changes, source) {
    // 删除行
    const lines = this.doDetails.orderLines.filter(line => line.headId);
    const deleteLines = this.originLines.filter(item => !lines.some(subitem => subitem.id == item.id));
    // const deleteLines = this.originLines.filter(item => item.tag == '删除' && item.id);
    return deleteLines;
  },
  
  // Loading
  async loading(...params) {
    // 这个函数可以提取到公共函数
    const [text, callback] = params.length > 1 ? params : ['loading', ...params];
    const loadingInstance = Loading.service({
      fullscreen: false,
      text: text,
      spinner: 'el-icon-loading',
      lock: true,
      background: 'rgba(0, 0, 0, 0.3)'
    });
    if (callback == null) {
      loadingInstance.close();
      return;
    } // 如果有闭包回调，则调用
    const result = await callback().then(() => loadingInstance.close());
    return result;
  },
  // 工具函数
  translate(list, value, key = 'index', valueKey = 'name') {
    // 字典值转换
    const result = list.find(item => item[key] == value);
    return result && result !== undefined ? result[valueKey] : value;
  },
  format(item){
    let result;
    if(item.select){
       result=this.translate(item.select.list, this.doDetails[item.field], item.select.value, item.select.label)
      } else{
      result= this.doDetails.format(item.field, item.format)
    }
    return result
  },
  async loadLists() {
    // 拉取默认字典列表
    DO.fieldConfigs.filter(item => item.select && item.select.filterMethod === 'dynamicFilter').forEach(async item => await this.dynamicFilter('', item));
  },
  // 对话框
  async dialogConfirmHandle() {
    // 对话框确认
    this[this.handlerName]();
    this.dialogVisible = false;
  },
  dialogCancelHandle() {
    this.dialogVisible = false;
    this.handlerName = null;
  },
  // 校验
  validateHandler() {
    let [result, message] = this.doDetails.isValidate(this.editConfig);
    
    let needValidateLines = this.doDetails.validLines();
    needValidateLines.every((line, index) => {
      line.lineNo = line.lineNo || (index + 1);
      let [rResult, rMessage] = line.isValidate(this.headers);
      if (rResult === true) {
        result = rResult;
        message = rMessage;
        return false;
      }
      return true;
    });
    
    if (result === true) {
      this.$message({
        type: 'error',
        message: message
      });
    }
    return result;
  },
  // 键盘事件
  // tab 切换输入框事件
  // field 判断输入框对应字段   type config类型 index dom索引
  onTab(field, type, index) {
    // arrIndex 是当前editConfig数组的索引 用于找到下一个元素
    let arrIndex = this.editConfig.find(_item => _item.name === type)[type].findIndex(item => item.field === field);
    arrIndex = this.editConfig.find(_item => _item.name === type)[type].length - 1 > arrIndex ? arrIndex : -1;
    // 输入框对应字段
    const itemName1 = this.editConfig.find(_item => _item.name === type)[type][arrIndex + 1].field;
    // 判断为输入框还是选择器
    const domName = this.editConfig.find(_item => _item.name === type)[type][arrIndex + 1].editType;
    this.editConfig.find(_item => _item.name === type)[type].forEach(_item => { _item.isEdit = false; });
    this.editConfig.find(_item => _item.name === type)[type].find(element => element.field === itemName1).isEdit = true;
    this.$listeners;
    index = this.editConfig.find(_item => _item.name === type)[type].length - 1 > index ? index : 0;
    this.$nextTick(() => {
      // 让当前dom 的下一个元素 的输入框或选择器获取焦点
      if (this.$refs.editor[index + 1] && this.$refs.editor[index + 1].querySelector(domName)) {
        this.$refs.editor[index + 1].querySelector(domName).focus();
        // tab 一个循环后 dom 的index 就不需要+1了
      } else if (this.$refs.editor[index].querySelector(domName)) {
        this.$refs.editor[index].querySelector(domName).focus();
      }
    });
    // 更新判断条件
    this.tabObj.field = itemName1;
    this.tabObj.index = index + 1;
    this.tabObj.type = type;
  },
  roll() {
    // 滚动时当前位置距顶部的距离
    var topScroll = document.documentElement.scrollTop;
    // 获取导航id
    srollHeadHandle(topScroll, this.sidebarSwitch);
  },
  validActionConfigs() {
    return this.actionConfig.filter(action => action.isShow == null || action.isShow(this));
  },
  footerMenuHandler(menu) {
    if(!menu.command) return this.printTemplateClick(menu);
    this[menu.command];
  },
  printTemplateClick(menu) {
    const opt = 'postwindow';
    let token = this.$keycloak.token;
    let query = Object.entries(menu.params || {}).map(([name, value]) => {
      let _value = (value instanceof Function) ? value(this.doDetails) : value;
      return `${name}=${_value}`;
    });
    query.push(`token=${token}`);
    let queryStr = query.join('&');
    let JMUrl = process.env.VUE_APP_JMREPORT_URL;
    let url = `${JMUrl}${menu.templateId}?${queryStr}`;
    window.open(url, '_blank', opt);
  },
  contextMenuHandler(menuItem,selected){
    if (menuItem == '配置列') this.shuttleFrameHandler();
    if (menuItem == '恢复配置') this.shuttleFrameRecoverHandler();
    // TODO在这里响应右键菜单响应逻辑
  },
  beforeContextMenuSetItems(items) {
    this.contextMenuItems = this.contextMenuItemsConfig.filter(config => config.isShow(this.doDetails)).map(config => config.name);
  },
    // 穿梭框
  async shuttleFrameHandler() {
    let _headers = DictArray.simpleClone(this._headers)
    _headers.forEach(header => header.isShow = this.headers.find(h => h.field == header.field && h.isShow == true) != null);
    this.source = _headers;
    this.shuttleFrameVisible = true;
  },
  async shuttleFrameSave(fields) {
    // 保存用户字段配置
    console.log('保存用户配置 ', fields);
    this.headers = fields;
    this.shuttleFrameVisible = false;
    this.createUserConfig(this.headers);
  },
  shuttleFrameChange(fields) {
    // 穿梭框数据更新（左 / 右）
    console.log('穿梭框数据更新（左 / 右） ', fields);
  },
  shuttleFrameClose() {
    // 穿梭框关闭
    this.shuttleFrameVisible = false;
  },
  async shuttleFrameRecoverHandler() {
    // 恢复配置
    this.headers = DictArray.simpleClone(this._headers);
    await this.createUserConfig(this._headers);
  },
  // 用户配置
  async userConfig() {
    // 拉取用户配置
    const res = await fetchUserConfigAPI(`${this.$route.name}.${this.configKey}`);
    if (res.code === '0' && res.data) {
      let headers = res.data;
      let configedFields = DictArray.$(this._headers).simpleGroupBy('field');
      this.headers = DictArray.simpleClone(headers.filter(header => configedFields[header.field] && header.isShow != false).map(h => configedFields[h.field]));
      if (!res.data || !res.data.length) {}
    }
  },
  async createUserConfig(columns) {
    // 创建/更新用户配置
    console.log('创建/更新用户配置 ', columns);
    let value=columns || this.headers
    const data = {
      key: `${this.$route.name}.${this.configKey}`,
      value: value
    };
    const res = await createUserConfigAPI(data);
    if (res.code === '0') {
      this.$message({
        type: 'success',
        message: '保存配置成功！'
      });
    }
  },
  // 导入
  beforeUpload(file, fileType, fileSize) {
    this.loading = DO.validUpload(file, fileType, fileSize);
    if (!DO.validUpload(file, fileType, fileSize)) {
      this.$message({
        type: 'error',
        message: `只能上传${fileType}文件，且文件大小不能超过${fileSize}MB！`
      });
      return false;
    }
  },
  async uploadSuccess(message) {
    console.log(message);
    this.loading = false;
    this.$message({
      message: '上传成功',
      type: 'success'
    });
  },
  uploadError(message) {
    this.loading = false;
    console.error(message);
    this.$message({
      message: '上传失败',
      type: 'error'
    });
  },
  async importHandler(file) {
    // 导入
  },
  // 明细多选
  selectHandler(select) {
    const handlerName = `${select.command}SelectHandler`;
    this[handlerName]();
  }
};
