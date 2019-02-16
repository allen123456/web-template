<template>
  <div class="zv-uploader">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="img-wrappar"
      @click="clickImg(index)"
    >
      <img v-lazy="img" width="100%" height="100%" />
      <div
        class="delete-img"
        v-if="!isDisplay"
        @click.stop.prevent="handleRemove(index)"
      >
        <zv-svg-icon icon-class="jian" />
      </div>
    </div>
    <van-uploader v-if="!isDisplay" :after-read="onRead" class="uploader">
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
  methods: {
    onRead(file) {
      this.images.push(file.content)
    },
    handleRemove(index) {
      this.images.splice(index, 1)
    },
    clickImg(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        onClose() {
          // do something
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-uploader {
  display: flex;
  flex-wrap: wrap;
  .img-wrappar {
    width: 86px;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    .delete-img {
      position: absolute;
      right: -3px;
      top: -3px;
      font-size: 20px;
    }
  }
  .van-icon {
    font-size: 28px;
    width: 86px;
    color: $zv-c7c7c7;
    line-height: 86px;
    text-align: center;
    border: 1px solid #f5f5f5;
  }
}
</style>
