<template>
  <div class="zv-btn">
    <van-button :plain="plain" :type="type" :size="size" :disabled="disabled">
      <slot></slot>
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'ZvButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin btn-color($background-color: $baseColor, $border-color: $baseColor) {
  background-color: $background-color;
  border-color: $border-color;
  border-radius: 5px;
}

@mixin btn-size($width: 345px, $height: 44px, $font-size: 16px) {
  width: $width;
  height: $height;
  line-height: $height;
  .van-button__text {
    font-size: $font-size;
  }
}
.zv-btn {
  .van-button--primary {
    @include btn-color;
  }
  .van-button--default {
    @include btn-color(#fafafa, #e0e0e0);
  }
  .van-button--warning {
    @include btn-color(#e53935, #e53935);
  }

  .van-button--plain {
    background-color: #fff;
    &:active {
      &:before {
        opacity: 0;
      }
      background-color: #fff;
      opacity: 0.6;
      .van-button__text {
        opacity: 0.4;
      }
    }
  }
  .van-button--plain.van-button--primary {
    color: $baseColor;
  }
  .van-button--plain.van-button--default {
    border-color: #e0e0e0;
  }

  .van-button--large {
    @include btn-size;
  }
  .van-button--small {
    @include btn-size(60px, 32px, 14px);
    border-radius: 3px;
  }
  .van-button--normal {
    @include btn-size(180px, 36px);
  }

  .van-button--disabled {
    opacity: 0.6;
    .van-button__text {
      opacity: 0.4;
    }
  }
}
</style>
