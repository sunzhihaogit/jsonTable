/* eslint-disable vue/name-property-casing */
<template>
  <el-dialog
    :title="title||'选择'"
    :visible="indexDialogVisible"
    :close-on-click-modal="false"
    :append-to-body="true"    
    :width="width||'80%'"
    :height="height"
    @close='cancelHandle'
  >
  <div class="app-container clearfix">
　<Index ref="index" :initQuery="initQuery" :refInvoice="refInvoice" @OnLoaded="onLoaded" mode="dialog"/>
  </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click.stop="cancelHandle">取 消</el-button>
      <!-- <el-button type="primary" v-preventReClick @click.stop="confirmHandle">确 定</el-button> -->
    </span>
  </el-dialog>
</template>
<script>
import Index from './Index.ext.vue';
export default {
  name: 'DODialog',
  components: {
    Index
  },
  props: ['indexDialogVisible', 'width', 'height', 'title', 'initQuery', 'refInvoice'],
  data() {
    return {};
  },
  watch: {},
  async mounted() {},
  methods: {
    confirmHandle() {
      console.log('confirmHandle');
      this.$emit('dialogConfirmHandle',this.$refs['index'].selections);
    },
    cancelHandle() {
      console.log("cancelHandle");
      this.$emit('dialogCancelHandle');
    },
    onLoaded(list) {
      this.$emit("OnLoaded",list,this.$refs['index'].dynamicTable);
    },
  }
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
