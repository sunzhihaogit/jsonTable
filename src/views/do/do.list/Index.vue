/* eslint-disable vue/name-property-casing */
<template>
  <div class="app-container list clearfix">
    <el-dropdown
      class="menu fr mb10"
      size="small"
      split-button
      type="primary"
      @click.stop="menuCommand"
      @command="menuCommand"
    >
      <!-- 配置 -->
      {{ actionConfig[0].name }}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in actionConfig.filter((action, index) => (action.isShow == null || action.isShow(this)) && index !== 0)"
          :key="index"
          :command="item.command"
        >
          <el-upload
            v-if="item.upload"
            ref="fieldUpload"
            class="upload-demo mr10 inline-block"
            :headers="uploadHeaders"
            :action="item.upload(item).action"
            :data="item.upload(item).data"
            :auto-upload="item.upload(item).isAutoUpload"
            :show-file-list="false"
            :on-change="item.upload(item).isNSImport ? importHandler : batchImportHandler"
            :before-upload="(file) => { return beforeUpload(file, item.upload(item).fileType, item.upload(item).fileSize) }"
            :on-success="uploadSuccess"
            :on-error="uploadError"
          >
            <span>{{ item.name }}</span>
          </el-upload>
          <span v-else>{{ item.name }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <keep-alive>
      <DynamicTable
        ref="dynamicTable"
        :columns="headers && headers.filter(item => item.isShow)"
        :itemActionConfig="itemActionConfig"
        :rows="doList"
        :loading="loading"
        :pages="pages"
        :tools="toolConfig.filter(config => config.isShow == null || config.isShow(this))"
        :summaryRecord="summaryRecord"
        :refresh="fetchDO"
        @onSizeChange="handleSizeChange"
        @onCurrentChange="handleCurrentChange"
        @onAction="actionHandler"
        @onLink="linkHandler"
        @onSelection="selectionHandler"
        @onFilter="filterHandler"
        @onSort="sortHandler"
        @onRemoveTag="removeTagHandler"
        @onRemoveSortTag="removeSortTagHandler"
        @columnChange="columnChange"
        @onTool="toolHandler"
        @onShuttleFrame="shuttleFrameHandler"
        @onRowDblClick="dblClickHandler"
        @onUploadBefore="beforeUpload"
        @onUploadSuccess="uploadSuccess"
        @onUploadError="uploadError"
        @onImportChange="importHandler"
      />
    </keep-alive>

    <!-- 穿梭框 -->
    <ShuttleFrame
      v-if="shuttleFrameVisible"
      :visible="shuttleFrameVisible"
      :source="source"
      :title="sfTitle"
      :source-title="sourceTitle"
      :target-title="targetTitle"
      button-text="保存"
      @onConfirm="shuttleFrameSave"
      @onClose="shuttleFrameClose"
    />

    <!-- 对话框 -->
    <Dialog
      v-if="dialogVisible"
      :dialog-title="dialogTitle"
      :dialog-desc="dialogDesc"
      :dialog-visible="dialogVisible"
      :loading="isLoading"
      @dialogConfirmHandle="dialogConfirmHandle"
      @dialogCancelHandle="dialogCancelHandle"
    />
    <slot name="dialog" />
    <TransferDialog
      v-if="transferOwnerVisible"
      :width="'30%'"
      :title="transferOwnerTitle"
      :transferDialogVisible="transferOwnerVisible"
      @dialogConfirmHandle="transferOwnerConfirmHandle"
      @dialogCancelHandle="transferOwnerCancelHandle"
    />
  </div>
</template>
<script>
import DynamicTable from '@/layout/components/common/DynamicTable.vue';
import ShuttleFrame from '@/layout/components/common/ShuttleFrame.vue';
import Dialog from '@/layout/components/common/Dialog.vue';
// import TransferDialog from '../../user/user.edit/Index.transfer.dialog.vue';
import indexFunc from './index.js';
import {
  actionConfig,
  toolConfig,
  itemActionConfig,
  headers
} from './config.js';
export default {
  name: 'do.list',
  // name: 'DO',
  props:{
    mode: {},
    initQuery: {
      type: Array,
      default: () => []
    },
    refInvoice: {
      type: Object,
      // default: () => {}
    },
    orderByField: {
      type: Object,
      default: () => ({name: 'createTime', opr: 'desc'})
    },
    item: {}
  },
  components: {
    DynamicTable,
    ShuttleFrame,
    Dialog,
    TransferDialog
  },
  data() {
    return {
      headers, // 展示字段
      actionConfig, // 操作配置
      toolConfig, // 工具栏配置
      itemActionConfig, // 列表行操作配置
      doList: [],
      configKey: 'do',
      pages: {},
      query: [],
      orderBy: [],
      summaryRecord: {},
      tool: null,
      loading: true,
      isLoadingExport: false,
      isLoading: false,
      // 穿梭框
      source: [], // 当前模型所有字段
      shuttleFrameVisible: false,
      sfTitle: '字段配置',
      sourceTitle: '隐藏字段',
      targetTitle: '显示字段',
      // 对话框
      dialogVisible: false,
      dialogType: '',
      dialogDesc: '',
      dialogSource: '',
      dialogTitle: '',
      currentItem: {},
      selections: [],
      isAltDown: false,
      transferOwnerVisible: false,
      transferOwnerTitle: '',
      // 上传
      action: (actionName) => {
        return this[actionName];
      },
      uploadHeaders: {
        Authorization: `Bearer ${this.$keycloak.token}`,
	      // userName: `${this.$keycloak.userName}`
      }
    };
  },
  watch: {
    initQuery: async function(val) {
      await this.fetchDO();
    },
  },
  async mounted() {
    await this.initHandle();
    document.onkeydown = (e) => {
      if ((e.altKey && e.key === 'Tab') || e.key === 'Escape') { // 监听 Alt+Tab
        this.$store.dispatch('app/toggleSideBar');
        e.preventDefault();
      }
      if (e.altKey) {
        this.isAltDown = true;
      }
    };
    document.onkeyup = (e) => {
      this.isAltDown = false;
      document.onkeydown = '';
    };
  },
  created() {
    if (this.mode == null || this.initQuery.length > 0) this.fetchDO();
  },
  // destroyed() {
  //   // 销毁键盘事件
  //   document.onkeydown = '';
  //   this.isEdit = false;
  //   window.removeEventListener('keydown', event => {
  //     console.log(event.value);
  //     event.preventDefault();
  //   });
  // },
  methods: indexFunc
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
