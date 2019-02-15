<template>
  <div class="zv-tabs">
    <van-tabs ref="zv-tabs" v-model="currentValue" swipeable :line-width="20" :line-height="2">
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
    color: #8b8b8b;
  }
  .van-tab--active {
    color: $zv-212121;
    font-weight: normal;
  }
  .van-tabs__line {
    background-color: $baseColor;
  }
}
</style>
