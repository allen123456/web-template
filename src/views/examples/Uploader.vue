<template>
  <div class="zv-uploader">
    <zv-nav-bar title="上传"></zv-nav-bar>

    <example-wrapper title="上传">
      <zv-uploader :images="images" />
    </example-wrapper>

    <example-wrapper title="展示">
      <zv-uploader :images="images" is-display />
    </example-wrapper>
  </div>
</template>

<script>
import ZvUploader from '../../components/zv-uploader/index'
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'Uploader',
  components: { ExampleWrapper, ZvUploader },
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

<style lang="scss">
.zv-uploader {
  .example-wrapper {
    &__slot-wrapper {
      justify-content: flex-start;
    }
  }
}
</style>
