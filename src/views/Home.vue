<template>
  <div class="home">
    <div @click="handleClick">测试页</div>
    <router-link to="/about">about</router-link>
    <zv-svg-icon icon-class="loadings" />
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import * as api from '@/api/test'

export default {
  name: 'home',
  methods: {
    handleClick() {
      api.test(data => {
        alert(data)
      })
    }
  }
}
</script>
