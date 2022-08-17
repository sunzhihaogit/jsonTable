/* eslint-disable vue/name-property-casing */
<script>
import IndexVue from './Index.vue';
//import {toolConfig} from './config.ext.js';
export default {
  extends:IndexVue,
  name: 'ExtDOEdit',
  components: { },
  data() {
    return { };
  },
  async mounted() {
    console.log("这是非标准扩展页");
  },
  created(){},
  methods: {},
  render(h) {
    this.$slots.dialog = [  ];
    return IndexVue.render.call(this, h);
  }  
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
::v-deep .el-dialog__wrapper {
  .el-dialog {
    .el-dialog__body {
      // padding: 0;
      > .app-container {
        padding: 0;
        position: relative !important;
      }
    }
  }
}
</style>
