<template>
  <div class="app">
    <el-alert
      v-if="alertBol"
      title="点击右侧的按钮可以进行修改json，可以更改配置，代码里面也可以修改 cofig.js文件。打印请看控制台。"
      type="success"
    >
    </el-alert>
    <DynamicTable
      ref="dynamicTable"
      :columns="headers && headers.filter((item) => item.isShow)"
      :itemActionConfig="itemActionConfig"
      :rows="doList"
      :loading="loading"
      :pages="pages"
      :actionConfig="actionConfig"
      :summaryRecord="summaryRecord"
      :tools="
        toolConfig.filter(
          (config) => config.isShow == null || config.isShow(this)
        )
      "
      @onTool="toolHandler"
      @onSelection="selectionHandler"
      @onSort="sortHandler"
      @onFilter="filterHandler"
      @onAction="actionHandler"
      @onRowDblClick="dblClickHandler"
      @onLink="linkHandler"
      @onSizeChange="handleSizeChange"
      @onCurrentChange="handleCurrentChange"
      @menuCommand="menuCommand"
    />

    <!-- <keep-alive>
      <DynamicTable
        ref="dynamicTable"
        :columns="headers && headers.filter((item) => item.isShow)"
        :itemActionConfig="itemActionConfig"
        :rows="doList"
        :loading="loading"
        :pages="pages"
        :tools="
          toolConfig.filter(
            (config) => config.isShow == null || config.isShow(this)
          )
        "
        :summaryRecord="summaryRecord"
        :refresh="fetchDO"
     
      /> -->
    <!-- 
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
       -->
    <!-- </keep-alive> -->

    <!-- 对话框 -->
    <!-- 对话框 -->
    <Dialog
      v-if="dialogVisible"
      :dialog-title="dialogTitle"
      :dialog-desc="dialogDesc"
      :dialog-visible="dialogVisible"
      :dialog-config="dialogConfig"
      :loading="isLoading"
      @dialogConfirmHandle="dialogConfirmHandle"
      @dialogCancelHandle="dialogCancelHandle"
    />
    <slot name="dialog" />

    <!-- 抽屉 弹出修改json-->
    <drawer
      :indexDialogVisible="indexDialogVisible"
      @dialogCancelHandle="dialogCancelHandle"
    >
      <vue-json-editor
        v-model="json"
        :show-btns="false"
        lang="zh"
        @json-change="onJsonChange"
        @json-save="onJsonSave"
        @has-error="onError"
      ></vue-json-editor>
    </drawer>
  </div>
</template>

<script>
import DynamicTable from "@/components/DynamicTable.vue";
import {
  headers,
  itemActionConfig,
  toolConfig,
  actionConfig,
  dialogConfig,
} from "./config";
import drawer from "./Index.drawer.vue";
import vueJsonEditor from "vue-json-editor";
import Dialog from "@/components/Dialog.vue";
import index from "./index";
import { res } from "./dataJson";
export default {
  name: "superTable",
  data() {
    return {
      mode: {},
      headers,
      doList: [],
      toolConfig,
      loading: false,
      itemActionConfig,
      actionConfig,
      dialogConfig,
      pages: {},
      configKey: "doii",
      pages: {},
      query: [],
      orderBy: [],
      summaryRecord: {},
      tool: null,
      isLoadingExport: false,
      isLoading: false,
      // 穿梭框
      source: [], // 当前模型所有字段
      shuttleFrameVisible: false,
      sfTitle: "字段配置",
      sourceTitle: "隐藏字段",
      targetTitle: "显示字段",
      // 对话框
      dialogVisible: false,
      dialogType: "",
      dialogDesc: "",
      dialogSource: "",
      dialogTitle: "",

      currentItem: {},
      selections: [], // 多选
      isAltDown: false,
      transferOwnerVisible: false,
      transferOwnerTitle: "",
      // 上传
      action: (actionName) => {
        return this[actionName];
      },
      uploadHeaders: {
        Authorization: `Bearer token`,
        // userName: `${this.$keycloak.userName}`
      },
      indexDialogVisible: false,
      json: {},
      alertBol: true,
    };
  },
  components: {
    DynamicTable,
    Dialog,
    vueJsonEditor,
    drawer,
  },
  created() {
    this.doList = res.data.records.length
      ? res.data.records.map((record) => record)
      : [];
    this.pages = {
      total: res.data.total,
      currentPage: res.data.current,
      pageSize: res.data.size,
    };
    this.fetchDO();
    setTimeout(() => {
      this.alertBol = false
    }, 9000)
  },
  watch: {
    json: {
      handler(org) {
        console.log("sdi", org.actionConfig);
        this.actionConfig = org.actionConfig;
        this.toolConfig = org.toolConfig;
        this.itemActionConfig = org.itemActionConfig;
        this.headers = org.headers;
        this.dialogConfig = org.dialogConfig;
      },
      deep: true,
    },
  },
  methods: index,
};
</script>

<style>
.app {
  padding: 20px;
}
</style>