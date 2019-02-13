<template>
  <div class="zv-uploader">
    <van-uploader :after-read="onRead" class="uploader">
      <van-icon name="plus" />
    </van-uploader>
  </div>
</template>

<script>
export default {
  name: 'ZvUploader',
  methods: {
    onRead(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-uploader {
  .van-icon {
    font-size: 28px;
    width: 58px;
    color: #c7c7c7;
    line-height: 58px;
    text-align: center;
    border: 1px solid #f5f5f5;
  }
}
</style>
