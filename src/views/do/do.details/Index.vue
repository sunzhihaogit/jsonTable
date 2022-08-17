<template>
  <div class="app-container details">
    <!-- 头 -->
    <el-card class="header">
      <svg-icon icon-class="order2" class-name="icon inline-block" />
      <h1 class="title inline-block">
        发货单 {{ doDetails.objectNo }}
      </h1>
      <div class="info">
        <ul>
          <li
            v-for="(item, index) in titleConfig"
            :key="index"
            class="col"
          >
            <div class="item">
              <div class="label ellipsis">
                <span>{{ item.name }}</span>
              </div>
              <div class="value ellipsis">
                <span>{{ format(item) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="menu">
        <!-- <el-button class="mr10" size="small" type="primary" @click.stop="back">返回</el-button> -->
        <el-dropdown
          size="small"
          split-button
          type="primary"
          v-if="validActionConfigs().length>0"
          @click.stop="menuCommand(validActionConfigs()[0].command)"
          @command="menuCommand"
        >
          {{validActionConfigs()[0].name}}
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in validActionConfigs().slice(1)"
              :key="index"
              :command="item.command"
            >
              <el-upload
                v-if="item.upload"
                ref="fieldUpload"
                class="upload-demo mr10 inline-block"
                :headers="uploadHeaders"
                :action="item.upload(doDetails).action"
                :data="item.upload(doDetails).data"
                :auto-upload="true"
                :show-file-list="false"
                :on-change="importHandler"
                :before-upload="(file) => { return beforeUpload(file, item.upload(doDetails).fileType, item.upload(doDetails).fileSize) }"
                :on-success="uploadSuccess"
                :on-error="uploadError"
              >
                <span>{{ item.name }}</span>
              </el-upload>
              <span v-else>{{ item.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-card>

    <div class="main mt10">
      <el-tabs v-model="activeName" type="card" @tab-click="tabChange">
        <el-tab-pane
          v-for="tab in tabsList"
          :key="tab.value"
          :label="tab.label"
          :name="tab.value"
        >
          <div v-if="tab.value === 'Details'">
            <!-- <div class="section">
              <h3 class="subtitle">
                发货单明细（{{ doDetails.totalRows || 0 }}）
                <span class="more ml5">更多 >></span>
              </h3>
              <div>
                <HotTable ref="orderTable" :root="root" :settings="hotInstanceSetting" />
              </div>
            </div> -->

            <el-collapse v-model="activeCollapse" @change="collapseChange">
              <el-collapse-item
                v-for="collapse in collapseList"
                :key="collapse.name"
                :title="collapse.title"
                :name="collapse.name"
              >
                <div v-if="collapse.name === 'items'">
                  
                  <ItemList ref="itemList" :initQuery="initQuery" :mode="mode" :orderByField="itemOrderBy" :item="doDetails" @onBatchTool="batchToolHandler" @OnLoaded="itemsLoaded" />
                  
                </div>
                <div v-else>
                  <el-form
                    :key="`editor_${collapse.name}`"
                    :inline="true"
                    label-position="left"
                  >
                    <el-form-item
                      v-for="(item, index) in (editConfigV2[collapse.name]||[]).filter(item=>doDetails.isShow(item.field))"
                      :key="index"
                      :label="item.name"
                    >
                      <div class="required">
                        <span v-if="item.isRequired" class="red">*</span>
                      </div>
                      <div ref="editor" class="edit-item">
                        <div v-if="item.editType === 'select'">
                          <el-link
                            v-if="item.isLink"
                            type="primary"
                            :underline="false"
                            @click.stop="linkHandler(item)"
                          >{{ format(item) }}</el-link>
                          <p v-else>{{ format(item) }}</p>
                        </div>
                        <div v-else-if="item.editType === 'checkbox'">
                          <p>{{ doDetails[item.field] === true ? '是' : (doDetails[item.field] === false ? '否' : '') }}</p>
                        </div>
                        <div v-else>
                          <el-link
                            v-if="item.isLink"
                            type="primary"
                            :underline="false"
                            @click.stop="linkHandler(item)"
                          >{{ doDetails.format(item.field, item.format) }}</el-link>
                          <p v-else>{{ doDetails.format(item.field, item.format) }}</p>
                        </div>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

          <!-- <div v-if="tab.value === 'Relation'">
            <div class="section">
              <h3 class="subtitle">
                相关信息
                <svg-icon icon-class="arrowDown" class-name="menu-icon ml5" />
              </h3>
            </div>
          </div> -->
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部栏 -->
    <div class="fixed-wrap">
      <div class="content-wrap t_right">
        <div class="left-group clearfix">
          <div class="total fl">共&nbsp;{{ doDetails.viewLines().length }}&nbsp;条</div>
          <slot name="account" />
        </div>
        <div class="right-group">
          <div
            v-for="(item, index) in footerConfig.filter(item => item.isShow == null || item.isShow(this))"
            :key="`${item.name}${index}`"
            class="inline-block">
            <el-dropdown
              v-if="item.isDropdown"
              class="ml10"
              size="small"
              split-button
              type="primary"
              @command="footerMenuHandler"
              >
              {{ item.name }}
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(menu, subIndex) in item.menus.filter(menu=> menu.isShow(doDetails))"
                  :key="`${menu.name}_${subIndex}`"
                  :command="menu"
                >{{ menu.name }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button
              v-else
              class="ml10"
              v-preventReClick
              :type="item.type || ''"
              size="small"
              @click.stop="controlHandler(item)"
            >{{ item.name }}</el-button>
          </div>
        </div>
      </div>
    </div>
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
  </div>

</template>
<script>
import { mapGetters } from 'vuex';
import { TabList, DictArray,DO } from './models.js';
import Dialog from '@/layout/components/common/Dialog.vue';
import indexFunc from './index.js';
import ItemList from '../../doItem/doItem.list/Index.vue';
import {
  titleConfig,
  actionConfig,
  footerConfig,
  editConfig,
  editConfigV2
} from './config.js';
export default {
  name: 'DODetails',
  components: { ItemList,Dialog },
  data() {
    return {
      doDetails: new DO(), // 发货单详情
      editable: true,
      id: '',
      // 配置
      titleConfig,
      actionConfig, // 操作配置
      footerConfig,
      editConfig,
      editConfigV2,
      initQuery: [],
      mode: 'detail',
      itemOrderBy: {name: 'lineNo', opr: 'asc'},
      // itemOrderBy: {name:"updateTime",opr:"desc"},
      tabsList: new TabList().tabs, // tabList
      activeName: 'Details', // Tab
      isLoading: false,
      
      collapseList: [
        {
          title: '基本信息',
          name: 'base'
        },
        {
          title: '发货单明细',
          name: 'items'
        },
        {
          title: '其他信息',
          name: 'other'
        }
      ],
      activeCollapse: ['base', 'items', 'other'], // 折叠面板
      
      customerList: DictArray.$([]),
      // pages: {},
      query: [],
      pages: { currentPage: 1, pageSize: 20 },
      // query: [{ fieldName: 'headId', opr: 'eq', value: this.id.toString() }],
      orderBy: [],
      loading: false,
      isLoadingExport: false,
      // 对话框
      dialogVisible: false,
      dialogTitle: '确认',
      dialogType: '',
      dialogDesc: '',
      sidebarSwitch: true, // 侧边栏状态
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
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  watch: {
    sidebar: {
      handler: function(val, oldVal) {
        this.sidebarSwitch = val.opened;
        console.log(this.sidebarSwitch, '侧边栏开关');
      },
      deep: true
    }
  },
  async mounted() {
    await this.detailsInitHandle();

    this.sidebarSwitch = this.sidebar.opened;
    // window.addEventListener('scroll', this.roll);

    document.onkeydown = (e) => {
      if (e.key === 'Escape' ) { // 监听 Esc
        this.back()
        e.preventDefault();
      }
      if (e.altKey && e.key === 'Tab') { // 监听 Alt+Tab
        this.$store.dispatch('app/toggleSideBar')
      }
    };
  },
  destroyed() {
    // 销毁键盘事件
    document.onkeydown = '';
    this.isEdit = false;
    window.removeEventListener('keydown', event => {
      console.log(event.value);
      event.preventDefault();
    });
  },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.roll);
  // },
  methods: indexFunc
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 15px 0 0 0;
}
</style>
