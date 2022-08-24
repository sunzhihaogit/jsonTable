<!--**
* 组件名称 JsonEditor.vue
* @desc 组件描述 json编辑器
* @author 组件作者 midsummer
* @date 2020/12/23 18:12:19 -创建时间
* @param {Object} [title]    - 参数说明
* @param {String} [columns] - 参数说明
* @example 调用示例
**-->
<template>
<div class="warp">
  <vue-json-editor
    v-model="json"
    :show-btns="false"
    :mode="mode"
    lang="zh"
    @json-change="onJsonChange"
    @json-save="onJsonSave"
    @has-error="onError"
  ></vue-json-editor>
</div>

</template>

<script>
import {actionConfig} from '../form/config'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import vueJsonEditor from "vue-json-editor";
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {
    vueJsonEditor,
  },
  props: {
    mode: String,
  },
  data() {
    //这里存放数据
    return {
      json:actionConfig
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    json: {
      handler(org) {
        this.modeJson = org;
      },
      deep: true,
      immediate: true,
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    onJsonChange(value) {
      this.modeJson = value;
      console.log("value:", value);
      console.log("value:", this.modeJson); 
    },
    onJsonSave(value) {
      console.log("value:", value);
      console.log("value:", this.modeJson);
      return this.modeJson;
    },
    onError(value) {
      console.log("value:", value);
    },
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  filters: {}, //过滤
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
::v-deep div.jsoneditor-menu a.jsoneditor-poweredBy,
::v-deep button.jsoneditor-modes.jsoneditor-separator {
  display: none;
}
.warp {
    padding: 20px;
}
</style>

