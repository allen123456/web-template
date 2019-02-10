<template>
  <div class="home">
    <zv-nav-bar :prop="navBarData"></zv-nav-bar>
    <zv-list>
      <zv-cell v-for="(item, index) in list" :key="index" :prop="item"></zv-cell>
    </zv-list>
  </div>
</template>

<script>
import ZvNavBar from '../components/zv-nav-bar/index'
import ZvList from '../components/zv-list/index'
import ZvCell from '../components/zv-cell/index'

export default {
  name: 'home',
  components: { ZvCell, ZvList, ZvNavBar },
  data() {
    return {
      navBarData: {
        title: '示例'
      },
      list: [{ title: '按钮', isLink: true, url: 'button' }]
    }
  }
}
</script>
