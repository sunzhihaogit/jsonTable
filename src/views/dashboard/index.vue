<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <h2>欢迎来到JSON表格,CSDN有两把刷子</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
