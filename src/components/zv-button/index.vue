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
@mixin btn-color($background-color: $baseColor, $border-color: $baseColor, $active-color: #9dbe35) {
  background-color: $background-color;
  border-color: $border-color;
  border-radius: 5px;
  &:active {
    &:before {
      opacity: 0;
    }
    background-color: $active-color;
    .van-button__text {
      opacity: 0.4;
    }
  }
}

@mixin btn-size($width: 345px, $height: 44px, $font-size: 18px) {
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
    @include btn-color(#fafafa, #e0e0e0, #eeeeee);
    color: #010101;
  }
  .van-button--warning {
    @include btn-color(#e53935, #e53935, #c62828);
  }

  .van-button--plain {
    background-color: #fff;
    &:active {
      background-color: #fff;
      opacity: 0.6;
      .van-button__text {
        opacity: 0.6;
      }
    }
  }
  .van-button--plain.van-button--primary {
    color: $baseColor;
    border-width: 1px;
  }
  .van-button--plain.van-button--default {
    border: 1px solid #000;
  }

  .van-button--plain.van-button--normal {
    &:active {
      opacity: 0.4;
    }
  }

  .van-button--large {
    @include btn-size;
  }
  .van-button--small {
    @include btn-size(60px, 30px, 13px);
    border-radius: 3px;
    &:active {
      opacity: 0.8;
    }
  }
  .van-button--normal {
    @include btn-size(180px, 35px, 16px);
  }

  .van-button--small.van-button--default {
    .van-button__text {
      color: #444;
    }
    &:active {
      opacity: 1;
      color: #828282;
    }
  }

  .van-button--small.van-button--plain {
    &:active {
      opacity: 0.6;
    }
  }

  .van-button--disabled {
    opacity: 0.6;
    .van-button__text {
      opacity: 0.4;
    }
  }
  .van-button--warning.van-button--disabled {
    opacity: 0.8;
    .van-button__text {
      opacity: 0.4;
    }
  }
  .van-button--plain.van-button--disabled {
    opacity: 0.2;
    .van-button__text {
      opacity: 0.2;
    }
  }
  .van-button--plain.van-button--disabled.van-button--primary {
    color: #010101;
    border-color: #000000;
  }
  .van-button--plain.van-button--disabled.van-button--primary.van-button--small {
    color: #000;
  }
}
</style>
