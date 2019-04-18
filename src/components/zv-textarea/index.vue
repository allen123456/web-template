<template>
  <div class="zv-textarea">
    <div class="zv-textarea__header van-hairline--bottom">
      <span>{{ label }}</span>
      <van-icon v-if="rightIcon" name="info-o" />
    </div>
    <van-field
      v-model="currentValue"
      type="textarea"
      placeholder="请输入留言"
      rows="1"
      autosize
      :readonly="readonly"
    />
  </div>
</template>

<script>
import ZvModel from 'mixins/zv-model'
export default {
  name: 'ZvTextarea',
  mixins: [ZvModel],
  props: {
    label: {
      type: String,
      required: true
    },
    rightIcon: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-textarea {
  &__header {
    box-sizing: border-box;
    @include flex($justifyContent: space-between);
    height: 44px;
    margin: 0 15px;
    color: $base-font-color;
    span {
      font-size: 14px;
    }
    .van-icon {
      color: $baseColor;
    }
  }
  .van-hairline--bottom {
    &:after {
      border-color: $border-color;
    }
  }
}
</style>
