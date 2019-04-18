<template>
  <div class="zv-button">
    <el-button :style="buttonStyle" :type="type">
      <slot />
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ZvButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonStyle() {
      if (this.size === 'large') {
        return {
          width: '360px',
          height: '44px'
        }
      } else if (this.size === '' && this.type !== 'text') {
        return {
          'min-width': '80px',
          height: '32px',
          'font-size': '12px'
        }
      }
      return {}
    }
  }
}
</script>

<style lang="scss">
.zv-button {
  line-height: 100%;
  .el-button--primary {
    background-color: $base-color;
    border-color: $base-color;
  }
  .el-button--text {
    color: $base-color;
    font-size: $base-font-size;
    border-bottom: 1px solid $base-color;
    padding: 0;
    border-radius: 0;
  }
}
</style>
