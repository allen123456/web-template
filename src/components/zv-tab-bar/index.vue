<template>
  <div class="zv-tab-bar">
    <van-tabbar v-model="currentValue" active-color="#aace39">
      <van-tabbar-item info="3">
        <span>自定义</span>
        <zv-svg-icon slot="icon" icon-class="drag" />
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import ZvModel from 'mixins/zv-model'
import ZvSvgIcon from '../zv-svg/index'
export default {
  name: 'ZvTabBar',
  mixins: [ZvModel],
  components: { ZvSvgIcon }
}
</script>

<style lang="scss"></style>
