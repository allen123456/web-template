<template>
  <div class="no-more-data">
    <div class="wrappar" @click="handleClick">
      <zv-svg-icon :icon-class="iconClass" class="no-more-data-img"></zv-svg-icon>
      <span class="no-more-data-title">{{ noMoreDataTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoMoreData',
  props: {
    noMoreDataTitle: {
      type: String,
      default: '暂无数据'
    },
    iconClass: {
      type: String,
      default: 'kong'
    }
  },
  methods: {
    handleClick() {
      this.$emit('handleClick')
    }
  }
}
</script>

<style scoped lang="scss">
.no-more-data {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .wrappar {
    display: flex;
    flex-direction: column;
    align-items: center;
    .no-more-data-img {
      color: #333;
      font-size: 66px;
    }
    .no-more-data-title {
      color: #333;
      font-size: 12px;
    }
  }
}
</style>
