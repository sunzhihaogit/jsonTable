/* 以下是模型声明区, 这块以后可以单独剥离出去，让这页的代码结构清晰一点*/
import Handsontable from 'handsontable';
import {
  DictArray
} from '@/models.v2';

export class TableHeader {
  headers = [];
  constructor() {
    const readOnly = {
      readOnly: true
    };
    const numeric = {
      type: 'numeric',
      numericFormat: {
        pattern: '0,00',
        culture: 'en-US'
      }
    };
    const dateType = {
      type: 'date', // 数值
      dateFormat: 'YYYY-MM-DD',
      correctFormat: true,
      defaultDate: ''
    };
    // 表头定义区
    this.addCol('发货单行号', 'lineNo', {
      ...readOnly
    });
    
    
    this.addCol('运单号', 'expressNo');
    
    this.addCol('发货单号', 'doNo');
    
    this.addCol('订单', 'refInvoiceNo');
    
    this.addCol('订单行号', 'refInvoiceLineNo');
    
    this.addCol('付款方', 'financeCustomerName');
    
    this.addCol('客户', 'businessCustomerName');
    
    this.addCol('产品号', 'productNo');
    
    this.addCol('所属部门', 'deptId');
    
    this.addCol('数量', 'quantity');
    
    this.addCol('销售单价', 'price');
    
    this.addCol('币种', 'currency');
    
    this.addCol('汇率', 'exchangeRate');
    
    this.addCol('已发货数量', 'deliveredQuantity');
    
    this.addCol('可退货数量', 'returnableQuantity');
    
    this.addCol('单位', 'unit');
    
    this.addCol('存货ID', 'batchNo');
    
    this.addCol('工厂包号', 'factoryBatchNo');
    
    this.addCol('工厂缸号', 'vatNo');
    
    this.addCol('占货类型', 'reserveType');
    
    this.addCol('产品品牌', 'productBrand');
    
    this.addCol('产品描述', 'productDescription');
    
    this.addCol('标签数量', 'labelQuantity');
    
    this.addCol('织标数量', 'logoQuantity');
    
    this.addCol('备注', 'remarks');
    
    this.addCol('创建人', 'createUser');
    
    this.addCol('创建时间', 'createTime');
    
    this.addCol('修改人', 'updateUser');
    
    this.addCol('修改时间', 'updateTime');
    
    this.addCol('归属人', 'ownerId');
    
    this.addCol('付款方编号', 'financeCustomerNo');
    
    this.addCol('客户编号', 'businessCustomerNo');
    
    this.addCol('库位', 'storageNo');
    
    this.addCol('仓位', 'warehouseNo');
    
    this.addCol('织标仓位', 'logoWarehouseNo');
    
    this.addCol('织标库位', 'logoStorageNo');
    
    this.addCol('织标编码', 'logoNo');
    
    this.addCol('产品内码', 'productSn');
    
    this.addCol('凭证单号', 'invoiceNo');
    
    this.addCol('订单行号', 'lineNo');
    
    this.addCol('金额', 'amount');
    
    this.addCol('过账时间', 'glDate');
    
    this.addCol('行号', 'showLineNo');
    
    this.addCol('对象编号', 'objectNo');
    
    this.addCol('数据库id', 'id');
    
    this.addCol('删除状态', 'deleteStatus');
    
    this.addCol('版本号', 'rev');
    
    this.addCol('等幂id', 'uuid');
    
  }
  // 表头定义区
  addCol(title, field, property) {
    const colsetting = Object.assign({
      data: field,
      type: 'text'
    }, property);
    this.headers.push({
      title: title,
      field: field,
      class: 'w13p',
      width: '180',
      colsetting: colsetting
    });
  }
  titles() {
    return this.headers.map((ele, index) => ele['title']);
  }
  fields() {
    return this.headers.map((ele, index) => ele['field']);
  }
  columns() {
    return this.headers.map((ele, index) => ele['colsetting']);
  }
  find_by_title(title) {
    const index = this.headers.findIndex((ele) => ele['title'] == title);
    return index;
  }
  get_title_by_field(field) {
    let r = this.headers.find(ele => ele['field'] == field);
    r = r ? r['title'] : '';
    return r;
  }
}
/*
export class ProductCodeSelectEditor extends Handsontable.editors.BaseEditor {
  init() {
    // Create detached node, add CSS class and make sure its not visible
    this.select = this.hot.rootDocument.createElement('SELECT');
    Handsontable.dom.addClass(this.select, 'htSelectEditor');
    this.select.style.display = 'none';

    // Attach node to DOM, by appending it to the container holding the table
    this.hot.rootElement.appendChild(this.select);
  }
}
*/
export function HotTableSetting(_this) {
  // Handsontable 的表配置
  const tableHeader = new TableHeader();
  return {
    data: [],
    width: '100%',
    height: '480',
    language: 'zh-CN', // 语言，需要引用包
    licenseKey: 'non-commercial-and-evaluation',
    // persistentStat: true,
    startRows: 11, // 行列范围
    startCols: 6,
    minRows: 100, // 最小行列
    minCols: 16,
    maxRows: 1000, // 最大行列
    maxCols: 30,
    minSpareCols: 1,
    minSpareRows: 1,

    rowHeaders: true, // 行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）
    rowHeights: 35,
    currentRowClassName: 'currentRow', // 为选中行添加类名，可以更改样式
    currentColClassName: 'currentCol', // 为选中列添加类名
    autoWrapRow: true, // 自动换行
    fillHandle: true, // 选中拖拽复制 possible values: true, false, 'horizontal', 'vertical'
    fixedColumnsLeft: 2, // 固定左边列数
    // fixedRowsTop: 0,  // 固定上边列数
    // manualColumnFreeze: true, // 手动固定列
    manualRowResize: true, // 手动更改行距
    manualColumnResize: true, // 手工更改列距
    manualRowMove: true, // 手动移动行
    manualColumnMove: true, // 手动移动列
    persistentState: true, // 持久状态（打开将列排序，列位置和列大小的状态保存在本地存储中）
    comments: true, // 添加注释
    customBorders: true, // 添加边框
    columnSorting: true, // 排序
    dropdownMenu: true,
    filters: true,
    filter: true,
    stretchH: 'all', // 根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
    observeChanges: undefined,

    cell: [
      // {row: 1, col: 1, comment: {value: 'this is test'}},
    ],
    mergeCells: [
      // 合并
      // {row: 1, col: 1, rowspan: 3, colspan: 3},  //指定合并，从（1, 1）开始行3列3合并成一格
      // {row: 3, col: 4, rowspan: 2, colspan: 2}
    ],
    colHeaders: tableHeader.titles(),
    columns: tableHeader.columns(),
    hiddenColumns: {
      columns: []
    },
    /*
    columnSummary: [{
      destinationRow: 5,
      destinationColumn: 2,
      type: 'sum',
      forceNumeric: true
    } ],
    */
    contextMenu: {
      // 自定义右键菜单，可汉化，默认布尔值
      items: {
        'row_above': {
          name: '上方插入一行'
        },
        'row_below': {
          name: '下方插入一行'
        },
        /*
        'col_left': {
          name: '左方插入列'
        },
        'col_right': {
          name: '右方插入列'
        },*/
        // 'separator': '---------------------',
        'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
        // 'copy': {
        //   name: '复制'
        // },
        // 'undo': {
        //   name: '撤消'
        // },
        'remove_row': {
          name: '删除行'
        },
        // 'clear_column': {
        //  name: '删除列'
        // },
        // 'make_read_only': {
        //  name: '只读'
        // },
        // 'borders': {
        //  name: '表格线'
        // },
        //          'separator': '---------------------',
        'separator1': Handsontable.plugins.ContextMenu.SEPARATOR,
        'commentsAddEdit': {
          name: '添加备注'
        },
        'commentsRemove': {
          name: '取消备注'
        },
        'freeze_column': {
          name: '固定列'
        },
        'unfreeze_column': {
          name: '取消列固定'
        },
        //          'separator': '---------------------',
        'separator2': Handsontable.plugins.ContextMenu.SEPARATOR,
        'createNewOrder': {
          name: '生成新的订单'
        }
        // 'clear_custom': {
        //   name: '删除所有单元格',
        //   callback: function () {
        //     this.clear()
        //   }
        // }
      }
    },
    afterChange: _this.afterChangeHandle,
    // beforeRemoveRow: _this.beforeRemoveRowHandle,
    afterRemoveRow: _this.afterRemoveRowHandle,
    afterRowMove: _this.afterRowMoveHandle,
    afterColumnMove: _this.afterColMoveHandle,
    afterCreateRow: _this.afterCreateRowHandle,
    beforePaste: _this.beforePasteHandle,
    afterFilter: this.afterFilter,
    getRows: function() {
      return this.data;
    },
    getRowList: function() {
      return JSON.stringify(this.data);
    },
    // eslint-disable-next-line no-dupe-keys
    afterFilter: (val) => {
      _this.showSummaryChange();
    },
    // eslint-disable-next-line no-dupe-keys
    afterChange: (changes, source) => _this.loading(() => _this.afterChangeHandle(changes, source)),
    getColumnByTitle: function(title) {
      const _index = (new TableHeader()).find_by_title(title);
      return this.columns[_index];
    },
    getColumnIndexByTitle: function(title) {
      const _index = (new TableHeader()).find_by_title(title);
      return _index;
    },
    registerRenderer: function(title, renderer) {
      const col = this.getColumnByTitle(title);
      col.renderer = renderer;
    },
    registerSelector: function(title, selector) {
      const col = this.getColumnByTitle(title);
      col.source = selector;
    },
    registerContextMenuItem: function(itemName, callback) {
      if (!callback) return;
      const item = this.contextMenu.items[itemName];
      if (!item) return;
      item.callback = callback;
    },
    resetContextMenu: function() {
      this.contextMenu.items = { 'createNewOrder': this.contextMenu.items['createNewOrder'] };
    },
    changeData: function(data = []) {
      const blankLines = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
      data = data.concat(blankLines);
      this.data.splice(0, this.data.length, ...data);
      // this.data = this.data.sort((a, b) => a.lineNum - b.lineNum);
      return;
    },
    hideColumns: function(hot, titles = []) {
      console.log(hot, titles, 'hide titles');
      const plugin = hot.getPlugin('hiddenColumns');
      titles = titles.map(title => this.getColumnIndexByTitle(title));
      plugin.hideColumns(titles);
      hot.render();
    },
    showColumns: function(hot, titles = []) {
      console.log(titles, 'show titles');
      const plugin = hot.getPlugin('hiddenColumns');
      titles = titles.map(title => this.getColumnIndexByTitle(title));
      plugin.showColumns(titles);
      hot.render();
    },
    changeCols(fields = []) {
      let headers = DictArray.$(tableHeader.headers);
      headers = headers.simpleGroupBy('field');

      const newHeaders = fields.map(field => headers[field]);
      this.colHeaders = newHeaders.map(header => header.title);
      this.columns = newHeaders.map(header => header.colsetting);
    },
    afterColMoved(columns, target, key = '') {
      if (target == 0) return;
      if (!this._columns) this._columns = this.columns.map(col => col.data);
      columns = DictArray.$(columns);
      let left_cols = this._columns.slice(0, columns.first());
      let right_cols = this._columns.slice(columns.last() + 1);
      const middle_cols = this._columns.slice(columns.first(), columns.last() + 1);
      this._columns = [...left_cols, ...right_cols];
      left_cols = this._columns.slice(0, target);
      right_cols = this._columns.slice(target);
      this._columns = [...left_cols, ...middle_cols, ...right_cols];
      DictArray.$(this._columns).saveToLocal('SALECOL' + key);
      return this._columns;
    }

  };
}

/* 以上是数据结构声明区*/
