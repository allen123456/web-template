<template>
  <div class="zv-tabs">
    <van-tabs
      ref="zvTabs"
      v-model="currentValue"
      swipeable
      :line-width="20"
      :line-height="2"
    >
      <slot />
    </van-tabs>
  </div>
</template>

<script>
import ZvModel from 'mixins/zv-model'
export default {
  name: 'ZvTabs',
  mixins: [ZvModel]
}
</script>

<style lang="scss">
.zv-tabs {
  .van-tab {
    color: $sub-font-color;
  }
  .van-tab--active {
    color: $base-font-color;
    font-weight: normal;
  }
  .van-tabs__line {
    background-color: $baseColor;
  }
}
</style>
