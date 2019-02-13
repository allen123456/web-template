<template>
  <van-cell :title="title" :is-link="isLink" :to="url" />
</template>

<script>
export default {
  name: 'ZvCell',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped></style>
