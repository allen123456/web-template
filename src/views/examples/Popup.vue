<template>
  <div>
    <zv-nav-bar title="Popup" />

    <div class="header">
      <span>Popup用法</span>

      <div class="btn-wrappar">
        <zv-button plain type="default" size="small" @click="btnClick(0)">
          中间
        </zv-button>
        <zv-button plain type="default" size="small" @click="btnClick(1)">
          底部
        </zv-button>
        <zv-button plain type="default" size="small" @click="btnClick(2)">
          顶部
        </zv-button>
      </div>
    </div>

    <zv-pop-up v-model="base">内容</zv-pop-up>
    <zv-pop-up v-model="top" position="top">内容</zv-pop-up>
    <zv-pop-up v-model="bottom" position="bottom">内容</zv-pop-up>
  </div>
</template>

<script>
import ZvButton from '../../components/zv-button/index'
import ZvPopUp from '../../components/zv-popup/index'
export default {
  name: 'Popup',
  components: { ZvPopUp, ZvButton },
  data() {
    return {
      base: false,
      top: false,
      bottom: false
    }
  },
  methods: {
    btnClick(index) {
      if (index === 0) {
        this.base = true
      } else if (index === 1) {
        this.bottom = true
      } else if (index === 2) {
        this.top = true
      }
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
    justify-content: space-around;
    padding: 5px;
    margin-bottom: 10px;
  }
}
</style>
