<template>
  <div>
    <zv-nav-bar title="列表" />

    <zv-list>
      <div v-for="item in 10" :key="item">{{ item }}</div>
    </zv-list>
  </div>
</template>

<script>
import ZvList from '../../components/zv-list/index'
import ZvNavBar from '../../components/zv-nav-bar/index'
export default {
  name: 'List',
  components: { ZvNavBar, ZvList }
}
</script>

<style scoped></style>
