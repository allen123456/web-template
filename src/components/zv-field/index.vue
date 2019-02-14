<template>
  <van-field
    v-model="currentValue"
    :required="required"
    clearable
    :readonly="readonly"
    :type="type"
    :label="label"
    :right-icon="rightIcon"
    :placeholder="placeholder"
    @click-right-icon="clickRightIcon"
  />
</template>

<script>
import ZvModel from 'mixins/zv-model'
export default {
  name: 'ZvField',
  mixins: [ZvModel],
  props: {
    label: {
      type: String,
      required: true
    },
    rightIcon: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickRightIcon() {
      this.$emit('clickRightIcon')
    }
  }
}
</script>

<style lang="scss">
.van-cell__title {
  color: $zv-212121;
}
.van-field__right-icon {
  color: $baseColor;
}
</style>
