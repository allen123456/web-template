<template>
  <div class="zv-uploader">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="zv-uploader__img-wrapper"
      @click="clickImg(index)"
    >
      <img v-lazy="img" width="100%" height="100%" />
      <div
        class="zv-uploader__delete"
        v-if="!isDisplay"
        @click.stop.prevent="handleRemove(index)"
      >
        <zv-svg-icon icon-class="jian" />
      </div>
    </div>
    <van-uploader v-if="!isDisplay" :after-read="onRead">
      <van-icon name="plus" />
    </van-uploader>
  </div>
</template>

<script>
import './lazyload'
import { ImagePreview } from 'vant'
export default {
  name: 'ZvUploader',
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    },
    isDisplay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      instance: null
    }
  },
  methods: {
    onRead(file) {
      this.images.push(file.content)
    },
    handleRemove(index) {
      this.images.splice(index, 1)
    },
    clickImg(index) {
      this.instance = ImagePreview({
        images: this.images,
        startPosition: index,
        showIndicators: true,
        asyncClose: true,
        onClose() {
          this.$emit('onCloseImagePreview')
        }
      })
    }
  },
  beforeDestroy() {
    this.instance && this.instance.close()
  }
}
</script>

<style lang="scss" scoped>
.zv-uploader {
  display: flex;
  flex-wrap: wrap;
  &__img-wrapper {
    width: 86px;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    .zv-uploader__delete {
      position: absolute;
      right: -3px;
      top: -3px;
      font-size: 20px;
    }
  }
  .van-icon {
    font-size: 28px;
    width: 86px;
    color: $minor-font-color;
    line-height: 86px;
    text-align: center;
    border: 1px solid #f5f5f5;
  }
}
</style>
