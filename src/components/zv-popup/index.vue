<template>
  <van-popup v-model="currentValue" :position="position">
    <slot />
  </van-popup>
</template>

<script>
import ZvModel from '@/mixins/zv-model'
export default {
  name: 'ZvPopUp',
  mixins: [ZvModel],
  props: {
    position: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
