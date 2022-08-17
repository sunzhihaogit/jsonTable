/* eslint-disable vue/name-property-casing */
<template>
  <div class="account inline-block fl clearfix">
    <div v-if="paymentTermsName" class="card-panel ml10 fl">
      <div class="title">客户概况</div>
      <span class="desc">{{ paymentTermsName }}</span>
    </div>
    <!-- <div class="card-wrap inline-block clearfix"> -->
      <div v-if="accounts.length" class="cards inline-block fl">
       <!-- 返利账户 -->
       <template  v-for="(item, index) in accounts">
        <div
          v-if="item.accountType == '1'"
          :key="index"
          :class="['card-panel', 'ml10', 'fl', {'bg_grey': item.accountStatus == '2'}]"
          @click.stop="accountClick(item)"
        >
          <el-link :underline="false">
            <div class="title">{{ item.accountName }} </div>
            <span class="desc orange">{{ item.totalBalance || item.balance+item.credit }}</span>
          </el-link>
        </div>
        </template>
      </div>
      <div v-if="!accounts.length"  class="card-panel ml10 fl">
        <div class="title">预收账户</div>
        <span class="desc orange">N/A</span>
      </div>
      <div v-if="false" class="text fr">
        <p class="item inline-block">
          已支付金额&nbsp;&nbsp;&nbsp;
          <span>{{ invoice && invoice.paidAmount ? invoice.paidAmount : 0 }}</span>
        </p>
        <p class="item inline-block">
          总金额&nbsp;&nbsp;&nbsp;
          <span>{{ invoice && invoice.totalAmount ? invoice.totalAmount : 0 }}</span>
        </p>
      </div>
    <!-- </div> -->
  </div>
</template>
<script>
import indexFunc from './index.js';
import { DictArray, Account } from './models.js';

export default {
  name: 'Account',
  components: {},
  props: ['financeCustomerNo', 'paymentTerms', 'invoice','refreshKey'],
  data() {
    return {
      accounts: [],
      payTypeList: DictArray.bind(Account.dictList, ['PayType']),
      accountTypeList: DictArray.bind(Account.dictList, ['AccountBusinessType']),
      paymentTermsName: '',
    };
  },
  async mounted() {
    await this.initHandler();
  },
  watch: {
    async financeCustomerNo(val) {
      await this.fetchAccount();
    },
    async invoice(val) {
      await this.fetchAccount();
    },
    async refreshKey(val){
      await this.initHandler();
    },
    async paymentTerms(val) {
      // await this.initHandler();
      let select = this.payTypeList.data.find(item => item.key == val);
      this.paymentTermsName = select ? select.value : '';
      this.$forceUpdate();
    }
  },
  methods: {
    async initHandler() {
      await this.loadLists();
      await this.fetchAccount();
      // 付款方式（客户概况）
      let select = this.payTypeList.data.find(item => item.key == this.paymentTerms);
      this.paymentTermsName = select ? select.value : '';
    },
    async fetchAccount() {
      // 账户
      let res = await Account.fetchFromRemote2({}, [], [{ fieldName: 'customerNo', opr: 'eq', value: this.financeCustomerNo }, { fieldName: 'isActive', opr: 'eq', value: 1 }, { fieldName: 'isActiveStr', opr: 'eq', value: '1' }]);
      this.accounts = res.records.length && res.records.map(account => {
        let select = this.accountTypeList.data.find(item => item.key == account.accountType);
        account.accountTypeName = select ? select.value : '';
        return account;
      });
      this.$forceUpdate();
    },
    accountClick(account) {
      this.$emit('accountEvent', account);
    },
    async loadLists() {
      // 拉取默认字典列表
      await this.payTypeList.load();
      await this.accountTypeList.load();
    }
  }
};
</script>
<style lang="scss" scoped>
.bg_grey {
  color: rgb(189, 186, 186) !important;
  .desc {
    color: rgb(189, 186, 186) !important;
  }
  .title {
    color: rgb(189, 186, 186) !important;
  }
}
</style>
