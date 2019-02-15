<template>
  <div>
    <zv-nav-bar title="提示类"></zv-nav-bar>

    <zv-button type="primary">按钮</zv-button>
  </div>
</template>

<script>
import ZvButton from '../../components/zv-button/index'
import ZvNavBar from '../../components/zv-nav-bar/index'
export default {
  name: 'Dialog',
  components: { ZvNavBar, ZvButton }
}
</script>

<style scoped></style>
