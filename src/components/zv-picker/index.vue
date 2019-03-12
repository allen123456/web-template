<template>
  <div class="zv-picker">
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
  </div>
</template>

<script>
import ZvModel from '@/mixins/zv-model'
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
      this.currentValue = false
      this.$emit('cancel')
    },
    handleConfirm(value, index) {
      this.currentValue = false
      this.$emit('confirm', { value, index })
    },
    handleChange(picker, value, index) {
      this.$emit('change', { picker, value, index })
    }
  }
}
</script>

<style lang="scss">
.zv-picker {
  .van-picker__cancel {
    color: $zv-8b8b8b;
  }
  .van-picker__confirm {
    color: $baseColor;
  }
}
</style>
