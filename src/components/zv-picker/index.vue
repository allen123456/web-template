<template>
  <zv-pop-up v-model="currentValue" position="bottom">
    <van-picker
      show-toolbar
      :title="title"
      :columns="columns"
      @cancel="handleCancel"
      @confirm="handleConfirm"
      @change="handleChange"
    />
  </zv-pop-up>
</template>

<script>
import ZvModel from 'mixins/zv-model'
import ZvPopUp from '../zv-popup/index'
export default {
  name: 'ZvPicker',
  mixins: [ZvModel],
  components: { ZvPopUp },
  props: {
    title: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleCancel() {
      this.$emit('handleCancel')
    },
    handleConfirm(value, index) {
      this.$emit('handleConfirm', { value, index })
    },
    handleChange(picker, value, index) {
      this.$emit('handleChange', { picker, value, index })
    }
  }
}
</script>

<style scoped></style>
