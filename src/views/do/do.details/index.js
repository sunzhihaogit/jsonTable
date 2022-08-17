import { srollHeadHandle } from '@/utils/index';
import {
  Loading
} from 'element-ui';
import {
  DO,
  // eslint-disable-next-line no-unused-vars
  DictArray
} from './models.js';

export default {
  async detailsInitHandle() {
    // 初始化
    if (this.$route.params && this.$route.params.do) {
      this.doDetails = this.$route.params.do;
      await this.loadLists();
      return;
    }
    await this.queryDetailsDO();
    await this.queryDOItems();
    await this.loadLists();
  },
  async queryDetailsDO() {
    // 查询发货单凭证
    this.doDetails = await DO.show(this.$route.query);
  },
  
  async queryDOItems() {
    // 查询发货单明细
    this.loading = true;
    this.initQuery = [{
      'fieldName': 'doNo',
      'opr': 'eq',
      'value': this.doDetails['invoiceNo']
    }];
    this.loading = false;
  },
  
  tabChange() {
    // Tab切换
  },
  collapseChange() {
    // 面板切换
  },
  linkHandler() {
    // 跳转
  },
  back() {
    // 返回
    this.$router.go(-1);
  },
  
  exportActionHandler() {
    // 导出
    console.log('导出');
    this.$message({
      type: 'info',
      message: '该功能暂未实现！'
    });
  },
  
  editActionHandler() {
    // 编辑
    console.log('编辑');
    // 跳转到发货单编辑页
    this.$router.push({
      name: 'do.edit',
      query: {
        id: this.doDetails.id
      }
    });
  },
  async cloneActionHandler() {
    // 复制
    let doObj = await DO.cloneForNew(this.doDetails);
    this.$router.push({
      name: 'do.edit',
      params: { do: doObj }
    });
  },
  importActionHandler() {
    // 导入
  },
  menuCommand(command) {
    // 下拉菜单指令
    console.log('下拉菜单指令 ', command);
    const handlerName = `${command}ActionHandler`;
    this[handlerName]();
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
  async batchToolHandler(tool, selections) {
    if (tool == 'clone') {
      let doObj = await DO.cloneForNew(this.doDetails,selections);
      this.$router.push({
        name: 'do.edit',
        params: { do:doObj }
      });
    } else {
      const handlerName = `${tool}Handler`;
      if(this[handlerName]) this[handlerName](selections);
    }
  },
  async confirmInvoiceHandler() {
    // 确认单据
    // await this.loadingHandler('单据确认中...', async() => {
      this.isLoading = true;
      const res = await this.doDetails.confirmToRemote2(); // 确认发货单
      if (res && res.invoiceStatus === '2') {
        this.$message({
          type: 'success',
          message: '确认成功！'
        });
      }
      this.isLoading = false;
    // });
  },
  async cancelInvoiceHandler() {
    // 取消单据
    this.isLoading = true;
    const res = await this.doDetails.cancelToRemote2(); // 取消发货单
    if (res && res.invoiceStatus === '5') {
      this.$message({
        type: 'success',
        message: '取消成功！'
      });
    }
    this.isLoading = false;
  },
  backInvoiceHandler() {
    this.back();
  },
  async confirmHandler() {
    // 确定
    if (!this.validateHandler()) {
      console.log('通过校验');
      this.dialogTitle="单据确认"
      this.dialogDesc = '确定提交？';
      this.dialogVisible = true;
    }
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
        let value = param.last().includes("#") ? (param.last().includes("$") ? Number(param.last().replace("#$", "")) : param.last().replace("#", "")) : this.doDetails[param.last()];
        return { fieldName, opr: 'eq', value };
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
    item.select.list= DictArray.$(res.records).uniqBy2(item.select.value)
  },
  async loadLists() {
    // 拉取默认字典列表
    DO.fieldConfigs.filter(item => item.select && item.select.filterMethod === 'dynamicFilter').forEach(async item => await this.dynamicFilter('', item));
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
  roll() {
    // 滚动时当前位置距顶部的距离
    var topScroll = document.documentElement.scrollTop;
    // 获取导航id
    srollHeadHandle(topScroll, this.sidebarSwitch);
  },
  validActionConfigs() {
    return this.actionConfig.filter(action => action.isShow == null || action.isShow(this));
  },
  footerMenuHandler(menu){
    if(!menu.command) return this.printTemplateClick(menu);
    this[menu.command];
  },
  printTemplateClick(menu) {
    const opt = 'postwindow';
    let token=this.$keycloak.token
    let query=Object.entries(menu.params||{}).map(([name,value])=>{
      let _value=(value instanceof Function) ? value(this.doDetails) : value
      return `${name}=${_value}`
    })
    query.push(`token=${token}`)
    let queryStr = query.join('&');
    let JMUrl = process.env.VUE_APP_JMREPORT_URL;
    let url = `${JMUrl}${menu.templateId}?${queryStr}`
    window.open(url, '_blank', opt);
  },
  // Loading
  async loadingHandler(...params) {
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
  itemsLoaded(items) {},
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

  }
};
