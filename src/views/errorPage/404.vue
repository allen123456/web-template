<template>
  <div class="errPage-container">
    <div class="errPage-wrappar">
      <div>
        <img :src="errImg" class="err-img" />
        <div class="err-content">
          <div>
            <h1>抱歉，页面没找到!</h1>
            <span>您要访问的页面暂时没有找到，如果有疑问，请联系管理员。</span>
          </div>
        </div>
      </div>
      <!--<zl-button radius class='back-green' @click="goback">{{$t('errorPage.backToTheHomePage')}}</zl-button>-->
    </div>
    <!--$t 回到主页  -->
  </div>
</template>

<script>
import errImg from '@/assets/img/404_images/404.jpg'
export default {
  name: 'page404',
  data() {
    return {
      errImg: errImg
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage-container {
  background-color: white;
  height: 100%;
  width: 100%;
  .errPage-wrappar {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 40px 50px 40px;
    .err-img {
      height: 290px;
      width: 290px;
      margin: 0 10px;
    }
    .err-content {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        text-align: center;
        font-size: 18px;
        color: #444444;
        line-height: 35px;
      }
      span {
        color: #888888;
        line-height: 18px;
        font-size: 13px;
      }
    }
    .back-green {
      width: 160px;
      height: 44px;
    }
  }
}
</style>
