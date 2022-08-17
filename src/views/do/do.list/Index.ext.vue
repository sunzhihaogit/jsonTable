/* eslint-disable vue/name-property-casing */ReturnOrder
<script>
import IndexVue from "./Index.vue";
import { itemActionConfig, toolConfig } from "./config.ext.js";
import {
  DictArray,
  DO,
  SO,
  DOItem,
} from "./models.js";
import SaleInvoiceItemDialog from '@/pages.v2/saleInvoiceItem/saleInvoiceItem.list/Index.drawer.ext.vue';
import { ReturnOrder } from "@/pages.v2/returnOrder/returnOrder.edit/models.js";
import PaymentDialog from '@/pages.v2/accountItem/accountItem.edit/Index.pay.dialog.vue';
import { Account } from '../do.edit/models.js'
export default {
  name: 'do.list',
  components: { SaleInvoiceItemDialog, PaymentDialog },
  extends: IndexVue,
  data() {
    return {
      itemActionConfig,
      toolConfig,
      saleInvoiceItemDialogVisible: false,
      saleInvoiceItemInitQuery: [],
      title: '',
      configKey:'dolist',
      do: {},
      account: {},
      paymentDialogVisible: false,
    };
  },
  async mounted() {
    console.log("DO非标准扩展页");
  },
  created() {},
  methods: {
    expressHandler(item) {
      let url;
      if ([DO.DELIVERYTYPE.顺丰].includes(item.deliveryType))
        url = `https://www.sf-express.com/we/ow/chn/sc/waybill/waybill-detail/${item.expressNo}`;
      if ([DO.DELIVERYTYPE.德邦, DO.DELIVERYTYPE['德邦-送货上门']].includes(item.deliveryType))
        url = `https://www.deppon.com/track/ordertrack?orderNumList=['${item.expressNo}']`;
      const opt = 'postwindow';
      if (url) {
        window.open(url, '_blank', opt);
      } else {
        this.$message({
          type: 'error',
          message: `暂时不支持该发运方式()的运单追踪`,
        });
      }
    },
    // 整单退货
    async returnConfirmHandler(item) {
      this.loading = true;
      // 拉取DOItem
      const res = await item.fetchItemsFromRemote2();
      if (!res.records.length) {
        this.$message({
          type: 'error',
          message: '无法创建退货单！',
        });
        return;
      }
      const returnOrder = await ReturnOrder.createFromDO(item);
      this.$router.push({
        name: 'returnOrder.edit',
        params: { returnOrder },
      });
      this.loading = false;
    },
    invoiceLinkHandler(item, field) {
      // 跳转
      console.log("跳转 ", field);
      // 发货单详情页
      const query = {};
      query.invoiceNo = item.refSoNo;
      if (item.refSoNo.includes('SO')) name = 'so.details';
      if (item.refSoNo.includes('RO')) name = 'claimOrder.details';
      this.$router.push({
        name,
        query,
      });
    },
    async importHandler(file, fileList, row) {  // 上传箱单
      if (!file.response) return;
      let { response } = file;
      if (response.code === '0') {
        let ids = row.attachmentIds ? [...row.attachmentIds.split(','), response.data.id.toString()] : [response.data.id.toString()]; // 为 attachmentIds 追加加id
        ids = DictArray.$(ids).uniqBy();
        row.attachmentIds = ids.join(',');
        await row.updateToRemote2(); // 更新
      }
    },
    saleInvoiceItemHandler(item, field) {
      this.saleInvoiceItemDialogVisible = true;
      this.saleInvoiceItemInitQuery = [{ fieldName: 'doNo', opr: 'eq', value: item.doNo }];
    },
    saleInvoiceItemDialogCancelHandle() {
      this.saleInvoiceItemDialogVisible = false;
    },
    saleInvoiceItemDialogConfirmHandle() {
      this.saleInvoiceItemDialogVisible = false;
    },
    // 导入前的判断非标处理
    beforeUpload(file, fileType, fileSize, callback) {
      this.loading = DO.validUpload(file, fileType, fileSize);
      if (!DO.validUpload(file, fileType, fileSize)) {
        this.$message({
          type: 'error',
          message: `只能上传${fileType}文件，且文件大小不能超过${fileSize}MB！`
        });
        callback(false) // 回调函数将状态带到子组件
        return false;
      }
    },
    // NEW 返利支付
    async paymentHandler(item) {
      // 账户状态是否冻结
      this.do = item;
      const res = await SO.fetchFromRemote2({}, [], [{fieldName: 'invoiceNo', opr: 'eq', value: this.do.refSoNo}]);
      this.do.paidAmount = res.records ? res.records[0].paidAmount : 0;
      this.title = '支付';
      await this.fetchAccount();
    },
    async paymentDialogConfirmHandle() {
      this.paymentDialogVisible = false;
      this.refreshKey += 1;
    },
    paymentDialogCancelHandle() {
      this.paymentDialogVisible = false;
    },
    async fetchAccount() {
      // 拉取账户凭证
      const res = await Account.fetchFromRemote2({}, [], [{fieldName: 'customerNo', opr: 'eq', value: this.do.financeCustomerNo}]);
      if (!res.records.length) {
        this.$message({
          type: 'error',
          message: '无此客户的账户信息！'
        });
        return;
      }
      this.account = res.records.find(item => item.accountType == '1') || res.records[0];
      this.paymentDialogVisible = true;
    },
  },
  render(h) {
    this.$slots.dialog = [
      h('SaleInvoiceItemDialog', {
        attrs: {
          title: '应收明细',
          'indexDialogVisible': this.saleInvoiceItemDialogVisible,
          'initQuery': this.saleInvoiceItemInitQuery,
          'height': '54',
          'width':'50%',
        },
        on: {
          'dialogCancelHandle': this.saleInvoiceItemDialogCancelHandle,
          'dialogConfirmHandle': this.saleInvoiceItemDialogConfirmHandle
        }
      }),
      h('PaymentDialog', {
        attrs: {
          title: this.title,
          'indexDialogVisible': this.paymentDialogVisible,
          'account': this.account,
          'invoice': this.do
        },
        on: {
          'dialogConfirmHandle': this.paymentDialogConfirmHandle,
          'dialogCancelHandle': this.paymentDialogCancelHandle,
        },
      })
    ];
    return IndexVue.render.call(this, h);
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  .menu {
    position: absolute;
    right: 20px;
    z-index: 2;
  }
}
</style>
