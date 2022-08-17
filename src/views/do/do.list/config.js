

import {
  DictArray,
  BaseDict,
  DO,
  
  Department,
  
  User,
  
} from './models.js';

import {
  
} from '@/utils/dictionary.js';


export const actionConfig = [
  
  {
    name: '导出',
    command: 'export',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
  
  {
    name: '刷新',
    command: 'update',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
  {
    name: '配置',
    command: 'shuttleFrame',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
  {
    name: '恢复配置',
    command: 'shuttleFrameRecover',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
  {
    name: '清空筛选项',
    command: 'clearFilter',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
  {
    name: '保存筛选项',
    command: 'saveFilter',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
  {
    name: '恢复筛选项',
    command: 'loadFilter',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
    icon: ''
  },
];

export const toolConfig = [
  // {
  //   name: '导出',
  //   command: 'export',
  //   disabled: false,
  //   divided: false, // 显示分割线
  //   icon: 'el-icon-download'
  // },
  
  {
    name: '删除',
    command: 'delete',
    isShow: (page) => true,
    disabled: false,
    divided: false, // 显示分割线
    icon: 'el-icon-delete'
  },
  
  {
    name: '导出',
    command: 'export',
    isShow: (page) => true,
    disabled: false,
    divided: false, // 显示分割线
    icon: 'el-icon-download'
  },
  {
    name: '复制',
    command: 'clone',
    isShow: (page) => page.mode && false, //默认不显示复制按钮
    disabled: false,
    divided: false, // 显示分割线
    icon: 'el-icon-copy'
  },
  // {
  //   name: '转移归属人',
  //   command: 'transferOwner',
  //   isShow: (page) => true,
  //   isDynamicDialog: true,
  //   disabled: false,
  //   divided: false, // 显示分割线
  //   icon: ''
  // }
];
export const itemActionConfig = [ // 列表操作配置
  
    
    {
      name: '编辑',
      type: 'edit',
      isShow: (item) => !item.invoiceStatus || [DO.INVOICESTATUS.草稿, DO.INVOICESTATUS.已确认, DO.INVOICESTATUS.已驳回].includes(item.invoiceStatus),
      disabled: false
    },
    
    
    {
      name: '查看',
      type: 'check',
      isShow: (item) => true,
      disabled: false
    },
    

    
    {
      name: '删除',
      type: 'delete',
      isShow: (item) => !item.invoiceStatus || [DO.INVOICESTATUS.草稿].includes(item.invoiceStatus),
      isDialog: true,
      disabled: false
    },
    
    
    {
      name: '单据确认',
      type: 'confirm',
      isShow: (item) => [DO.INVOICESTATUS.草稿].includes(item.invoiceStatus),
      isDialog: true,
      disabled: false
    },
    
    
    {
      name: '单据取消',
      type: 'cancel',
      isShow: (item) => [DO.INVOICESTATUS.已确认, DO.INVOICESTATUS.已驳回].includes(item.invoiceStatus),
      isDialog: true,
      disabled: false
    },
    
    
  
];

export const headers = [
  
  
  
  {
    name: '发货单号', // ALIAS 字段中文名发货单号
    field: 'doNo', // 字段名,排序:1
    format: {},
    isShow: true,
    isLink: {}, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '客户', // FIELD 字段中文名客户
    field: 'businessCustomerName', // 字段名,排序:2
    format: {},
    isShow: true,
    isLink:  {"路由名":"customer.details","取值字段":"businessCustomerNo","跳转字段":"customerNo"}, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '数量', // FIELD 字段中文名数量
    field: 'totalQuantity', // 字段名,排序:3
    format: {"type":"Number","option":{"minimumFractionDigits":2}},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'BigDecimal', // 字段类型
    agg: 'SUM',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'fromTo'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '金额', // FIELD 字段中文名金额
    field: 'totalAmount', // 字段名,排序:3.5
    format: {"type":"Number","option":{"style":"currency"}},
    isShow: true,
    isLink: {"响应函数":"saleInvoiceItemHandler"}, // 是否支持跳转
    fieldType: 'BigDecimal', // 字段类型
    agg: 'SUM',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'fromTo'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '发货单状态', // ALIAS 字段中文名发货单状态
    field: 'invoiceStatusInteger', // 字段名,排序:4
    format: {},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'Integer', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["VoucherStatus"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['VoucherStatus']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '是否同步', // FIELD 字段中文名是否同步
    field: 'isSync', // 字段名,排序:5
    format: {},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'Integer', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["DeliveryOrderSyncStatus"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['DeliveryOrderSyncStatus']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '物流状态', // FIELD 字段中文名物流状态
    field: 'deliveryStatus', // 字段名,排序:6
    format: {},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["TransportStatus"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['TransportStatus']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '发运方式', // FIELD 字段中文名发运方式
    field: 'deliveryType', // 字段名,排序:7
    format: {},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'Integer', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["DeliveryType"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['DeliveryType']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '运单号', // FIELD 字段中文名运单号
    field: 'expressNo', // 字段名,排序:8
    format: {},
    isShow: true,
    isLink:  {"响应函数":"expressHandler"}, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '订单编号', // FIELD 字段中文名订单编号
    field: 'refSoNo', // 字段名,排序:9
    format: {},
    isShow: true,
    isLink: {"响应函数":"invoiceLinkHandler"}, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '修改时间', // FIELD 字段中文名修改时间
    field: 'updateTime', // 字段名,排序:10
    format: {"type":"DateTime"},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'LocalDateTime', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'datePicker'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '订单类型', // ALIAS 字段中文名订单类型
    field: 'invoiceType', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["SaleOrderType","RequisitionType"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['SaleOrderType,RequisitionType']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '付款方', // FIELD 字段中文名付款方
    field: 'financeCustomerName', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink:  {"路由名":"customer.details","取值字段":"financeCustomerNo","跳转字段":"customerNo"}, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '业务类型', // FIELD 字段中文名业务类型
    field: 'businessType', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["BusinessType"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['BusinessType']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '所属部门', // FIELD 字段中文名所属部门
    field: 'deptId', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(Department, (q) => ['id', 'name']), // 配置字典
    // key: 'id',
    // valueKey: 'name',
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '下单渠道 ', // FIELD 字段中文名下单渠道 
    field: 'channel', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["Channel"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['Channel']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '标签', // FIELD 字段中文名标签
    field: 'tags', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '销售代表', // FIELD 字段中文名销售代表
    field: 'salesRep', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '销售助理', // FIELD 字段中文名销售助理
    field: 'salesAssistant', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '行数', // FIELD 字段中文名行数
    field: 'totalRows', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'Integer', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'lte', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '币种', // ALIAS 字段中文名币种
    field: 'currency', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["Currency"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['Currency']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '同步状态', // ALIAS 字段中文名同步状态
    field: 'isSyncString', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["DeliveryOrderSyncStatus"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['DeliveryOrderSyncStatus']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '备用运单号', // FIELD 字段中文名备用运单号
    field: 'backExpressNo', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink:  {"响应函数":"expressHandler"}, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '库房备注', // FIELD 字段中文名库房备注
    field: 'invoiceRemarks', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '收货联系人', // FIELD 字段中文名收货联系人
    field: 'receiverContactName', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '联系电话', // FIELD 字段中文名联系电话
    field: 'receiverContactPhone', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '收货地址', // FIELD 字段中文名收货地址
    field: 'receiverContactAddress', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '备注', // FIELD 字段中文名备注
    field: 'remarks', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '创建人', // FIELD 字段中文名创建人
    field: 'createUser', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '创建时间', // FIELD 字段中文名创建时间
    field: 'createTime', // 字段名,排序:100
    format: {"type":"DateTime"},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'LocalDateTime', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'datePicker'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '修改人', // FIELD 字段中文名修改人
    field: 'updateUser', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '归属人', // FIELD 字段中文名归属人
    field: 'ownerId', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(User, (q) => ['username', 'name']), // 配置字典
    // key: 'username',
    // valueKey: 'name',
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '付款方编号', // FIELD 字段中文名付款方编号
    field: 'financeCustomerNo', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '客户编号', // FIELD 字段中文名客户编号
    field: 'businessCustomerNo', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '附件Id', // FIELD 字段中文名附件Id
    field: 'attachmentIds', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '返利支付金额', // FIELD 字段中文名返利支付金额
    field: 'rebateAmount', // 字段名,排序:100
    format: {"type":"Number","option":{"style":"currency"}},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'BigDecimal', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'fromTo'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '付款条件', // FIELD 字段中文名付款条件
    field: 'paymentTerms', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["PaymentConditions"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['PaymentConditions']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '邮编', // FIELD 字段中文名邮编
    field: 'postCode', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '联系人', // FIELD 字段中文名联系人
    field: 'contactName', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '联系电话', // FIELD 字段中文名联系电话
    field: 'contactPhone', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '开票状态', // FIELD 字段中文名开票状态
    field: 'taxInvoiceStatus', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '凭证编号', // ALIAS 字段中文名凭证编号
    field: 'invoiceNo', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: 'CRM发货单ID', // FIELD 字段中文名CRM发货单ID
    field: 'refInvoiceNo', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '单据状态', // ALIAS 字段中文名单据状态
    field: 'invoiceStatus', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["VoucherStatus"])} ), // 配置字典
    // dictList: DictArray.bind(DO.dictList, ['VoucherStatus']), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '过账日期', // FIELD 字段中文名过账日期
    field: 'glDate', // 字段名,排序:100
    format: {"type":"DateTime"},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'LocalDateTime', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'datePicker'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '描述', // FIELD 字段中文名描述
    field: 'description', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '数据库id', // FIELD 字段中文名数据库id
    field: 'id', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'Long', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'eq', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '删除状态', // FIELD 字段中文名删除状态
    field: 'deleteStatus', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'Integer', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'lte', // 查询规定
      filterType: 'select'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '版本号', // FIELD 字段中文名版本号
    field: 'rev', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'Integer', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'lte', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
  
  {
    name: '等幂id', // FIELD 字段中文名等幂id
    field: 'uuid', // 字段名,排序:100
    format: {},
    isShow: false,
    isLink: false, // 是否支持跳转
    fieldType: 'String', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'like', // 查询规定
      filterType: 'input'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },
  
];

(async() => {
  await Promise.all(headers.filter(item => item.dictList instanceof DictArray).map(item => item.dictList.loadOnce()));
})();
