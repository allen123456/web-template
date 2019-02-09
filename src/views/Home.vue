<template>
  <div class="home">
    <div @click="handleClick">adfasdf</div>
    <router-link to="/about">about</router-link>
    <zv-svg-icon icon-class="loading" />
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
