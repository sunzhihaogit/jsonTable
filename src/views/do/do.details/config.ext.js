import {
  DictArray,
  DO
} from './models.js';
import { printTemplates } from './printTemplates.ext.js'

export const actionConfig = [{
    name: '编辑',
    command: 'edit',
    disabled: false,
    isShow: (page) => [DO.INVOICESTATUS.草稿].includes(page.doDetails.invoiceStatus),
    divided: false, // 显示分割线
    icon: '',
    isDialog: true
  },
  {
    name: '单据确认',
    command: 'confirm',
    disabled: false,
    isShow: (page) => [DO.INVOICESTATUS.草稿].includes(page.doDetails.invoiceStatus),
    divided: false, // 显示分割线
    icon: '',
    isDialog: true
  },
  {
    name: '整单退货',
    command: 'return',
    isShow: (page) => [DO.INVOICESTATUS.已确认].includes(page.doDetails.invoiceStatus) && [DO.SYNCSTATUS.已发货].includes(page.doDetails.isSync),
    disabled: false,
    divided: false, // 显示分割线
    icon: ''
  },
  {
    name: '单据取消',
    command: 'cancel',
    isShow: (page) => [DO.INVOICESTATUS.已确认, DO.INVOICESTATUS.已驳回].includes(page.doDetails.invoiceStatus),
    disabled: false,
    divided: false, // 显示分割线
    icon: '',
    isDialog: true
  },
  {
    name: '删除',
    command: 'delete',
    disabled: false,
    isShow: (page) => [DO.INVOICESTATUS.草稿].includes(page.doDetails.invoiceStatus),
    divided: false, // 显示分割线
    icon: '',
    isDialog: true
  },
  {
    name: '复制',
    command: 'copy',
    isShow: (page) => [DO.INVOICESTATUS.草稿, DO.INVOICESTATUS.已取消, DO.INVOICESTATUS.已确认].includes(page.doDetails.invoiceStatus),
    disabled: false,
    icon: '',
    isDialog: true
  },
  {
    name: '上传箱单',
    command: 'import',
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
  // {
  //   name: '导出',
  //   command: 'export',
  //   isShow: (page) => [DO.INVOICESTATUS.草稿, DO.INVOICESTATUS.已取消, DO.INVOICESTATUS.已确认].includes(page.doDetails.invoiceStatus),
  //   disabled: false,
  //   icon: '',
  //   isDialog: true
  // },
];

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
    menus: printTemplates,
    isDropdown: true,
    disabled: false,
    type: 'primary'
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
    isShow: (page) => [DO.INVOICESTATUS.已确认,  DO.INVOICESTATUS.已驳回].includes(page.doDetails.invoiceStatus),
    disabled: false,
    type: 'primary',
    isDialog: true
  }
];