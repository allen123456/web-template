<template>
  <div>
    <zv-nav-bar title="上传"></zv-nav-bar>

    <h4>内容上传</h4>

    <zv-uploader></zv-uploader>
  </div>
</template>

<script>
import ZvUploader from '../../components/zv-uploader/index'
import ZvNavBar from '../../components/zv-nav-bar/index'
export default {
  name: 'Uploader',
  components: { ZvNavBar, ZvUploader }
}
</script>

<style scoped></style>
