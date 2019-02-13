<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    :left-arrow="leftArrow"
    @click-left="goBack"
    @click-right="prop.onClickRight"
  />
</template>

<script>
export default {
  name: 'ZvNavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    prop: {
      type: Object,
      default() {
        return {
          onClickLeft: null,
          onClickRight: null
        }
      }
    }
  },
  computed: {
    // 如果属性值中定义了leftArrow=true且未定义了左侧按钮方法，使用默认方法
    goBack() {
      if (this.leftArrow && this.prop) {
        if (typeof this.prop.onClickLeft !== 'function') {
          return this.onClickLeft
        } else {
          return this.prop.onClickLeft
        }
      }
      return null
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.van-nav-bar {
  background-color: $navBarBg;
  .van-icon {
    color: $navBarTitle;
  }
}
.van-nav-bar__title {
  color: $navBarTitle;
}
.van-nav-bar__text {
  color: $navBarTitle;
}
</style>
