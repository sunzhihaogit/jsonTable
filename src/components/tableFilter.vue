<template>
  <div class="filter">
    <el-popover v-model="visible">
      <div class="sort-cont" @click="sortHandle('asc')">
        <i class="el-icon-sort-up" /> 升序
      </div>
      <div class="sort-cont" @click="sortHandle('desc')">
        <i class="el-icon-sort-down" /> 降序
      </div>
      <hr>
      <div class="sort-cont cursor-normal">
        <i class="el-icon-s-operation" /> 筛选
      </div>
      <div class="filter-wrap">
        <!-- input 搜索 -->
        <div v-if="type === 'input'" class="main-cont">
          <el-input
            class="input-style"
            type="text"
            size="mini"
            placeholder="请输入"
            v-model.trim="keyword"
            @keyup.enter.native="confirmHandle" />
        </div>
        <!-- select 下拉框 -->
        <div v-if="type === 'select'" class="main-cont">
          <el-select
            v-model.trim="keyword"
            size="small"
            placeholder="请选择"
            filterable
            multiple
            @change="selectChange">
            <el-option
              v-for="item in dictList"
              :key="item.name"
              :label="item.name"
              :value="item.index" />
          </el-select>
        </div>
        <!-- checkBox 多选 -->
        <div v-if="type === 'checkbox'">
          <el-checkbox v-if="dictList.length > 0" :indeterminate="isIndeterminate" v-model="checkAll" @change="checkAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkedList" @change="checkedChange">
            <el-checkbox v-for="item in dictList" :label="item" :key="item.index">{{ item.name }}</el-checkbox>
            <!-- <el-checkbox v-for="select in dictList" :label="select" :key="select.selectId">{{ select.selectName }}</el-checkbox> -->
          </el-checkbox-group>
        </div>
        <!-- fromTo 搜索 -->
        <div v-if="type === 'fromTo'" class="main-cont">
          <div class="from-to-cont">
            <div class="a-cont">从</div>
            <div class="a-cont">到</div>
          </div>
          <div class="from-to-cont">
            <div class="a-cont">
              <el-input v-model.trim="keywordFrom" @keyup.enter.native="confirmHandle" size="mini" type="text"/>
            </div>
            <div class="a-cont">
              <el-input v-model.trim="keywordTo" @keyup.enter.native="confirmHandle" size="mini" type="text"/>
            </div>
          </div>
        </div>
        <!-- 日期选择器 -->
        <div v-if="type === 'datePicker'" class="main-cont">
          <el-date-picker
            v-model="keyword"
            type="datetimerange"
            size="small"
            align="right"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
            @change="dateRangeChange">
          </el-date-picker>
        </div>
      </div>

      <slot class="main-cont" />
      <div class="btn-cont">
        <el-button size="mini" @click="cancelHandle">取消</el-button>
        <el-button type="primary" size="mini" @click="confirmHandle">确定</el-button>
      </div>
      <div class="table-header-cont" slot="reference" :style="{ 'justify-content': justifyContent }">
        <slot name="header">{{ header }}</slot>
        <i class="el-icon-arrow-down" style="padding-left: 3px" />
      </div>
    </el-popover>
  </div>
</template>

<script>
import moment from 'moment';
import { DictArray } from '@/models.v2/utils';
export default {
  name: 'tableFilter',
  props: {
    justifyContent: {
      type: String,
      default: 'center',  // 表头居中
      // default: 'flex-start'
    },
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    header: {
      type: String,
      default: ''
    },
    type: { // 筛选类型
      type: String,
      default: 'input',
      required: true
    },
    field: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      keyword: '',
      keywordFrom: '',
      keywordTo: '',
      dictList:[],
      visible: false,
      inputVal: '',
      selectVal: '',
      selectValName: [],
      // selectValName:'',
      dateVal: '',
      checkAll: false,
      checkedList: [],
      isIndeterminate: false,
      inputFrom: '',
      inputTo: '',
      orderOpr: ''
    }
  },
  async mounted() {
    this.resetItem() // 初始化的时候重制表单的数据
    if (this.item.dictList) {
      if (this.item.dictList instanceof DictArray) {
        await this.item.dictList.loadOnce();
      }
      this.dictList = this.item.dictList.data;
    }
  },
  methods: {
    copyTo(data){
      data.tableFilter = {}
      data.tableFilter.keyword=this.keyword,
      data.tableFilter.keywordFrom=this.keywordFrom,
      data.tableFilter.keywordTo=this.keywordTo,
      data.tableFilter.dictList=this.dictList,
      data.tableFilter.visible=this.visible,
      data.tableFilter.inputVal=this.inputVal,
      data.tableFilter.selectVal=this.selectVal,
      data.tableFilter.selectValName=this.selectValName,
      data.tableFilter.dateVal=this.dateVal,
      data.tableFilter.checkAll=this.checkAll,
      data.tableFilter.checkedList=this.checkedList,
      data.tableFilter.isIndeterminate=this.isIndeterminate,
      data.tableFilter.inputFrom=this.inputFrom,
      data.tableFilter.inputTo=this.inputTo,
      data.tableFilter.orderOpr=this.orderOpr
      data.field=this.field
      return data
    },
    copyFrom(data){
      if(!data.tableFilter) return
      this.keyword=data.tableFilter.keyword,
      this.keywordFrom=data.tableFilter.keywordFrom,
      this.keywordTo=data.tableFilter.keywordTo,
      this.dictList=data.tableFilter.dictList,
      this.visible=data.tableFilter.visible,
      this.inputVal=data.tableFilter.inputVal,
      this.selectVal=data.tableFilter.selectVal,
      this.selectValName=data.tableFilter.selectValName,
      this.dateVal=data.tableFilter.dateVal,
      this.checkAll=data.tableFilter.checkAll,
      this.checkedList=data.tableFilter.checkedList,
      this.isIndeterminate=data.tableFilter.isIndeterminate,
      this.inputFrom=data.tableFilter.inputFrom,
      this.inputTo=data.tableFilter.inputTo,
      this.orderOpr=data.tableFilter.orderOpr
    },
    toFilterTag(){
      return {
          filterType: this.type,
          field: this.field,
          keyword: this.keyword,
          keywordName:this.selectValName,
          filterName: this.header,
        };
    },
    toSortTag(){
      return {
            orderOpr: this.orderOpr,
            field: this.field,
            name: this.header,
      };
    },
    cancelHandle() {
      this.visible = false;
    },
    // 筛选确认
    confirmHandle() {
      console.log('D日期筛选', this.type, this.field, this.keyword, this.header);
      let data = { filterType: this.type, field: this.field, keyword: this.keyword, filterName: this.header };
      switch (this.type) {
        // case 'input':
        // case 'datePicker':
        //   this.$emit('onFilter', { filterType: this.type, field: this.field, keyword: [ moment(this.keyword[0]).format('YYYY-MM-DD HH:mm:ss'), moment(this.keyword[1] + 86400000).format('YYYY-MM-DD HH:mm:ss') ], filterName: this.header });
        //   break;
        case 'fromTo':
          if (this.keywordTo === '' || this.keywordTo === null) this.keywordTo = 99999;
          // (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(this.keywordFrom) && !/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(this.keywordTo)) ?
          (!/^(\-|\+)?\d+(\.\d+)?$/.test(this.keywordFrom) && !/^(\-|\+)?\d+(\.\d+)?$/.test(this.keywordTo)) ?
            this.$message({
              type: 'info',
              message: '请输入数字！'
            }) : this.$emit('onFilter', { filterType: this.type, field: this.field, keyword: [Number(this.keywordFrom), Number(this.keywordTo)], filterName: this.header });
          break;
        case 'select':
          this.$emit('onFilter', { ...data, keywordName: this.selectValName });
          break;
        case 'checkbox':
          this.$emit('onFilter', { filterType: this.type, field: this.field, keyword: this.checkedList, filterName: this.header, checkedAll: this.checkAll });
          break;
        default:
          this.$emit('onFilter', data);
          break;
      }
      this.cancelHandle();
    },
    // 排序 0升 1降
    sortHandle(orderOpr) {
      this.orderOpr = orderOpr;
      this.$emit('onSort', { orderOpr: orderOpr, field: this.field, name: this.header });
      // this.$emit('onSort', { sortBy: sortBy, field: this.field, filterName: this.header });
      this.cancelHandle();
    },
    checkAllChange(val) {
      this.checkAll = val;
      this.isIndeterminate = false;
      this.checkedList = val ? (() => {
        const selects = [];
        this.dictList.map(item => {
          selects.push(item);
        });
        return selects;
      })() : [];
    },
    checkedChange(value) {
      // 复选框更新
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.dictList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.dictList.length;
    },
    selectChange(val) {
      // 下拉选项更新
      this.selectValName = val.map(item => {
        let dictItem = this.dictList.find(dict => dict.index == item);
        return dictItem && dictItem.name;
      });
      // var newArray = {};
      // newArray=this.dictList.find((item) => {
      //   if(item.index === val){
      //     return item
      //   }
      // })
      // this.selectValName=newArray.name;
    },
    dateRangeChange(val) {
      // let utcDate = [moment(val[0]).utcOffset(0).utc().format(), moment(val[1]).utcOffset(0).utc().format()]; // -8h
      let utcDate = [moment.utc(val[0]).format(), moment.utc(val[1]).format()];
      this.keyword = utcDate;
      this.$emit('onFilter', { filterType: this.type, field: this.field, keyword: this.keyword, filterName: this.header });
      this.cancelHandle();
    },
    reset() {
      // 重置筛选数据
      this.keywordFrom = this.keywordTo = '';
      this.keyword = null;
      this.checkAll = false;
      this.checkedList = [];
    },
    resetItem() {
      // 重置单个筛选数据
      switch (this.type) {
        case 'datePicker':
          this.keyword = [];
          break;
        case 'checkbox':
          this.checkAll = false;
          this.checkedList = [];
          break;
        case 'fromTo':
          this.keywordFrom = this.keywordTo = '';
          break;
        default:
          this.keyword = '';
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cell > div {
    height: 100%;
    display: block;
  }
  .sort-cont {
    display: flex;
    align-items: center;
    height: 25px;
    cursor: pointer;
    .icon-img {
      margin: 0 5px;
      height: 16px;
      width: 16px;
    }
  }
  .cursor-normal {
    cursor: default;
  }
  .table-header-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .down-circle {
      margin-left: 5px;
      height: 16px;
      width: 16px;
    }
  }
  .main-cont {
    // padding: 5px;
    .input-style {
      margin: 5px 0;
    }
    .from-to-cont {
      display: flex;
      justify-content: space-between;
      .a-cont {
        width: 45%;
      }
    }
  }
  .btn-cont {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
  th div:focus {
    outline: 0;
  }
  >>> .el-checkbox__label {
    width: 135px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    vertical-align: top;
  }
  .el-input__inner {
    padding: 0 8px;
  }
</style>
