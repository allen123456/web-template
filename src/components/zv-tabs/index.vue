<template>
  <div class="zv-tabs">
    <el-tabs v-model="currentValue" @tab-click="handleClick">
      <slot />
    </el-tabs>
  </div>
</template>
<script>
import ZvModel from 'mixins/zv-model'
export default {
  name: 'ZvTabs',
  mixins: [ZvModel],
  methods: {
    handleClick(tab, event) {
      this.$emit('tabClick', { tab, event })
    }
  }
}
</script>

<style lang="scss">
.zv-tabs {
  .el-tabs__header {
    margin-bottom: 28px;
  }
  .el-tabs__item {
    @include containerH44($color: $zv-8b8b8b, $width: false);
  }
  .el-tabs__item.is-active {
    color: $zv-212121;
    font-size: $fontSize14;
  }
  .el-tabs__nav-wrap::after {
    background-color: $zv-eeeeee;
  }
  .el-tabs__active-bar {
    background-color: $base-color;
  }
}
</style>
