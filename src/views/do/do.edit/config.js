

import {
  DictArray,
  BaseDict,
  DO,
  DOItem,
  
  Customer,
  
  Department,
  
  BusinessCustomerSalesRep,
  
  BusinessCustomerSalesAssistant,
  
  Contact,
  
  Address,
  
  User,
  
} from './models.js';

import {
  
} from '@/utils/dictionary.js';


// export const titleConfig = [];
export const titleConfig = [
  
  {
    name: '客户', // 字段中文名
    field: 'businessCustomerName', // 字段名
    format: {},
    isLink:  {"路由名":"customer.details","取值字段":"businessCustomerNo","跳转字段":"customerNo"}, // 是否支持跳转
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'objectNo',
      label: 'name'
    }
  },
  
  {
    name: '数量', // 字段中文名
    field: 'totalQuantity', // 字段名
    format: {"type":"Number","option":{"minimumFractionDigits":2}},
    isLink: false, // 是否支持跳转
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name'
    }
  },
  
  {
    name: '物流状态', // 字段中文名
    field: 'deliveryStatus', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["TransportStatus"])} ), // 配置字典
      
      value: 'index',
      label: 'name'
    }
  },
  
  {
    name: '发货单状态', // 字段中文名
    field: 'invoiceStatusInteger', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["VoucherStatus"])} ), // 配置字典
      
      value: 'index',
      label: 'name'
    }
  },
  
  {
    name: '修改时间', // 字段中文名
    field: 'updateTime', // 字段名
    format: {"type":"DateTime"},
    isLink: false, // 是否支持跳转
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name'
    }
  },
  
];

export const selectConfig = [];

export const actionConfig = [
  // {
  //   name: '导入',
  //   command: 'import',
  //   disabled: false,
  //   isShow: (page) => false,
  //   divided: false, // 显示分割线
  //   icon: '',
  //   upload: (invoice) => {
  //     return {
  //       action: '',
  //       data: {},
  //       fileType: ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'],
  //       fileSize: 10
  //     }
  //   }
  // },
  // {
  //   name: '导出',
  //   command: 'export',
  //   isShow: (page) => true,
  //   disabled: false,
  //   divided: false, // 显示分割线
  //   icon: 'el-icon-download'
  // }
];
export const printTemplates = [
 {
    name: '未配置打印模板',
    templateId: '',
    params: {
      // totalAmountCN:(order)=>order.toCNCurrency(order.totalAmount)||"1" ,
      // sale_order_id:(order)=>order.invoiceNo,
    },
    isShow: (order) => true
  },
];
export const contextMenuItemsConfig = [];
export const footerConfig = [
  {
    name: '返回',
    command: 'back',
    disabled: false
  },
  {
    name: '打印',
    command: '',
    isShow: (page) => ![DO.INVOICESTATUS.新增].includes(page.doDetails.invoiceStatus),
    menus:printTemplates,
    isDropdown:true,
    disabled: false,
    type: 'primary'
  },
  {
    name: '保存',
    command: 'save',
    disabled: false,
    isShow: (page) => ![DO.INVOICESTATUS.已取消].includes(page.doDetails.invoiceStatus),
    type: 'primary',
    isDialog: true
  },
  {
    name: '单据确认',
    command: 'confirm',
    isShow: (page) => [DO.INVOICESTATUS.草稿].includes(page.doDetails.invoiceStatus),
    disabled: false,
    type: 'primary',
    isDialog: true
  },
  {
    name: '单据取消',
    command: 'cancel',
    isShow: (page) => [DO.INVOICESTATUS.已确认, DO.INVOICESTATUS.已驳回].includes(page.doDetails.invoiceStatus),
    disabled: false,
    type: 'primary',
    isDialog: true
  }
];
export const baseConfig = [
  
  
  {
    name: '订单编号', // 字段中文名
    field: 'refSoNo', // 字段名
    format: {},
    isLink: {"响应函数":"invoiceLinkHandler"}, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '订单类型', // 字段中文名
    field: 'invoiceType', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["SaleOrderType","RequisitionType"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '客户', // 字段中文名
    field: 'businessCustomerName', // 字段名
    format: {},
    isLink:  {"路由名":"customer.details","取值字段":"businessCustomerNo","跳转字段":"customerNo"}, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'objectNo',
      label: 'name',
      changeable: true,
      filterable: true,
      filterMethod: 'dynamicFilter',
      relationField: 'customerNo',
      data: '',
      targetClass: Customer
    },
    checkbox: {}
  },
  
  
  {
    name: '付款方', // 字段中文名
    field: 'financeCustomerName', // 字段名
    format: {},
    isLink:  {"路由名":"customer.details","取值字段":"financeCustomerNo","跳转字段":"customerNo"}, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'objectNo',
      label: 'name',
      changeable: true,
      filterable: true,
      filterMethod: 'dynamicFilter',
      relationField: 'financeCustomerNo',
      data: '',
      targetClass: Customer
    },
    checkbox: {}
  },
  
  
  {
    name: '业务类型', // 字段中文名
    field: 'businessType', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["BusinessType"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '所属部门', // 字段中文名
    field: 'deptId', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'id',
      label: 'name',
      changeable: true,
      filterable: false,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: '',
      targetClass: Department
    },
    checkbox: {}
  },
  
  
  {
    name: '下单渠道 ', // 字段中文名
    field: 'channel', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["Channel"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '标签', // 字段中文名
    field: 'tags', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '销售代表', // 字段中文名
    field: 'salesRep', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'salesRepName',
      label: 'salesRepCnName',
      changeable: true,
      filterable: true,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: ["businessCustomerNo"],
      targetClass: BusinessCustomerSalesRep
    },
    checkbox: {}
  },
  
  
  {
    name: '销售助理', // 字段中文名
    field: 'salesAssistant', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'salesAssistantName',
      label: 'salesAssistantCnName',
      changeable: true,
      filterable: false,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: ["businessCustomerNo"],
      targetClass: BusinessCustomerSalesAssistant
    },
    checkbox: {}
  },
  
  
  {
    name: '数量', // 字段中文名
    field: 'totalQuantity', // 字段名
    format: {"type":"Number","option":{"minimumFractionDigits":2}},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '行数', // 字段中文名
    field: 'totalRows', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '金额', // 字段中文名
    field: 'totalAmount', // 字段名
    format: {"type":"Number","option":{"style":"currency"}},
    isLink: {"响应函数":"saleInvoiceItemHandler"}, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '币种', // 字段中文名
    field: 'currency', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["Currency"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '同步状态', // 字段中文名
    field: 'isSyncString', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["DeliveryOrderSyncStatus"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '运单号', // 字段中文名
    field: 'expressNo', // 字段名
    format: {},
    isLink:  {"响应函数":"expressHandler"}, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '备用运单号', // 字段中文名
    field: 'backExpressNo', // 字段名
    format: {},
    isLink:  {"响应函数":"expressHandler"}, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '库房备注', // 字段中文名
    field: 'invoiceRemarks', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: true, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'textarea', // text/textarea
      autosize: true, // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '物流状态', // 字段中文名
    field: 'deliveryStatus', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["TransportStatus"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '发货单状态', // 字段中文名
    field: 'invoiceStatusInteger', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: false, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["VoucherStatus"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '发运方式', // 字段中文名
    field: 'deliveryType', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: true, // 是否可编辑
    isRequired: true, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.bindModel(BaseDict, (q)=>{q.in('name',["DeliveryType"])} ), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '收货联系人', // 字段中文名
    field: 'receiverContactName', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: true, // 是否可编辑
    isRequired: true, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'name',
      label: 'name',
      changeable: true,
      filterable: false,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: ["customerNo:businessCustomerNo","objectType:#2"],
      targetClass: Contact
    },
    checkbox: {}
  },
  
  
  {
    name: '联系电话', // 字段中文名
    field: 'receiverContactPhone', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: true, // 是否可编辑
    isRequired: true, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'mobile',
      label: 'mobile',
      changeable: true,
      filterable: false,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: ["customerNo:businessCustomerNo","contactName:receiverContactName"],
      targetClass: Address
    },
    checkbox: {}
  },
  
  
  {
    name: '收货地址', // 字段中文名
    field: 'receiverContactAddress', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: true, // 是否可编辑
    isRequired: true, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'addrStr',
      label: 'addrStr',
      changeable: true,
      filterable: false,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: ["customerNo:businessCustomerNo","contactName:receiverContactName"],
      targetClass: Address
    },
    checkbox: {}
  },
  
  
  {
    name: '备注', // 字段中文名
    field: 'remarks', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false, // 是否为编辑模式
    isEditable: true, // 是否可编辑
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'textarea', // text/textarea
      autosize: true, // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
];
export const otherConfig = [
  
  
  {
    name: '创建人', // 字段中文名
    field: 'createUser', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '创建时间', // 字段中文名
    field: 'createTime', // 字段名
    format: {"type":"DateTime"},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'date', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '修改人', // 字段中文名
    field: 'updateUser', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '修改时间', // 字段中文名
    field: 'updateTime', // 字段名
    format: {"type":"DateTime"},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'date', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '归属人', // 字段中文名
    field: 'ownerId', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'select', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'username',
      label: 'name',
      changeable: true,
      filterable: true,
      filterMethod: 'dynamicFilter',
      relationField: '',
      data: ["username","name"],
      targetClass: User
    },
    checkbox: {}
  },
  
  
  {
    name: '付款方编号', // 字段中文名
    field: 'financeCustomerNo', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '客户编号', // 字段中文名
    field: 'businessCustomerNo', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
  
  {
    name: '附件Id', // 字段中文名
    field: 'attachmentIds', // 字段名
    format: {},
    isLink: false, // 是否支持跳转
    isEdit: false,
    isEditable: false,
    isRequired: false, // 是否必填
    isValidator: false, // 是否为校验字段
    editType: 'input', // 编辑类型
    input: { // 编辑类型为 input 时保留
      type: 'text', // text/textarea
      autosize: '', // textarea生效
      class: 'w180'
    },
    select: { // 编辑类型为 select 时保留
      
      list: DictArray.$([]), // 配置字典
      
      value: 'index',
      label: 'name',
      changeable: false,
      filterable: false,
      filterMethod: '',
      relationField: '',
      data: '',
      targetClass: ''
    },
    checkbox: {}
  },
  
];
export const editConfig = [
  {name: 'title', title: titleConfig || []},
  {name: 'base', base: baseConfig || []},
  {name: 'items', items: []},
  {name: 'other', other: otherConfig || []},
];
export const editConfigV2 = {
  title:titleConfig||[],
  base: baseConfig || [],
  items: [],
  other: otherConfig || []
}

// editConfig挂载到类上
DO.fieldConfigs = Object.values(editConfigV2).reduce((r,config)=>r.concat(config), []);
export const validatorFields = DO.fieldConfigs.filter(item => item.isValidator).filter(item => item) || [];
(async() => {
  await Promise.all(titleConfig.filter(item => item && item.select).map(item => item.select.list.load()));
  // 编辑配置
  const selectList = DO.fieldConfigs.filter(item => !item.select.targetClass).map(subitem => subitem.select).filter(item => item);
  await Promise.all(selectList.map(select => select.list.load()));
})();
