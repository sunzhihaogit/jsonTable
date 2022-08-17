import {
  DictArray,
  DO
} from './models.js';

export const itemActionConfig = [ // 列表操作配置
  {
    name: '编辑',
    type: 'edit',
    isShow: (item) => [DO.INVOICESTATUS.草稿, DO.INVOICESTATUS.已驳回].includes(item.invoiceStatus),
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
    isShow: (item) => [DO.INVOICESTATUS.已确认,  DO.INVOICESTATUS.已驳回].includes(item.invoiceStatus),
    isDialog: true,
    disabled: false
  },
  {
    name: '复制',
    type: 'clone',
    disabled: false
  },
  {
    name: '支付',
    type: 'payment',
    isShow: (item) => [DO.INVOICESTATUS.草稿].includes(item.invoiceStatus),
    disabled: false
  },
  {
    name: '整单退货',
    type: 'return',
    isShow: (item) => [DO.INVOICESTATUS.已确认].includes(item.invoiceStatus) && [DO.SYNCSTATUS.已发货].includes(item.isSync),
    isDialog: true,
    disabled: false
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
        action: `${process.env.VUE_APP_INFRASTRUCTURE_URL}/infrastructure/v1/attachments/upload`,
        data: { uuid: invoice.uuid, type: 'doi' },
        fileType: ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'],
        fileSize: 10
      }
    }
  }
];

export const toolConfig = [
  {
    name: '导出',
    command: 'export',
    isShow: (page) => true,
    disabled: false,
    divided: false, // 显示分割线
    icon: 'el-icon-download'
  },
  {
    name: '转移归属人',
    command: 'transferOwner',
    isShow: (page) => true,
    isDynamicDialog: true,
    disabled: false,
    divided: false, // 显示分割线
    icon: ''
  }
];
