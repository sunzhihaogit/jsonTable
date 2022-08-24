<template>
  <el-drawer
    :title="title || '选择'"
    :visible="indexDialogVisible"
    :close-on-click-modal="false"
    :append-to-body="true"
    :direction="direction"
    :size=" width || '83%'"
    height="100%"
    @close='cancelHandle'
  >
    <div class="app-container clearfix">
        <slot></slot>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click.stop="cancelHandle">取 消</el-button>
      <el-button type="primary" v-preventReClick @click.stop="confirmHandle"
        >确 定</el-button
      >
    </span>
  </el-drawer>
</template>
<script>
export default {
  name: 'DODrawer',
  components: {
  },
  props: ["indexDialogVisible", "width", "height", "title", "initQuery"],
  data() {
    return { direction: "rtl" };
  },
  watch: {},
  async mounted() {},
  methods: {
    confirmHandle() {
      console.log("confirmHandle");
      this.$emit("dialogConfirmHandle", this.$refs["index"].selections);
    },
    cancelHandle() {
      console.log("cancelHandle");
      this.$emit("dialogCancelHandle");
    },
    onLoaded(list) {
      this.$emit("OnLoaded", list, this.$refs["index"].dynamicTable);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-drawer__header > :first-child {
  font-weight: 700;
  font-size: 17px;
}
::v-deep .el-drawer__header {
  margin-bottom: 5px;
}
::v-deep .app-container{
  overflow:auto;
}
::v-deep .app-container{
  padding:5px 10px;
}
.app-container {
  position: relative;
  .menu {
    position: absolute;
    right: 20px;
    z-index: 2;
  }
}
</style>
