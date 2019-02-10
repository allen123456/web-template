<template>
  <van-nav-bar
    :title="prop.title"
    :left-text="prop.leftText"
    :right-text="prop.rightText"
    :left-arrow="prop.leftArrow"
    @click-left="prop.onClickLeft"
    @click-right="prop.onClickRight"
  />
</template>

<script>
export default {
  name: 'ZvNavBar',
  props: {
    prop: {
      type: Object,
      default() {
        return {
          title: '',
          leftText: '',
          rightText: '',
          leftArrow: false,
          onClickLeft: null,
          onClickRight: null
        }
      }
    }
  }
}
</script>

<style scoped></style>
