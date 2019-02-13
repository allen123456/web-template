<template>
  <div>
    <zv-nav-bar title="标签"></zv-nav-bar>
    <zv-tabs>
      <zv-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
        {{ index }}
        <zv-tab-bar></zv-tab-bar>
      </zv-tab>
    </zv-tabs>
  </div>
</template>

<script>
import ZvTab from '../../components/zv-tab/index'
import ZvTabs from '../../components/zv-tabs/index'
import ZvNavBar from '../../components/zv-nav-bar/index'
import ZvTabBar from '../../components/zv-tab-bar/index'
export default {
  name: 'Tab',
  components: { ZvTabBar, ZvNavBar, ZvTabs, ZvTab },
  data() {
    return {
      active: '0'
    }
  }
}
</script>

<style scoped></style>
