import { DictArray } from '@/models.v2/utils'

export const actionConfig = [
  {
    name: '修改json',
    command: 'editJson',
    disabled: false,
    isShow: (page) => true,
    divided: false, // 显示分割线
  },
  
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
  {
    name: '上传箱单',
    type: 'import',
    isShow: (page) => true,
    disabled: false,
    divided: false, // 显示分割线
    icon: '',
    upload: (invoice) => {
      return {
        action: `url invoice`,
        data: { uuid: 5, type: 'doi' },
        fileType: ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'],
        fileSize: 10
      }
    }
  }
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
      isShow: (item) => true,
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
      isShow: (item) =>true,
      isDialog: true,
      disabled: false
    },
    
    
    {
      name: '单据确认',
      type: 'confirm',
      isShow: (item) => true,
      isDialog: true,
      disabled: false
    },
    
    
    {
      name: '单据取消',
      type: 'cancel',
      isShow: (item) => true,
      isDialog: true,
      disabled: false
    },
    
];

export const headers = [
  
  
  
  {
    name: '定单号', // ALIAS 字段中文名发货单号
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
    
    // dictList: DictArray.$([]), // 配置字典
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
    
    // dictList: DictArray.$([]), // 配置字典
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
    
    // dictList: DictArray.$([]), // 配置字典
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
    
    // dictList: DictArray.$([]), // 配置字典
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
    name: '发货状态', // ALIAS 字段中文名发货单状态
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
    dictList: [{
      index:2,
      name:'已经发货'
    },{
      index:5,
      name:'未发货'
    },{
      index:8,
      name:'部分发货'
    }],
    // dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["VoucherStatus"])} ), // 配置字典
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
    
    // dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["DeliveryOrderSyncStatus"])} ), // 配置字典
    dictList: [{
      index:1,
      name:'一'
    },{
      index:2,
      name:'二'
    },{
      index:3,
      name:'三'
    }],

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
    
    // dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["TransportStatus"])} ), // 配置字典
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
    dictList: [{
      index:6,
      name:'6配置字典顺丰'
    }],
    
    // dictList: DictArray.bindModel(BaseDict, (q) => {q.in('name', ["DeliveryType"])} ), // 配置字典
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
    name: '创建时间', // FIELD 字段中文名创建时间
    field: 'createTime', // 字段名,排序:100
    format: {"type":"DateTime"},
    isShow: true,
    isLink: false, // 是否支持跳转
    fieldType: 'LocalDateTime', // 字段类型
    agg: '',
    width: '',
    fixed: false,
    align: 'center',
    className: 'allowDrag', // 支持拖拽需设置className
    
    // dictList: DictArray.$([]), // 配置字典
    // dictList: DictArray.$([]), // 配置字典
    
    filter: {
      opr: 'between', // 查询规定
      filterType: 'datePicker'
    },
    sort: {
      orderOpr: 'desc' // 排序动作
    }
  },

];

export const dialogConfig = {
  format: {},
  isLink: false, // 是否支持跳转
  isEdit: false, // 是否为编辑模式
  isEditable: false, // 是否可编辑
  isRequired: false, // 是否必填
  isValidator: false, // 是否为校验字段
  editType: 'input', // 编辑类型
  width: '40%',
  input: { // 编辑类型为 input 时保留
    type: 'text', // text/textarea
    autosize: '', // textarea生效
    class: 'w180',
    placeholder: ''
  },
  select: { // 编辑类型为 select 时保留
    list: [], // 配置字典
    value: '',
    label: '',
    changeable: false,
    filterable: false,
    filterMethod: '',
    relationField: '',
    data: '',
    targetClass: ''
  },
  checkbox: {}
};


(async() => {
  await Promise.all(headers.filter(item => item.dictList instanceof DictArray).map(item => item.dictList.loadOnce()));
})();
