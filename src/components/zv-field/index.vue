<template>
  <van-field
    class="zv-field"
    v-model="currentValue"
    :required="required"
    clearable
    :readonly="readonly"
    :type="type"
    :label="label"
    :right-icon="rightIcon"
    :placeholder="placeholder"
    :is-link="isLink"
    :input-align="inputAlign"
    :error-message="errorMessage"
    @click-right-icon="clickRightIcon"
    @blur="handleBlur"
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
    },
    isLink: {
      type: Boolean,
      default: false
    },
    inputAlign: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickRightIcon() {
      this.$emit('clickRightIcon')
    },
    handleBlur() {
      this.$emit('blur')
    }
  }
}
</script>

<style lang="scss">
.zv-field {
  .van-cell__title {
    color: $base-font-color;
  }
  .van-field__right-icon {
    color: $baseColor;
  }
}
</style>
