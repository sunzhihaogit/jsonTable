/* eslint-disable vue/name-property-casing */
<script>
import IndexVue from './Index.vue';
import ItemList from '../../doItem/doItem.list/Index.ext.vue';
import { actionConfig, controlConfig, footerConfig } from './config.ext.js';
import { DictArray, DO ,SO} from './models.js';
import { ReturnOrder } from '@/pages.v2/returnOrder/returnOrder.edit/models.js';
import { uploadFileUrl } from '@/api/publicApi';
import AccountCard from '@/pages.v2/do/do.edit/account.vue';
import PaymentDialog from '@/pages.v2/accountItem/accountItem.edit/Index.pay.dialog.vue';
import {Account} from '../do.edit/models.js'
export default {
  name: 'ExtDODetails',
  components: { AccountCard, PaymentDialog,ItemList },
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
  async mounted() {
    this.itemOrderBy = { name: "lineNo", opr: "asc" };
  },
  created() {},
  methods: {

    confirmInvoiceHandler(){
      this.confirmActionHandler()
    },
    async confirmActionHandler() {
      // 确认
      console.log('确认');
      const res = await this.doDetails.confirmToRemote2(); // 确认发货单
      if (res) {
        this.$message({
          type: 'success',
          message: '确认成功！',
        });
      }
    },
    // 明细批量操作
    batchToolHandler(tool, selections) {
      IndexVue.methods.batchToolHandler.call(tool, selections);
      const handlerName = `${tool}Handler`;
      this[handlerName](selections);
    },
    // 退货
    async returnHandler(selections) {
      this.loading = true;
      if (!selections.length) {
        this.$message({
          type: 'error',
          message: '无法创建退货单！',
        });
        return;
      }
      let returnOrder = await ReturnOrder.createFromDO(
        this.doDetails,
        selections
      );
      this.$router.push({
        name: 'returnOrder.edit',
        params: { returnOrder },
      });
      this.loading = false;
    },
    // 整单退货
    async returnActionHandler() {
      // 拉取DOItem
      this.loading = true;
      let returnOrder = await ReturnOrder.createFromDO(this.doDetails);
      this.$router.push({
        name: 'returnOrder.edit',
        params: { returnOrder },
      });
      this.loading = false;
    },
    async importHandler(file) {
      // 上传箱单
      if (!file.response) return;
      let { response } = file;
      if (response.code === '0') {
        let ids = this.doDetails.attachmentIds ? [ ...this.doDetails.attachmentIds.split(','), response.data.id.toString()] : [response.data.id.toString()]; // 为 attachmentIds 追加加id
        ids = DictArray.$(ids).uniqBy();
        this.doDetails.attachmentIds = ids.join(',');
        await this.doDetails.updateToRemote2(); // 更新
      }
    },
    
    // async paymentHandler(doItem) {
    //   this.dos = this.doDetails;
    //   this.account.refDoNo = this.doDetails.doNo; // 关联发货单号
    //   this.account.refInvoiceNo = this.doDetails.refSoNo; // 关联销售单号
    //    // 请求销售订单详情数据
    //   const res = await SO.fetchFromRemote2({}, [], [{fieldName: 'invoiceNo', opr: 'eq', value: this.doDetails.refSoNo}]); 
    //   this.dos.paidAmount =  res.records ? res.records[0].paidAmount : 0
    //   await this.fetchAccount();
    // },
    // async fetchAccount() {
    //   // 判断是否保存
    //   if (!this.doDetails.invoiceStatus || [DO.INVOICESTATUS.新增].includes(this.doDetails.invoiceStatus)) {
    //     this.$message({ type: "success", message:"请先保存单据，才能进行支付。" })
    //     return;
    //   }
    //   // 拉取账户凭证
    //   const res = await Account.fetchFromRemote2({}, [], [{fieldName: 'customerNo', opr: 'eq', value: this.doDetails.financeCustomerNo}]);
    //   if (!res.records.length) {
    //     this.$message({
    //       type: 'error',
    //       message: '无此客户的账户信息！'
    //     });
    //     return;
    //   }
    //   this.account = res.records.find(item => item.accountType == '1') || res.records[1]; // 第一条就是返利账户
    //   this.paymentDialogVisible = true
    // },
    // async paymentDialogConfirmHandle() {
    //   // 支付确认
    //   this.paymentDialogVisible = false;
    // },
    // paymentDialogCancelHandle() {
    //   // 支付取消
    //   this.paymentDialogVisible = false;
    // },

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
       // 方案是点击账户时判断下单据确认态就提示
      if([DO.INVOICESTATUS.已确认].includes(this.doDetails.invoiceStatus)) {
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
      console.log('idsddd',res)
      this.doDetails.paidAmount = res.records ? res.records[0].paidAmount : 0;
      console.log('idsddd-ppp',this.doDetails)
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
    async cancelActionHandler() { 
    // 头需要取消单据
    const res = await this.doDetails.cancelToRemote2(); // 取消发货单
    if (res && res.invoiceStatus === '5') {
      this.$message({
        type: 'success',
        message: '取消成功！'
      });
    }
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
      padding: 0;
      > .app-container {
        padding: 0;
        position: relative !important;
      }
    }
  }
}
</style>
