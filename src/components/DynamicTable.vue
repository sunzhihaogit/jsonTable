<template>
  <div>
    <!-- 右侧的按钮 -->
    <el-dropdown
      class="menu fr mb10 rightBth"
      size="small"
      split-button
      type="primary"
      @click.stop="menuCommand"
      @command="menuCommand"
    >
      <!-- 新建 -->
      {{ actionConfig[0].name }}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in actionConfig.filter(
            (action, index) =>
              (action.isShow == null || action.isShow(this)) && index !== 0
          )"
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
            :on-change="
              item.upload(item).isNSImport ? importHandler : batchImportHandler
            "
            :before-upload="
              (file) => {
                return beforeUpload(
                  file,
                  item.upload(item).fileType,
                  item.upload(item).fileSize
                );
              }
            "
            :on-success="uploadSuccess"
            :on-error="uploadError"
          >
            <span>{{ item.name }}</span>
          </el-upload>
          <span v-else>{{ item.name }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="dynamic-table">
      <!-- 勾选项工具栏 -->
      <transition name="el-zoom-in-bottom">
        <div v-show="selectionRows.length" class="tool-wrap mb10">
          <span class="count ml10 mr10"
            >已选中 {{ selectionRows.length || 0 }} 项{{
              selectionRows.customizedMsg
            }}
          </span>
          <el-divider direction="vertical"></el-divider>
          <el-button
            v-for="(item, index) in tools"
            :key="index"
            :icon="item.icon"
            size="small"
            type="primary"
            @click.stop="toolHandler(item)"
            >{{ item.name }}</el-button
          >
          <span
            style="margin-left: 15px"
            class="close-btn fr mr10"
            @click.stop="toolCloseHandler"
          >
            <i class="el-icon-close" />
          </span>
        </div>
      </transition>

      <!-- 筛选标签 -->
      <FilterTag
        class="filter-tag"
        :filter-tags="filterTags"
        :sort-tags="sortTags"
        @onRemoveTag="removeTagHandler"
        @onRemoveSortTag="removeSortTagHandler"
      />

      <!-- Table -->
      <el-table
        class="table-wrap"
        ref="table"
        v-loading="loading"
        :key="dynamicTableKey"
        :data="rows"
        :row-key="
          (row, index) => {
            return index;
          }
        "
        @row-dblclick="rowDblClick"
        @cell-click="cellClick"
        @cell-mouse-enter.once="columnDrop"
        @selection-change="selectionChange"
        :header-cell-style="cellStyleHandler"
        :show-summary="showSum"
        :summary-method="getSummaries"
        style="width: 100%"
        height="100%"
        stripe
        border
      >
        <el-table-column
          type="selection"
          width="55"
          :reserve-selection="true"
          fixed
        />
        <el-table-column
          v-for="(item, index) in columns"
          :key="`columns_${index}`"
          :prop="item.field ? item.field : ''"
          :label="item.name"
          :width="item.width"
          :fixed="item.fixed"
          :align="item.align"
          :show-overflow-tooltip="true"
          :class-name="item['className']"
        >
          <template slot="header">
            <!-- Table筛选 -->
            <TableFilter
              v-if="item.filter"
              ref="tableFilter"
              :type="item.filter.filterType"
              :header="item.name"
              :field="item.field"
              :item="item"
              @onFilter="filterHandler"
              @onSort="sortHandler"
            />
          </template>
          <template slot-scope="{ row }">
            <!-- {{ formatRow(row,item) }} -->
            <!-- <el-link
            v-if="item.isLink"
            type="primary"
            :underline="false"
            @click.stop="linkHandler(row, item)"
            >{{ item.dictList ? DictArray.$(item.dictList).translate(row[item.field]) : row.format(item.field, item.format) }}</el-link>
          <span v-else>{{ item.dictList ? DictArray.$(item.dictList).translate(row[item.field]) : row.format(item.field, item.format) }}</span> -->
            <el-link
              v-if="item.isLink"
              type="primary"
              :underline="false"
              @click.stop="linkHandler(row, item)"
              >{{ formatRow(row, item) }}</el-link
            >
            <span v-else>{{ formatRow(row, item) }}</span>
          </template>
        </el-table-column>
        <!-- 操作列 -->
        <el-table-column
          v-if="itemActionConfig && itemActionConfig.length > 0"
          ref="itemAction"
          label="操作"
          align="center"
          :show-overflow-tooltip="true"
        >
          <template slot="header">
            <div class="setingClass">
              <span>操作</span>
              <i class="el-icon-setting ml10" @click="onShuttleFrame"></i>
            </div>
          </template>

          <template slot-scope="{ row }">
            <div>
              <el-link
                type="primary"
                :underline="false"
                @click.stop="
                  actionHandler(row, validActions(row, itemActionConfig)[0])
                "
                >{{ validActions(row, itemActionConfig)[0].name }}</el-link
              >
              <el-divider
                v-if="validActions(row, itemActionConfig).length > 1"
                direction="vertical"
              ></el-divider>
              <el-dropdown
                v-if="validActions(row, itemActionConfig).length > 1"
                @command="actionCommand(row, $event)"
              >
                <span class="el-dropdown-link">
                  <el-link type="primary" :underline="false"
                    >更多<i class="el-icon-arrow-down el-icon--right"></i
                  ></el-link>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="action in validActions(row, itemActionConfig).slice(
                      1
                    )"
                    :key="action.type"
                    :disabled="action.disabled"
                    :command="action"
                  >
                    <el-upload
                      v-if="action.upload"
                      ref="fieldUpload"
                      class="upload-demo mr10 inline-block"
                      :headers="uploadHeaders"
                      :action="action.upload(row).action"
                      :data="action.upload(row).data"
                      :auto-upload="true"
                      :show-file-list="false"
                      :on-change="
                        (file, fileList) => {
                          importHandler(file, fileList, row);
                        }
                      "
                      :before-upload="
                        (file) => {
                          return beforeUpload(
                            file,
                            action.upload(row).fileType,
                            action.upload(row).fileSize
                          );
                        }
                      "
                      :on-success="uploadSuccess"
                      :on-error="uploadError"
                    >
                      <span>{{ action.name }}</span>
                    </el-upload>
                    <span v-else>{{ action.name }}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <div class="clearfix">
        <el-pagination
          class="fr mt10"
          :current-page="pages.currentPage"
          :page-sizes="[20, 50, 100]"
          :page-size="pages.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="pages.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
// Table拖拽使用SortableJS插件 官方文档地址：https://github.com/SortableJS/Sortable
import Sortable from "sortablejs";
import moment from "moment";
import TableFilter from "./tableFilter.vue";
import FilterTag from "./filterTag.vue";
import { DictArray, Query } from "@/models.v2/utils";
export default {
  name: "dynamicTable",
  props: [
    "columns",
    "itemActionConfig",
    "rows",
    "tools",
    "pages",
    "loading",
    "refresh",
    "summaryRecord",
    "actionConfig",
  ],
  components: {
    TableFilter,
    FilterTag,
  },
  data() {
    return {
      DictArray,
      input: "",
      filterTags: [],
      tagList: [],
      showSum: true,
      dynamicTableKey: 0,
      fixedBodyHeight: "",
      sortTags: [],
      selectionRows: [],
      contentHeight: "",
      // clientHeight: document.documentElement.clientHeight,
      uploadHeaders: {
        Authorization: `Bearer token`,
        // Authorization: `Bearer ${this.$keycloak.token}`,
        // userName: `${this.$keycloak.userName}`
      },
    };
  },
  // watch: {
  //   clientHeight(newValue, oldValue) {
  //     if (newValue) {
  //       this.getTitleHeight();
  //     }
  //   },
  // },
  async mounted() {
    console.log("筛选标签 ", this.filterTags);
    console.log("columns ", this.columns);
    console.log("rows ", this.rows, this.$refs.table);
    this.tagList = [];
    // window.onresize = () => {
    //   this.clientHeight = document.documentElement.clientHeight;
    // };
    // this.getTitleHeight();
    // this.columns.filter(item => item.dictList).forEach(item => {
    //   item.dictList.loadOnce();
    // });

    // this.rowDrop(); // 行拖拽
    // this.columnDrop(); // 列拖拽
  },
  methods: {
    // getTitleHeight() {
    //   setTimeout(() => {
    //     this.contentHeight = '';
    //     this.contentHeight = document.getElementsByClassName('el-table__header-wrapper')[0].clientHeight;
    //     if ((this.contentHeight, document.getElementsByClassName('el-table__fixed-body-wrapper')[0])) {
    //       document.getElementsByClassName('el-table__fixed-body-wrapper')[0].setAttribute('id', 'fixedBodyHeight');
    //       document.getElementById('fixedBodyHeight').style.top = this.contentHeight + 'px';
    //     }
    //   }, 1200);
    // },
    formatRow(row, item) {
      // row.data.forEach(item => {

      // })
      // // if (!item.dictList) return format.call(row,item.field, item.format)
      // // if (!item.dictList.translate) return row.format(item.field, item.format);
      if (item.dictList instanceof Array) {
        let res = item.dictList.find((val) => val.index == row[item.field]);
        return res.name;
      } else {
        return row[item.field];
      }

      // let result = item.dictList.translate(row[item.field], item.key || 'index', item.valueKey || 'name');
      // if (item.onRender && item.onRender instanceof Function) {
      //   result = item.onRender(row, result);
      // }
      // let result = item.dictList.translate(row[item.field], item.key || 'key', item.valueKey || 'value');
      // return row[item.field];
      // return row[item.field];
    },
    validActions(row, itemActions) {
      let actions = itemActions;
      actions = actions
        .filter((action) => !action.disabled)
        .filter(
          (action) => action.isShow == null || action.isShow(row) == true
        );
      if (actions && actions.length == 0) actions = [{}];
      return actions || [{}];
    },
    translate(list, value, key, valueKey) {
      // 字典值转换
      key = key || this.key || "index";
      valueKey = valueKey || this.valueKey || "name";
      let result = list.find((item) => item[key] == value);
      return result && result !== undefined ? result[valueKey] : value;
    },
    forceRender() {
      this.dynamicTableKey = this.dynamicTableKey + 1;
      this.$refs.tableFilter.forEach((filter) => filter.copyTo(filter.item));
      this.$nextTick(() => {
        let selectedIds = this.selectionRows.map((item, index) => item.id);
        this.rows.forEach(
          (row) => (row.isSelected = selectedIds.includes(row.id))
        );
        this.rows
          .filter((row) => row.isSelected === true)
          .forEach((row) => this.$refs.table.toggleRowSelection(row, true));
        this.$refs.tableFilter.forEach((filter) =>
          filter.copyFrom(filter.item)
        );
      });
    },
    getSummaries(params) {
      let sums = [];
      const { columns, data } = params;
      console.log('idwa',columns)
      sums = columns.map((col, index) => {
        if (index === 0) return "合计";
        return this.summaryRecord ? this.summaryRecord[col.property] : ""; // 为什么这样区 是因为 金额 和 数量有值 其他都是 undefined 所以这样取
      });
      return sums;
    },
    // 行拖拽
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.rows.splice(oldIndex, 1)[0];
          _this.rows.splice(newIndex, 0, currRow);
        },
      });
    },
    // 列拖拽
    columnDrop(item) {
      var _this = this;
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        draggable: ".allowDrag", // 允许拖拽元素（el-table-column上设置class-name为允许拖拽）
        animation: 180,
        // delay: 0,
        onUpdate({ newIndex, oldIndex }) {
          oldIndex = oldIndex - 1;
          newIndex = newIndex - 1;
          const currColumn = _this.columns[oldIndex];
          const leftColumn = _this.columns.slice(0, oldIndex);
          const rightColumn = _this.columns.slice(oldIndex + 1);
          let _columns = [...leftColumn, ...rightColumn];
          const new_leftColumn = _columns.slice(0, newIndex);
          const new_rightColumn = _columns.slice(newIndex);
          let columns = [...new_leftColumn, currColumn, ...new_rightColumn];
          _this.$emit("columnChange", columns);
        },
      });
    },
    selectionChange(val) {
      // 多选
      console.log("dy多选", val);
      this._selectionRows = this._selectionRows || [];
      this._selectionRows[this.pages.currentPage] = val;
      this.selectionRows = this._selectionRows.reduce(
        (r, row) => r.concat(row),
        []
      );
      // this.selectionRows = DictArray.$(this.selectionRows).uniqBy('uuid');
      // this.selectionRows.forEach((row, index) => {
      //   if (!row.id) row.id = this.pages.currentPage * index;
      // });
      this.rows.forEach((row, index) => {
        if (!row.id) row.id = this.pages.currentPage * index;
      });
      this.$emit("onSelection", this.selectionRows);
    },
    cellClick(row, column, cell, event) {
      // 单击单元格
      if (column.type !== "selection") return;
      row.isSelected = row.isSelected ? !row.isSelected : true;
      this.$refs.table.toggleRowSelection(row, row.isSelected);
    },
    // rowClick(row) {
    //   // 单击行
    //   row.isSelected = row.isSelected ? !row.isSelected : true;
    //   this.$refs.table.toggleRowSelection(row, row.isSelected);
    // },
    rowDblClick(row) {
      this.$emit("onRowDblClick", row);
    },
    toolHandler(tool) {
      console.log("工具栏操作 ", tool);
      this.$emit("onTool", tool, this.selectionRows);
    },
    toolCloseHandler() {
      this.selectionRows = [];
      this.$refs.table.clearSelection();
    },
    cellStyleHandler({ rowIndex }) {
      // 修改表头样式
      if (rowIndex === 0) return "color: #303133;";
    },
    actionCommand(item, command) {
      // 更多
      this.actionHandler(item, command);
    },
    actionHandler(item, action) {
      // 操作
      this.$emit("onAction", item, action);
    },
    linkHandler(item, field) {
      // 跳转
      this.$emit("onLink", item, field);
    },
    onShuttleFrame() {
      // 穿梭框
      this.$emit("onShuttleFrame");
      alert("穿梭狂");
    },
    // Filter
    filterHandler(filter) {
      // 筛选
      console.log("动态表格筛选 ", filter, this.$refs.tableFilter);
      this.filterTags = this.$refs.tableFilter
        .filter((filter) => filter.keyword)
        .map((filter) => {
          return {
            filterType: filter.type,
            field: filter.field,
            keyword: filter.keyword,
            filterName: filter.header,
          };
        });
      this.tagList.push(filter);
      console.log("---this.tagList---", this.tagList);
      this.filterTags = this.arrayUnique(this.tagList, "field");
      console.log("---this.filterTags---", this.filterTags);
      this.$emit("onFilter", filter);
      //      this.toFilters();
      // this.refresh ? this.refresh(1) : "";
    },
    arrayUnique(arr, key = "field") {
      // 去重过滤id相同数据采用最后更新的数据
      var hash = {};
      return arr.reduce(function (cur, next) {
        if (!hash[next[key]]) {
          hash[next[key]] = true;
          cur.push(next);
        } else {
          cur = cur.map((v) => {
            if (v[key] === next[key]) {
              return {
                ...next,
              };
            } else {
              return v;
            }
          });
        }
        return cur;
      }, []);
    },
    sortHandler(filter) {
      // 排序 orderOpr
      console.log("动态表格排序 ", filter, this.$refs.tableFilter);
      this.sortTags = this.$refs.tableFilter
        .filter((filter) => filter.orderOpr)
        .map((filter) => {
          return {
            orderOpr: filter.orderOpr,
            field: filter.field,
            name: filter.header,
          };
        });
      this.$emit("onSort", filter);
      // this.refresh ? this.refresh(1) : "";
    },
    clearFilter(filters, isRefresh = true) {
      // 清空筛选项
      this.filterTags = [];
      Object.keys(filters).forEach((item, index) => {
        this.$refs.tableFilter[index] && this.$refs.tableFilter[index].reset();
      });
      this.refresh && isRefresh == true ? this.refresh(1) : "";
    },
    // FilterTag
    removeTagHandler(filterTag) {
      // 移除筛选标签
      console.log("--filterTag---", filterTag, this.filterTags, this.tagList);
      let tableFilter = this.$refs.tableFilter.find(
        (_filter) => _filter.item.field == filterTag.field
      );
      if (tableFilter) tableFilter.reset();
      this.filterTags =
        this.filterTags.length &&
        this.filterTags.filter((item) => item.field !== filterTag.field);
      this.tagList = this.filterTags;
      this.$emit("onRemoveTag", filterTag, tableFilter);
      this.refresh ? this.refresh(1) : "";
    },
    removeSortTagHandler(tag) {
      // 移除排序标签
      console.log("移除排序标签 ", tag);
      this.$refs.tableFilter.forEach((item) => {
        if (item.field === tag.field) {
          item.orderOpr = "";
        }
      });
      this.sortTags =
        this.sortTags.length &&
        this.sortTags.filter((item) => item.field !== tag.field);
      // let index = this.columns.filter(item => item.filter).findIndex(item => item.field === filter.field);
      // this.$refs.tableFilter[index] && this.$refs.tableFilter[index].resetItem();
      // this.sortTags = this.sortTags.length && this.sortTags.filter(item => item.field !== filter.field);
      this.$emit("onRemoveSortTag", tag);
      this.refresh ? this.refresh(1) : "";
    },
    // 分页器
    handleSizeChange(val) {
      this.pages.currentPage = 1;
      this.$emit("onSizeChange", val);
      // this.refresh ? this.refresh() : "";
    },
    handleCurrentChange(val) {
      this.$emit("onCurrentChange", val);
      // this.refresh ? this.refresh() : "";
    },
    // query orderBy
    toQuery() {
      let q = new Query();
      this.$refs.tableFilter.forEach((filter) => {
        let column = this.columns.find(
          (column) => column.field == filter.field && column.isShow == true
        );
        let value = filter.keyword;
        if (column.fieldType == "String") {
          if (column.filter.filterType == "select") {
            value =
              value instanceof Array && value.length
                ? value.map((element) => element.toString())
                : [];
          } else {
            value = value ? value.toString() : "";
          }
        }
        if (column.fieldType == "Boolean") {
          if (column.filter.filterType == "select") {
            value =
              value instanceof Array && value.length
                ? value.map((element) => Boolean(element))
                : [];
          } else {
            value = value === "" || value === null ? "" : Boolean(value);
          }
        }
        // if (column.fieldType == 'BigDecimal' || column.fieldType == 'Integer' || column.fieldType == 'Long') value = value ? Number(value) : '';
        if (column.fieldType == "BigDecimal" || column.fieldType == "Long") {
          if (column.filter.filterType == "select") {
            value =
              value instanceof Array && value.length
                ? value.map((element) => Number(element))
                : [];
          } else {
            value = value ? Number(value) : "";
          }
        }
        if (column.fieldType == "Integer" && filter.keyword) {
          if (column.filter.filterType == "select") {
            value =
              value instanceof Array && value.length
                ? value.map((element) => Number(element))
                : [];
          } else {
            value = value ? Number(value) : 0;
          }
        }
        if (
          column.filter.opr == "between" &&
          (filter.keywordFrom || filter.keywordTo)
        )
          value = [
            Number(filter.keywordFrom) || 0,
            Number(filter.keywordTo) || 0,
          ];
        if (column.filter.opr == "between" && !(value instanceof Array))
          value = null;
        q[column.filter.opr](column.field, value);
      });
      let result = q
        .toArray()
        .map((query) => {
          return query.value instanceof Array
            ? query.value.length > 0
              ? query
              : null
            : query;
        })
        .filter(
          (query) =>
            query && (query.value || query.value === 0 || query.value === false)
        );
      return result;
    },
    toOrderBy() {
      return this.$refs.tableFilter
        .filter((filter) => filter.orderOpr)
        .map((filter) => {
          return {
            orderBy: filter.field,
            orderOpr: filter.orderOpr,
          };
        });
    },
    // 上传
    beforeUpload(file, fileType, fileSize) {
      let flag = null;
      this.$emit("onUploadBefore", file, fileType, fileSize, (status) => {
        flag = status;
      });
      return flag;
    },
    async uploadSuccess(message) {
      this.$emit("onUploadSuccess", message);
    },
    uploadError(message) {
      this.$emit("onUploadError", message);
    },
    async importHandler(file, fileList, row) {
      this.$emit("onImportChange", file, fileList, row);
    },
    //解决过滤/排序序列化和反序列号
    toFilters() {
      let filters = this.$refs.tableFilter
        .filter(
          (filter) =>
            filter.keyword != "" ||
            filter.keywordFrom != "" ||
            filter.orderOpr != ""
        )
        .map((filter) => filter.copyTo({}));
      //    this.fromFilters(filters)
      return filters;
    },

    fromFilters(configs, callback, isRefresh = true) {
      this.clearFilter(this.columns, false);
      this.$refs.tableFilter.forEach((filter) => {
        let config = configs.find((_filter) => _filter.field == filter.field);
        if (config) filter.copyFrom(config);
      });
      this.filterTags = this.$refs.tableFilter
        .filter((filter) => filter.keyword)
        .map((filter) => filter.toFilterTag());
      this.sortTags = this.$refs.tableFilter
        .filter((filter) => filter.orderOpr)
        .map((filter) => filter.toSortTag());
      if (callback) callback(this);
      this.refresh && isRefresh == true ? this.refresh(1) : "";
    },

    createHandler() {},
    menuCommand(item) {
      console.log('ids',item)
      this.$emit('menuCommand', item)
    },
    batchImportHandler() {},
  },
};
</script>

<style lang="scss" scoped>
.el-table__fixed-right {
  height: 100% !important;
}

.dynamic-table {
  position: relative;
  // height: calc(100% - 84px);
  .table-wrap {
    margin-top: 42px;
    .el-dropdown {
      .el-dropdown-link {
        font-size: 12px;
        cursor: pointer;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
  .filter-tag {
    position: absolute;
    top: -40px;
  }
}

.tool-wrap {
  position: absolute;
  top: -42px;
  width: 100%;
  background-color: #fff;
  line-height: 32px;
  z-index: 3;
  // box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  .count {
    vertical-align: middle;
    font-size: 12px;
    color: #667b8f;
  }
  .close-btn {
    width: 20px;
    height: 100%;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    i {
      vertical-align: middle;
      font-size: 16px;
      font-weight: bold;
      color: #c9c9c9;
    }
  }
}

.rightBth {
  position: absolute;
  right: 0;
  top: -39 !important;
  z-index: 20;
  margin: -40px 20px;
}
.clearfix {
  float: right;
  margin: 10px;
}
</style>
<style>
::v-deep .el-popover .el-popper {
  display: none !important;
}
</style>
