<template>
  <van-cell :title="prop.title" :is-link="prop.isLink" :to="prop.url" />
</template>

<script>
export default {
  name: 'ZvCell',
  props: {
    prop: {
      type: Object,
      default() {
        return {
          title: ''
        }
      }
    }
  }
}
</script>

<style scoped></style>
