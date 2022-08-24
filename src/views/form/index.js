// import {
//     fetchUserConfigAPI,
//     createUserConfigAPI
//   } from '@/api/publicApi.js';
//   import {
//     Loading
//   } from 'element-ui';
//   import {
//     DictArray,
//     DO,
//     DOItem
//   } from './models.js';
//   import {
//     editConfig
//   } from '../do.edit/config';
import { DictArray } from '@/models.v2/utils'


export default {
  async initHandle() {
    //   this.dynamicTable = (this.$refs.dynamicTable instanceof Array) ? this.$refs.dynamicTable[0] : this.$refs.dynamicTable;
    //   this._headers = DictArray.simpleClone(this.headers);
    //   await this.userConfig();
    // await this.createUserConfig(headers);
    // this.clearFilterHandler();
  },
  async getSummary() {
    this.groupBy = [];
    this.subTotal = this.headers.filter(header => header.agg && header.isShow == true).map(header => { return { subTotalBy: header.field, subTotalOpr: header.agg }; });
    if (this.subTotal.length == 0) return;
    //   let query = [...this.initQuery, ...this.query]; // 请求
    //   const res = await DO.fetchFromRemote2([], [], query, this.subTotal, this.groupBy);

    // this.summaryRecord = res.records[0];
    // 配置合计总价格
    this.summaryRecord = {
      totalAmount: 30859638.276,
      totalQuantity: 95383.14,
      businessCustomerName:null
    }
    //   this.dynamicTable.forceRender();
  },
  async fetchDO(currentPage = null) {
    // 拉取发货单凭证
    //   this.loading = true;
    //   this.pages.currentPage = currentPage || this.pages.currentPage;
    //   this.pages.pageSize = this.pages.pageSize || 20;
    //   this.orderBy = this.orderBy.length ? this.orderBy : [{ orderBy: this.orderByField.name, orderOpr:this.orderByField.opr }];
    //   let query = [...this.initQuery, ...this.query];

    //   const res = await DO.fetchFromRemote2(this.pages, this.orderBy, query);
    //   this.doList = res.records.length ? res.records.map(record => new DO(record)) : [];
    //   this.$emit('OnLoaded',this.doList);
    //   this.pages = { total: res.total, currentPage: res.current, pageSize: res.size };
    //   this.loading = false;
    await this.getSummary();
  },

  async queryDOItems(doObj) {
    // 查询发货单明细
    //   const res = await doObj.fetchItemsFromRemote2({ currentPage: 1, pageSize: 200 });
    //   const lines = res.records.length ? res.records.map(item => new DOItem(item)) : [];
    //   return lines;
  },

  // 头部下拉菜单
  menuCommand(command) {
    console.log('adsi',command)
    // 下拉菜单指令
    if (command instanceof PointerEvent) command = this.actionConfig[0].command
    console.log('下拉菜单指令 ', command);
    const handlerName = `${command}Handler`;
    this[handlerName]();
  },
  async exportHandler() {
    // 导出
    //   if (this.pages.total > 30000) {
    //     this.$message({
    //       type: 'info',
    //       message: '发货单超出3万条，请分批导出！'
    //     });
    //     return;
    //   }
    //   this.loading = true;
    //   this.orderBy = this.orderBy.length ? this.orderBy : [{ orderBy: 'createTime', orderOpr: 'desc' }];
    //   const query = [...this.initQuery, ...this.query];
    //   const res = await DO.exportExcel(this.pages, this.orderBy, query,[],[], 'do.list.xlsx', `发货单.xlsx`);
    //   if (res) this.$Message.console.error(res);
    //   this.loading = false;
  },
  async exportBatchHandler() {
    // 导出
    //   this.loading = true;
    //   this.orderBy = this.orderBy.length ? this.orderBy : [{
    //     orderBy: 'createTime',
    //     orderOpr: 'desc'
    //   }];
    //   const ids = this.selections.map(item => item.id);
    //   const query = [{
    //     fieldName: 'id',
    //     opr: 'in',
    //     value: ids
    //   }];
    //   const res = await DO.exportExcel(this.pages, this.orderBy, query,[],[], 'do.list.xlsx', `发货单.xlsx`);
    //   if (res) this.$message.error(res);
    //   this.loading = false;
  },
  // batchImportHandler() {
  //   // 批量导入
  // },
  // 穿梭框
  async shuttleFrameHandler() {
    //   this.source = this.headers;
    //   this.shuttleFrameVisible = true;
  },
  async shuttleFrameSave(fields) {
    // 保存用户字段配置
    //   console.log('保存用户配置 ', fields);
    //   this.headers =fields;
    //   this.shuttleFrameVisible = false;
    //   this.dynamicTable.forceRender();
    //   this.createUserConfig(this.headers);
  },
  shuttleFrameChange(fields) {
    // 穿梭框数据更新（左 / 右）
    console.log('穿梭框数据更新（左 / 右） ', fields);
  },
  shuttleFrameClose() {
    // 穿梭框关闭
    //   this.shuttleFrameVisible = false;
  },
  async shuttleFrameRecoverHandler() {
    // 恢复配置
    //   this.headers = DictArray.simpleClone(this._headers);
    //   await this.createUserConfig(this.headers);
    //   this.dynamicTable.forceRender();
  },
  // Table筛选
  filterHandler(filter) {
    // 筛选
    console.log('列表筛选项 确定筛选 数据打印Object ', filter);
    //   if (filter.keyword === null || filter.keyword === []) return;
    //   this.query = this.dynamicTable.toQuery();
    //   this.query.forEach(q => {
    //     if (q.value instanceof Array && q.opr != 'between') q.opr = 'in';
    //   });
    //   this._queryAlias();
  },
  _queryAlias() {
    //   this.query = DictArray.$(this.query).uniqBy('fieldName');
    //   const queryFields = this.query.length && this.query.map(q => [q.fieldName, q]);
    //   let queries = queryFields.length && queryFields.reduce((r, value) => {
    //     const attrs = (new DO())._getAliasAttrs(value[0]);
    //     r = r.concat(attrs.map(attr => {
    //       let _value = null;
    //       let query = {};
    //       if (!value[1].typeAs) {
    //         if (attr.includes('Integer') || attr.includes('BigDecimal')) {
    //           if (value[1].opr != 'in') {
    //             _value = Number(value[1].value);
    //           } else {
    //             _value = value[1].value.length ? value[1].value.map(element => Number(element)) : [];
    //           }
    //         } else if (attr.includes('String')) {
    //           if (value[1].opr != 'in') {
    //             _value = String(value[1].value);
    //           } else {
    //             _value = value[1].value.length ? value[1].value.map(element => element.toString()) : [];
    //           }
    //         } else if (attr.includes('Boolean')) {
    //           if (value[1].opr != 'in') {
    //             _value = Boolean(value[1].value);
    //           } else {
    //             _value = value[1].value.length ? value[1].value.map(element => Boolean(element)) : [];
    //           }
    //         } else {
    //           _value = value[1].value;
    //         }
    //       } else {
    //         _value = value[1].value;
    //       }
    //       if (['between', 'ge', 'gte', 'lte', 'le'].includes(value[1].opr)) {
    //         query = {
    //           fieldName: attr,
    //           opr: value[1].opr,
    //           value: _value,
    //           typeAs: 'NUMERIC'
    //         };
    //       } else {
    //         query = {
    //           fieldName: attr,
    //           opr: value[1].opr,
    //           value: _value
    //         };
    //       }
    //       return query;
    //       // return {
    //       //   fieldName: attr,
    //       //   opr: value[1].opr,
    //       //   value: _value
    //       // };
    //     }));
    //     return r;
    //   }, []).filter(item => {
    //     const fields = this.query.map(field => field.fieldName);
    //     return !fields.includes(item.fieldName);
    //   });
    //   this.query =this.query.concat(queries||[])
  },
  sortHandler(sort) {
    console.log('Table排序 点我排序 ', sort);
    //   this.orderBy = this.dynamicTable.toOrderBy();
  },
  async removeTagHandler(filter) {
    // 移除筛选标签
    //   console.log('移除筛选标签 ', filter, this.query);
    //   this.query = this.dynamicTable.toQuery();
    //   this.query.forEach(q => {
    //     if (q.value instanceof Array && q.opr != 'between') q.opr = 'in';
    //   });
    //   this._queryAlias()
  },
  async removeSortTagHandler(tag) {
    // 移除排序标签
    //   console.log('移除排序标签 ', tag, this.orderBy);
    //   this.orderBy = this.orderBy.length && this.orderBy.filter(item => item.orderBy !== tag.field);
    // await this.fetchDO();
  },
  clearFilterHandler() {
    // 清空表单筛选项
    //   this.query = [];
    //   this.orderBy=[];
    //   this.dynamicTable && this.dynamicTable.clearFilter(this.headers);
  },
  async saveFilterHandler() {
    // 清空表单筛选项
    //   if(!this.dynamicTable ) return
    //   let filters=this.dynamicTable.toFilters();
    //   await this.createFilterConfig(filters)
  },
  async loadFilterHandler() {
    // 清空表单筛选项
    //   if(!this.dynamicTable ) return
    //   //
    //   let filters=await this.filterConfig();
    //    this.dynamicTable.fromFilters(filters,(dt)=>{
    //      this.query = dt.toQuery();
    //      this.orderBy = dt.toOrderBy();
    //      this._queryAlias()
    //    });
  },
  updateHandler() {
    // 刷新
    //   this.fetchDO();
  },
  // DynamicTable
  async columnChange(columns) {
    // Table列更新
    //   console.log('Table列更新 ', columns);
    //   this.headers = this.headers.filter(header => !columns.find(column => column.field == header.field));
    //   this.headers = [...columns, ...this.headers];
    //   await this.createUserConfig(this.headers);
  },
  selectionHandler(val) {
    // 多选
    console.log('Table多选 ', val, this.selections);
    this.selections = val;
  },
  // 操作
  actionHandler(item, action) {
    // 动态调用handler函数，取代switch结构
    console.log('操作 ', item, action);
    if (action.isDialog) {
      this.currentItem = item;
      this.dialogTitle = action.name
      this.dialogType = action.type;
      this.dialogSource = "Confirm"
      this.dialogDesc = `确定${action.name}？`;
      this.dialogVisible = true;
    } else {
      const handlerName = `${action.type}Handler`;
      console.log('idsd动态跳转', handlerName)
      this[handlerName](item);
    }
  },
  dblClickHandler(item) {
    console.log('isdd我是双击', item)
    // 双击
    if (this.mode != null) return;
    this.checkHandler(item);
    if (this.isAltDown) {
      this.editHandler(item);
    }
  },
  editHandler(item) {
    // 编辑
    //   console.log('发货单单编辑', item);
    //   // 跳转到发货单编辑页
    //   this.$router.push({
    //     name: 'do.edit',
    //     query: {
    //       id: item.id
    //     }
    //   });
  },
  createHandler() {
    // 新增
    //   this.$router.push({
    //     name: 'do.edit'
    //   });
  },
  async checkHandler(item) {
    // 查看
    //   console.log('发货单查看', item);
    //   // 跳转发货单详情页
    //   this.$router.push({
    //     name: 'do.details',
    //     query: {
    //       id: item.id
    //     }
    //   });
  },
  async cloneHandler(item) {
    // 复制
    //   console.log('发货单复制', item);
    //   let doObj = await DO.cloneForNew(item);
    //   this.$router.push({
    //     name: 'do.edit',
    //     params: { do: doObj }
    //   });
  },
  async deleteConfirmHandler(item) {
    // 删除
    //   console.log('发货单删除', item);

    //   // 头 行删除
    //   const doObj = new DO(item);
    //   const lines = await this.queryDOItems(doObj);
    //   const res = await doObj.deleteToRemote2(); // 删除发货单
    //   if (lines.length) {
    //     const subres = await doObj.deleteItemsFromRemote2(lines); // 删除发货单项
    //     if (subres && subres.length && res) {
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功！'
    //       });
    //     }
    //   } else {
    //     if (res) {
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功！'
    //       });
    //     }
    //   }
    //   await this.fetchDO();

    // },
    // async confirmConfirmHandler(item) {
    //   // 确认
    //   console.log('发货单确认', item);
    //   // await this.loadingHandler('单据确认中...', async() => {
    //     this.isLoading = true;
    //     const res = await item.confirmToRemote2(); // 确认发货单
    //     if (res && res.invoiceStatus === '2') {
    //       this.$message({
    //         type: 'success',
    //         message: '确认成功！'
    //       });
    //     }
    //     this.isLoading = false;
    // });
  },
  async cancelConfirmHandler(item) {
    // 取消
    //   console.log('发货单取消', item);
    //   const res = await item.cancelToRemote2(); // 取消发货单
    //   if (res && res.invoiceStatus === '5') {
    //     this.$message({
    //       type: 'success',
    //       message: '取消成功！'
    //     });
    //   }
  },
  linkHandler(item, field) {
    // 跳转
    console.log('双击跳转 ', field);
    //   if (field.isLink.响应函数 && field.isLink.响应函数 != 'linkHandler') {
    //     this[field.isLink.响应函数](item, field);
    //     return;
    //   }

    // 发货单详情页
    //   const query = {};
    //   query[field.isLink.跳转字段 || 'id'] = item[field.isLink.取值字段 || 'id'];
    //   this.$router.push({
    //     name: field.isLink.路由名 || 'do.details',
    //     query
    //   });
  },
  // 工具栏批量操作
  toolHandler(tool, selectionRows) {
    console.log('工具类指令', tool, selectionRows, tool.command, tool.name, selectionRows.map(item => item.doNo));
    //   let {command, name} = tool;
    //   if (!selectionRows.length) {
    //     this.$message({
    //       type: 'error',
    //       message: `未选择任何发货单！`
    //     });
    //     return;
    //   }
    //   if (tool.isDynamicDialog) {
    //     this[`${tool.command}Title`] = tool.name;
    //     this[`${tool.command}Visible`] = true;
    //   } else {
    //     this.tool = tool;
    //     // this.selections = selectionRows;
    //     this.dialogType = tool.command;
    //     this.dialogSource = 'Batch';
    //     this.dialogTitle = `批量${tool.name}`;
    //     this.dialogDesc = `确定进行批量${tool.name}？`;
    //     this.dialogVisible = true;
    //     // const handlerName = `${command}BatchHandler`;
    //     // this[handlerName](selectionRows);
    //   }
  },
  async deleteBatchHandler(selections) {
    //   console.log('批量删除 ', selections);
    //   if (!selections.length) return;
    //   this.loading = true;

    //   selections.forEach(async item => {
    //     const doObj = new DO(item);
    //     const lines = await this.queryDOItems(doObj);
    //     const res = await DO.batchDeleteToRemote2(selections.map(item => item.id)); // 删除发货单
    //     if (lines.length) {
    //       const subres = await doObj.deleteItemsFromRemote2(lines); // 删除发货单项
    //       if (subres && subres.length && res && res.length) {
    //         this.$message({
    //           type: 'success',
    //           message: `批量删除成功！`
    //         });
    //         await this.fetchDO();
    //       }
    //     } else {
    //       if (res && res.length) {
    //         this.$message({
    //           type: 'success',
    //           message: `批量删除成功！`
    //         });
    //         await this.fetchDO();
    //       }
    //     }
    //   });

    //   this.loading = false;
    // },
    // async batchCreateHandler(lines) {
    //   // 批量新增
    //   if (!lines.length) return;
    //   this.loading = true;
    //   const res = await DO.batchCreateToRemote2(lines);
    //   if (Object.keys(res).length) {
    //     this.$message({
    //       type: 'success',
    //       message: `批量创建成功！`
    //     });
    //     await this.fetchDO();
    //   }
    //   this.loading = false;
    // },
    // async batchUpdateHandler(lines) {
    //   // 批量更新
    //   if (!lines.length) return;
    //   this.loading = true;
    //   const res = await DO.batchUpdateToRemote2(lines);
    //   if (Object.keys(res).length) {
    //     this.$message({
    //       type: 'success',
    //       message: `批量更新成功！`
    //     });
    //     await this.fetchDO();
    //   }
    //   this.loading = false;
    // },
    // async userConfig() {
    //   // 拉取用户配置
    //   const res = await fetchUserConfigAPI(`${this.$route.name}.${this.configKey}`);
    //   if (res.code === '0' && res.data) {
    //     let headers = res.data;
    //     let configedFields=this._headers.map(header => header.field)
    //     headers =headers.filter(header=>configedFields.includes(header.field))
    //     this.headers=headers.filter(r=>r).map(header=>{
    //        let r=DictArray.simpleClone(this._headers.find(h=>h.field==header.field))
    //        r.isShow=header.isShow
    //        return r
    //     })
    //     if (!res.data || !res.data.length) {
    //       // await this.createUserConfig(this.headers);
    //     }
    //   }
    // },
    // async createUserConfig(columns) {
    //   // 创建/更新用户配置
    //   console.log('创建/更新用户配置 ', columns);
    //   let value=columns || this.headers
    //   const data = {
    //     key: `${this.$route.name}.${this.configKey}`,
    //     value: value
    //   };
    //   const res = await createUserConfigAPI(data);
    //   if (res.code === '0') {
    //     // this.headers = JSON.parse(res.data.value);
    //     this.$message({
    //       type: 'success',
    //       message: '保存配置成功！'
    //     });
    //   }
    // },
    // async filterConfig(filterName="默认过滤") {
    //   // 拉取过滤配置
    //   const res = await fetchUserConfigAPI(`${this.$route.name}.${filterName}`);
    //   if (res.code === '0' && res.data) return res.data
    //   return []
    // },
    // async createFilterConfig(filters,filterName="默认过滤") {
    //   // 创建/更新用户配置
    //   if(!filters) return
    //   console.log('创建/更新过滤配置 ', filters);
    //   let value=filters
    //   const data = {
    //     key: `${this.$route.name}.${filterName}`,
    //     value: value
    //   };
    //   const res = await createUserConfigAPI(data);
    //   if (res.code === '0') {
    //     // this.headers = JSON.parse(res.data.value);
    //     this.$message({
    //       type: 'success',
    //       message: `过滤条件"${filterName}"保存成功！`
    //     });
    //   }
  },
  // 对话框
  async dialogConfirmHandle() {
    // 对话框确认
      console.log('idsds-对话框确认',`${this.dialogType}${this.dialogSource}Handler`,this.dialogType,this.dialogSource)
      const handlerName = `${this.dialogType}${this.dialogSource}Handler`;
      // this.dialogVisible = false;
      if(this[handlerName]) await this[handlerName](this.dialogSource == 'Batch' ? this.selections : this.currentItem);
      // if(this.dialogSource == 'Batch') this.$emit('onBatchTool', this.dialogType, this.selections);
  },
  dialogCancelHandle() {
      this.dialogVisible = false;
  },
  // 分页器
  handleSizeChange(val) {
    console.log('分页控制', val)
    //   this.pages.pageSize = val;
    // this.fetchDO();
  },
  handleCurrentChange(val) {
    console.log('我点击了这一', val)

    //   this.pages.currentPage = val;
    // this.fetchDO();
  },
  // Loading
  async loadingHandler(...params) {
    // 这个函数可以提取到公共函数
    //   const [text, callback] = params.length > 1 ? params : ['loading', ...params];
    //   const loadingInstance = Loading.service({
    //     fullscreen: false,
    //     text: text,
    //     spinner: 'el-icon-loading',
    //     lock: true,
    //     background: 'rgba(0, 0, 0, 0.3)'
    //   });
    //   if (callback == null) {
    //     loadingInstance.close();
    //     return;
    //   } // 如果有闭包回调，则调用
    //   const result = await callback().then(() => loadingInstance.close());
    //   return result;
  },
  // 批量导入
  beforeUpload(file, fileType, fileSize) {
    //   this.loading = DO.validUpload(file, fileType, fileSize);
    //   if (!DO.validUpload(file, fileType, fileSize)) {
    //     this.$message({
    //       type: 'error',
    //       message: `只能上传${fileType}文件，且文件大小不能超过${fileSize}MB！`
    //     });
    //     return false;
    //   }
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
  async importHandler(file, fileList, row) {
    // 行导入
  },
  async batchImportHandler(file) {
    // 批量导入
    //   if (!file) return;
    //   this.fileName = file ? file.name : ''; // 文件名
    //   let fields = editConfig.map(element => element[element.name]).reduce((r, element) => { r = [...r, ...element]; return r; }, []).filter(element => element);
    //   let res = await DO.file2Array(file);
    //   if (res && res.length) {
    //     let importLines = DO.importLines(res, fields);
    //     let msg = '';
    //     let failed = importLines.some(line => {
    //       const [result, message] = line.isValidate(editConfig);
    //       msg = message;
    //       return result;
    //     });
    //     if (failed) {
    //       this.$message({
    //         type: 'error',
    //         message: `${msg}`
    //       });
    //       return;
    //     }
    //     let createLines = importLines.filter(line => !line.id);
    //     let updateLines = importLines.filter(line => line.id);
    //     await this._beforeImport();
    //     createLines.length ? this.batchCreateHandler(createLines) : '';
    //     updateLines.length ? this.batchUpdateHandler(updateLines) : '';
    //   }
    // },
    // _beforeImport() {},
    // extHeaderConfig(field, opts = {}) {
    //   let header = this.headers.find(header => header.field == field);
    //   Object.assign(header, opts);
  },
  // Owner转移
  async transferOwnerConfirmHandle(user) {
    // this.transferOwnerHandler(this.selections, user);
    // this.transferOwnerVisible = false;
  },
  transferOwnerCancelHandle() {
    // this.transferOwnerVisible = false;
  },
  async transferOwnerHandler(selections, user) {
    // let res = await DO.transferToRemote({ ownerId: user.ownerId }, [{ fieldName: 'invoiceNo', opr: 'in', value: selections.map(invoice => invoice.invoiceNo) }]);
    // if (res === null) {
    //   this.$message({
    //     type: 'success',
    //     message: `${selections.map(invoice => invoice.invoiceNo)}归属人转移成功！`
    //   });
    // } else {
    //   this.$message({
    //     type: 'error',
    //     message: `${selections.map(invoice => invoice.invoiceNo)}归属人转移失败！`
    //   });
    // }
    // this.dynamicTable.selectionRows = [];
    // await this.fetchDO();
  },
  deleteConfirmHandler () {
    console.log(23)
  },
  onJsonChange(value) {
    this.modeJson = value;
    console.log("value:", value);
    console.log("value:", this.modeJson); 
  },
  onJsonSave(value) {
    console.log("value:", value);
    console.log("value:", this.modeJson);
    return this.modeJson;
  },
  onError(value) {
    console.log("value:", value);
  },
  dialogCancelHandle() {
    this.indexDialogVisible =false
  },
  editJsonHandler () {
    let json = {
      actionConfig:this.actionConfig,
      toolConfig:this.toolConfig,
      itemActionConfig:this.itemActionConfig,
      headers:this.headers,
      dialogConfig:this.dialogConfig
    }
    this.json = json
    console.log('dsi',json)
    this.indexDialogVisible =true
  }
};
