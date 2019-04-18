<template>
  <div class="no-more-data">
    <div class="no-more-data__wrapper" @click="handleClick">
      <zv-svg-icon
        :icon-class="iconClass"
        class="no-more-data__img"
      ></zv-svg-icon>
      <span class="no-more-data__title">{{ noMoreDataTitle }}</span>
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
      default: 'drag'
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
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .no-more-data__img {
      color: $sub-font-color;
      font-size: 66px;
    }
    .no-more-data__title {
      color: $sub-font-color;
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
