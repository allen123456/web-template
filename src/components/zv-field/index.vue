<template>
  <van-field
    v-model="username"
    :required="required"
    clearable
    :label="label"
    :right-icon="rightIcon"
    :placeholder="placeholder"
    @click-right-icon="$toast('question')"
  />
</template>

<script>
export default {
  name: 'ZvField',
  props: {
    label: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: 'info-o'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      username: 'a'
    }
  }
}
</script>

<style lang="scss">
.van-cell__title {
  color: $zv-212121;
  font-size: 16px;
}
.van-field__right-icon {
  color: $baseColor;
}
</style>
