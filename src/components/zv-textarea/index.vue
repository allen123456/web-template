<template>
  <div class="zv-textarea">
    <div class="header van-hairline--bottom">
      <span>输入标题</span>
      <van-icon name="info-o" />
    </div>
    <van-field v-model="message" type="textarea" placeholder="请输入留言" rows="1" autosize />
  </div>
</template>

<script>
export default {
  name: 'ZvTextarea',
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-textarea {
  .header {
    display: flex;
    height: 44px;
    margin: 0 15px;
    justify-content: space-between;
    align-items: center;
    color: $zv-212121;
    font-size: 16px;
    .van-icon {
      color: $baseColor;
    }
  }
  .van-hairline--bottom {
    &:after {
      border-color: #e0e0e0;
    }
  }
}
</style>
