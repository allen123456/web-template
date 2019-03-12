<template>
  <div>
    <zv-nav-bar title="SVG图标集" />

    <div class="zv-svg">
      <div v-for="(item, index) in showSVG" :key="index" class="svg__wrapper">
        <zv-svg-icon :icon-class="item" />
        <div class="svg__title">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvgPage',
  computed: {
    showSVG() {
      const svgs = []
      const requireAll = requireContext =>
        requireContext.keys().map(requireContext => {
          svgs.push(requireContext.replace('./', '').replace('.svg', ''))
          return requireContext
        })
      const req = require.context('../../icons/svg', false, /\.svg$/)
      requireAll(req)
      return svgs
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-svg {
  @include flex;
  .svg__wrapper {
    margin: 10px;
    text-align: center;
    width: 15%;
    .svg__title {
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
