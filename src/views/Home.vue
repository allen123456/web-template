<template>
  <div class="home">
    <zv-nav-bar :leftArrow="false" title="基本组件"></zv-nav-bar>

    <zv-list>
      <zv-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :is-link="item.isLink"
        :url="item.url"
      ></zv-cell>
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
      list: [
        { title: '按钮', isLink: true, url: 'button' },
        { title: '标签', isLink: true, url: 'tab' },
        { title: '表单', isLink: true, url: 'form' },
        { title: '上传', isLink: true, url: 'uploader' },
        { title: '提示类', isLink: true, url: 'dialog' }
      ]
    }
  }
}
</script>
