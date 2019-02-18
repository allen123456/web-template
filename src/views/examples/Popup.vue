<template>
  <div>
    <zv-nav-bar title="Popup" />

    <example-wrapper>
      <zv-button plain type="default" size="small" @click="btnClick(0)">
        中间
      </zv-button>
      <zv-button plain type="default" size="small" @click="btnClick(1)">
        底部
      </zv-button>
      <zv-button plain type="default" size="small" @click="btnClick(2)">
        顶部
      </zv-button>
    </example-wrapper>

    <zv-pop-up v-model="base">内容</zv-pop-up>
    <zv-pop-up v-model="top" position="top">内容</zv-pop-up>
    <zv-pop-up v-model="bottom" position="bottom">内容</zv-pop-up>
  </div>
</template>

<script>
import ZvButton from '../../components/zv-button/index'
import ZvPopUp from '../../components/zv-popup/index'
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'Popup',
  components: { ExampleWrapper, ZvPopUp, ZvButton },
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
