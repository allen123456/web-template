<template>
  <div class="home">
    <zv-nav-bar :leftArrow="false" title="基本组件"></zv-nav-bar>

    <div>
      <zv-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :is-link="item.isLink"
        :url="item.url"
      ></zv-cell>
    </div>
  </div>
</template>

<script>
import ZvNavBar from '../components/zv-nav-bar/index'
import ZvCell from '../components/zv-cell/index'

export default {
  name: 'home',
  components: { ZvCell, ZvNavBar },
  data() {
    return {
      list: [
        { title: '按钮', isLink: true, url: 'button' },
        { title: '标签', isLink: true, url: 'tab' },
        { title: '表单', isLink: true, url: 'form' },
        { title: '上传', isLink: true, url: 'uploader' },
        { title: 'Dialog', isLink: true, url: 'dialog' },
        { title: 'Toast', isLink: true, url: 'toast' },
        { title: 'Picker', isLink: true, url: 'picker' },
        { title: 'Popup', isLink: true, url: 'popup' },
        { title: '列表', isLink: true, url: 'list' },
        { title: '搜索', isLink: true, url: 'search' }
      ]
    }
  }
}
</script>
