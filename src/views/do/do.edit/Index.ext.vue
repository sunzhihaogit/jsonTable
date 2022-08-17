/* eslint-disable vue/name-property-casing */
<script>
import IndexVue from "./Index.vue";
import { actionConfig, controlConfig, footerConfig } from "./config.ext.js";
import { DictArray, DO, SO} from "./models.js";
import AccountCard from './account.vue'
import PaymentDialog from '@/pages.v2/accountItem/accountItem.edit/Index.pay.dialog.vue';
export default {
  name: 'ExtDOEdit',
  components: { AccountCard, PaymentDialog },
  extends: IndexVue,
  data() {
    return {
      actionConfig,
      controlConfig,
      footerConfig,
      title: '',
      paymentDialogVisible: false,
      refreshKey: 0,
      account: {},
    };
  },
  mounted() {},
  created() {
    // this.actionConfig = [...this.actionConfig, ...this.extActionConfig];
  },
  methods: {
    // async confirmInvoiceHandler() {
    //   await this.loading('单据确认中...', async() => {
    //     await IndexVue.methods.confirmInvoiceHandler.call(this);
    //   });
    // },
    async importHandler(file) {  // 上传箱单
      if (!file.response) return;
      let {response } = file;
      if (response.code === '0') {
        let ids = this.doDetails.attachmentIds ? [...this.doDetails.attachmentIds.split(','), response.data.id.toString()] : [response.data.id.toString()]; // 为 attachmentIds 追加加id
        ids = DictArray.$(ids).uniqBy();
        this.doDetails.attachmentIds = ids.join(',');
        await this.doDetails.updateToRemote2(); // 更新
      }
    },
    // NEW 返利支付
    async paymentHandler(account) {
      // 账户状态是否冻结
      if (account.accountStatus == '2') {   
        this.$message({
          type: 'error',
          message: '该账户已冻结，请解冻后重试！'
        });
        return;
      }
      if ([DO.INVOICESTATUS.已确认].includes(this.doDetails.invoiceStatus)) {
        this.$message({
          type: 'error',
          message: '已确认发货单无法进行返利支付！'
        });
        return;
      }
      if (!this.doDetails.invoiceStatus || [DO.INVOICESTATUS.新增].includes(this.doDetails.invoiceStatus)) {
        this.$message({ type: 'error', message: '新增状态单据无法支付，请先保存！' })
        return;
      }
      const res = await SO.fetchFromRemote2({}, [], [{fieldName: 'invoiceNo', opr: 'eq', value: this.doDetails.refSoNo}]);
      this.doDetails.paidAmount = res.records ? res.records[0].paidAmount : 0;
      this.title = '支付';
      this.account = account;
      this.paymentDialogVisible = true;
    },
    async paymentDialogConfirmHandle() {
      this.paymentDialogVisible = false;
      this.refreshKey += 1;
    },
    paymentDialogCancelHandle() {
      this.paymentDialogVisible = false;
    },
  },
  render(h) {
    this.$slots.dialog = [
      h('PaymentDialog', {
        attrs: {
          title: this.title,
          'indexDialogVisible': this.paymentDialogVisible,
          'account': this.account,
          'invoice': this.doDetails
        },
        on: {
          'dialogConfirmHandle': this.paymentDialogConfirmHandle,
          'dialogCancelHandle': this.paymentDialogCancelHandle,
        },
      })
    ];
    this.$slots.account = [
      h('AccountCard', {
        attrs: {
          'financeCustomerNo': this.doDetails.financeCustomerNo,
          'paymentTerms': this.doDetails.paymentTerms,
          'invoice': this.doDetails,
          'refreshKey': this.refreshKey,
        },
        on: {
          'accountEvent': this.paymentHandler
        }
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
::v-deep .el-dialog__wrapper {
  .el-dialog {
    .el-dialog__body {
      // padding: 0;
      > .app-container {
        padding: 0;
        position: relative !important;
      }
    }
  }
}
</style>
