<template>
  <div class="nav-bar" :style="barStyle">
    <div class="nav-bar-left">
      <slot name="left" />
    </div>

    <div class="nav-bar__title">{{ title }}</div>

    <div class="nav-bar-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#3d5afe'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    barStyle() {
      const style = {
        'background-color': this.backgroundColor,
        color: this.textColor
      }
      if (
        this.backgroundColor === '#fff' ||
        this.backgroundColor === '#ffffff'
      ) {
        style['border-bottom'] = '1px solid #eeeeee'
        style.color = '#212121'
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  @include flex();
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  padding: 0 16px;
  font-size: $fontSize12;
}
</style>
