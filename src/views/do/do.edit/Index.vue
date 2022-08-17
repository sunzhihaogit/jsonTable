<template>
  <div class="app-container details">
    <!-- 头 -->
    <el-card class="header">
      <svg-icon icon-class="order2" class-name="icon inline-block" />
      <h1 class="title inline-block">
        发货单 {{ doDetails.objectNo }}
      </h1>
      <div v-if="titleConfig && titleConfig.length" class="info">
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
            <el-collapse v-model="activeCollapse" @change="collapseChange">
              <el-collapse-item
                v-for="collapse in collapseList"
                :key="collapse.name"
                :title="collapse.title"
                :name="collapse.name"
              >
                <div v-if="collapse.name === 'items'">
                  <transition name="el-zoom-in-bottom">
                    <div class="tool-wrap mb10">
                      <span class="count ml10 mr10">已选中 {{ (doDetails.orderLines && doDetails.orderLines.filter(item => item.isSelected).length) || 0 }} 项</span>
                      <el-divider direction="vertical"></el-divider>
                      <div v-if="selectConfig && selectConfig.length">
                        <el-button
                          v-for="(item, index) in selectConfig"
                          :key="index"
                          :icon="item.icon"
                          size="small"
                          type="primary"
                          @click.stop="selectHandler(item)"
                          >{{ item.name }}</el-button>
                        <!-- <span class="close-btn fr mr10" @click.stop="selectCloseHandler">
                          <i class="el-icon-close" />
                        </span> -->
                      </div>
                    </div>
                  </transition>
                  
                  <ExtHotTable ref="orderTable"
                    :lines="doDetails.orderLines"
                    :headers="headers && headers.filter(item => item.isShow)"
                    :lineManager="doDetails"
                    :contextMenuItems="contextMenuItems"
                    :hottableRefreshkey="hottableRefreshkey"
                    :allowCreateRow="allowCreateRow"
                    @onContextMenuClick="contextMenuHandler"
                    @onCellClick="onCellClick"
                    @onAfterChange="afterChangeHandle"
                    @beforeContextMenuSetItems="beforeContextMenuSetItems"
                  />
                  
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
                      :class="item.isEditable ? 'isEditable' : ''"
                      @mouseleave.stop="resetHandler(item, collapse.name)"
                    >
                      <div class="required">
                        <span v-if="item.isRequired" class="red">*</span>
                      </div>
                      <div ref="editor" class="edit-item" @mouseenter.stop="editFieldHandler(item, collapse.name, index)">
                        <div v-if="item.isEdit">
                          <!-- input 输入框 -->
                          <el-input
                            v-if="item.editType === 'input'"
                            v-model="doDetails[item.field]"
                            :class="item[item.editType].class ? item[item.editType].class : 'w260'"
                            :type="item.input.type"
                            size="small"
                            placeholder="请输入"
                            :autosize="item.input.autosize"
                            @keyup.enter.native="inputChange(item, collapse.name, index)"
                          />
                          <!-- select 下拉框 -->
                          <el-select
                            v-else-if="item.editType === 'select'"
                            v-model="doDetails[item.field]"
                            class="select_single w180"
                            size="small"
                            placeholder="（空）"
                            :filterable="item.select.filterable"
                            :filter-method="(val) => { return filterMethod(val, item) } "
                            @change="selectChange($event, item)"
                            @visible-change="selectVisibleChange($event,item)"
                          >
                            <el-option key label="（空）" value />
                            <el-option
                              v-for="(element, index) in item.select.list.data"
                              :key="`${item.name}_${element[item.select.value]}_${index}`"
                              :label="element[item.select.label]"
                              :value="element[item.select.value]"
                              :disabled="element.disabled"
                            />
                          </el-select>
                          <!-- datePicker 日期选择器 -->
                          <el-date-picker
                            v-else-if="item.editType === 'date'"
                            v-model="doDetails[item.field]"
                            class="w180"
                            size="small"
                            type="date"
                            format="yyyy-MM-dd"
                            placeholder="选择日期"
                          />
                          <!-- dateRangePicker 日期范围选择器 -->
                          <el-date-picker
                            v-else-if="item.editType === 'dateRange'"
                            v-model="doDetails[item.field]"
                            size="small"
                            unlink-panels
                            type="daterange"
                            format="yyyy-MM-dd"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            @change="dateRangeChange"
                          />
                          <!-- checkbox 多选框 -->
                          <el-checkbox
                            v-else-if="item.editType === 'checkbox'"
                            v-model="doDetails[item.field]"
                            @change="checkboxChange"
                          />
                        </div>
                        <div v-else>
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
                        <i class="icon el-icon-edit" />
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

          <div v-if="tab.value === 'Relation'">
            <!-- <div class="section">
              <h3 class="subtitle">
                相关信息
                <svg-icon icon-class="arrowDown" class-name="menu-icon ml5" />
              </h3>
            </div> -->
          </div>
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
            :key="`${footerkey}${item.name}${index}`"
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

  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { TabList, DictArray, DO } from './models.js';
import ExtHotTable from '@/layout/components/common/exthottable/ExtHotTable.vue';
import ShuttleFrame from '@/layout/components/common/ShuttleFrame.vue';
import Dialog from '@/layout/components/common/Dialog.vue';
import indexFunc from './index.js';
import { headers } from '../../doItem/doItem.edit/itemConfig.js';
import {
  titleConfig,
  actionConfig,
  footerConfig,
  editConfig,
  editConfigV2,
  selectConfig
} from './config.js';
export default {
  name: 'DOEdit',
  components: {
    ExtHotTable,
    ShuttleFrame,
    Dialog
  },
  data() {
    return {
      editable: true,
      doDetails: new DO(), // 发货单详情
      originLines: [],
      id: '',
      tabsList: new TabList().tabs, // tabList
      activeName: 'Details', // Tab
      footerkey: 1,
      hottableRefreshkey: 1,
      isLoading: false,
      
      contextMenuItems: [],
      contextMenuItemsConfig: [],
      headers,
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
      
      userName: this.$keycloak.userName,
      customerList: DictArray.$([]),
      titleConfig,
      footerConfig,
      actionConfig, // 操作配置
      editConfig,
      editConfigV2,
      selectConfig,
      
      // 穿梭框
      source: [], // 当前模型所有字段
      sfTitle: '字段配置',
      sourceTitle: '隐藏字段',
      targetTitle: '显示字段',
      
      shuttleFrameVisible: false,
      // 对话框
      dialogVisible: false,
      dialogTitle:"确认",
      dialogType: '',
      dialogDesc: '',
      // 键盘事件
      addressEdit: false, // tab事件判断条件
      tabObj: { field: '', type: '', index: '' },
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
    DO.renderFooter = () => this.footerkey += 1;
    await this.initHandle();
    this.sidebarSwitch = this.sidebar.opened;
    // window.addEventListener('scroll', this.roll);

    // 键盘事件 Ctrl+S Tab
    this.isEdit = true;
    document.onkeydown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') { // 监听 Ctrl+s/Meta+s
        this.confirmHandler();
        e.preventDefault();
      }
      if (e.key === 'Tab' && this.isEdit) { // 监听 tab
        this.onTab(this.tabObj.field, this.tabObj.type, this.tabObj.index);
        e.preventDefault();
      }
      if (e.key === 'Escape') { // 监听 Esc
        this.back()
        e.preventDefault();
      }
      if (e.altKey && e.key === 'Tab') { // 监听 Shift+Tab
        this.$store.dispatch('app/toggleSideBar')
      }
    };
  },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.roll);
  // },
  destroyed() {
    // 销毁键盘事件
    document.onkeydown = '';
    this.isEdit = false;
    window.removeEventListener('keydown', event => {
      console.log(event.value);
      event.preventDefault();
    });
  },
  methods: indexFunc
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 15px 0 0 0;
}
</style>
