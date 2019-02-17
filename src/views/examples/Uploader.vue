<template>
  <div>
    <zv-nav-bar title="上传"></zv-nav-bar>

    <div class="header">
      <span>上传</span>

      <div class="btn-wrappar">
        <zv-uploader :images="images" />
      </div>
    </div>

    <div class="header">
      <span>展示</span>

      <div class="btn-wrappar">
        <zv-uploader :images="images" is-display />
      </div>
    </div>
  </div>
</template>

<script>
import ZvUploader from '../../components/zv-uploader/index'
export default {
  name: 'Uploader',
  components: { ZvUploader },
  data() {
    return {
      images: [
        '//img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        '//img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 10px;
  span {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    color: $zv-212121;
  }
  .btn-wrappar {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
  }
}
</style>
