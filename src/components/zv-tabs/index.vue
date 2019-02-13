<template>
  <div class="zv-tabs">
    <van-tabs ref="zv-tabs" v-model="active" swipeable :line-width="20" :line-height="2">
      <slot></slot>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'ZvTabs',
  props: {
    value: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      active: '0'
    }
  },
  mounted() {
    this.active = this.value
  }
}
</script>

<style lang="scss">
.zv-tabs {
  .van-tab {
    color: #8b8b8b;
    font-size: 16px;
  }
  .van-tab--active {
    color: #212121;
    font-weight: normal;
  }
  .van-tabs__line {
    background-color: $baseColor;
  }
}
</style>
