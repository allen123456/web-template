<template>
  <div>
    <zv-nav-bar title="按钮"></zv-nav-bar>

    <div>
      <div class="btn__wrapper">
        <zv-button type="primary" size="large">页面主操作按钮</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="primary" size="large" disabled>
          页面主操作按钮
        </zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button plain type="primary" size="large">页面主操作按钮</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button disabled plain type="primary" size="large">
          页面主操作按钮
        </zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="default" size="large">页面次操作按钮</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="default" size="large" disabled>
          页面次操作disabled
        </zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="warning" size="large">警告类操作按钮</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button disabled type="warning" size="large">
          警告类操作disabled
        </zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="primary">按钮</zv-button>
        <zv-button type="primary" disabled>按钮disabled</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button plain type="primary">按钮</zv-button>
        <zv-button plain type="primary" disabled>按钮disabled</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="default">按钮</zv-button>
        <zv-button type="default" disabled>按钮disabled</zv-button>
      </div>

      <div class="btn__wrapper">
        <zv-button type="primary" size="small">按钮</zv-button>
        <zv-button type="primary" size="small" disabled>按钮</zv-button>

        <zv-button type="default" size="small">按钮</zv-button>
        <zv-button type="default" size="small" disabled>按钮</zv-button>

        <zv-button plain type="primary" size="small">下载</zv-button>
        <zv-button plain type="primary" size="small" disabled>下载</zv-button>
      </div>
    </div>
  </div>
</template>

<script>
import ZvButton from '../../components/zv-button/index'
export default {
  name: 'Button',
  components: { ZvButton }
}
</script>

<style lang="scss" scoped>
.btn__wrapper {
  @include flex;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}
</style>
