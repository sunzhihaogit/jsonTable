<template>
  <div class="filter-tag">
    <el-tag
      class="mr10"
      v-for="item in sortTags"
      :key="item.field"
      type="info"
      closable
      @close="removeSortTag(item)">
      {{ `${item.orderOpr == 'asc' ? '升序': '降序'}：${item.name}` }}
    </el-tag>
    <el-tag
      class="mr10"
      v-for="item in filterTags"
      :key="item.field"
      closable
      @close="removeTag(item)">
      {{ `${item.filterName}：${item.filterType == 'select' ? item.keywordName : item.keyword}` }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'filterTag',
  props: {
    filterTags: {
      type: Array,
      default() {}
    },
    sortTags: {
      type: Array,
      default() {}
    }
  },
  data() {
    return {}
  },
  methods: {
    // 关闭排序标签
    removeSortTag(tag) {
      this.$emit('onRemoveSortTag', tag);
    },
    // 关闭筛选标签
    removeTag(tag) {
      console.log('--removeTag-tag---',tag)
      this.$emit('onRemoveTag', tag);
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-tag {
    // height: 28px;
    white-space: normal;
    // >>> .el-tag {
    //   margin-right: 5px;
    //   margin-bottom: 2px;
    //   border-radius: 12px;
    //   height: 22px;
    //   line-height: 22px;
    // }
    // >>> .el-tag.el-tag--info {
    //   color: #283550;
    // }
    // >>> .el-tag .el-icon-close {
    //   font-size: 18px;
    //   height: 18px;
    //   width: 18px;
    // }
    // >>> .el-tag.el-tag--info .el-tag__close:hover {
    //   background-color: #17CAAA;
    // }
  }
  .mr10 {
    margin-right: 10px;
  }
</style>
