<template>
  <van-tab :title="title">
    <slot></slot>
  </van-tab>
</template>

<script>
export default {
  name: 'ZvTab',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
