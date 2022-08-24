<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :before-close="cancelHandle"
    :append-to-body="true"
    :width="(dialogConfig && dialogConfig.width) || '30%'"
  >
    <div v-if="dialogConfig && dialogConfig.isEditable == true">
      <el-input v-if="dialogConfig.editType == 'input'" v-model="value" :placeholder="dialogConfig[dialogConfig.editType].placeholder || '请输入'"></el-input>
    </div>
    <span v-else>{{ dialogDesc }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click.stop="cancelHandle">取 消</el-button>
      <el-button size="small" :loading="loading" type="primary"  @click.stop="confirmHandle">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['dialogDesc', 'dialogVisible', 'dialogTitle', 'loading', 'dialogConfig'],
  data() {
    return {
      value: null
    }
  },
  watch: {},
  mounted() {},
  methods: {
    confirmHandle() {
      this.$emit('dialogConfirmHandle', this.value);
    },
    cancelHandle() {
      this.$emit('dialogCancelHandle');
    }
  }
}
</script>
