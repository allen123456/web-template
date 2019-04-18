<template>
  <div>
    <zv-nav-bar title="Dialog"></zv-nav-bar>

    <div class="dialog__header">
      <span>消息提示</span>

      <div class="dialog__wrapper">
        <zv-button plain type="default" @click="btnClick(0)">
          消息提示
        </zv-button>

        <zv-button plain type="default" @click="btnClick(1)">
          无标题提示
        </zv-button>
      </div>
    </div>

    <div class="dialog__header">
      <span>消息确认</span>

      <div class="dialog__wrapper">
        <zv-button plain type="default" @click="btnClick(2)">
          消息确认
        </zv-button>
      </div>
    </div>
  </div>
</template>

<script>
import ZvButton from '../../components/zv-button/index'
import { dialog, toast } from '../../components/zv-pop/index'
export default {
  name: 'Dialog',
  components: { ZvButton },
  data() {
    return {
      base: false,
      top: false,
      bottom: false,
      showPicker: false
    }
  },
  methods: {
    btnClick(index) {
      if (index === 0) {
        dialog({ title: '标题', message: '这个框架打满分' })
      } else if (index === 1) {
        dialog({ message: '这个框架打满分' })
      } else if (index === 2) {
        dialog({ type: 'confirm', title: '标题', message: '这个框架打满分' })
          .then(() => {
            toast({ message: '确认' })
          })
          .catch(() => {
            toast({ message: '取消' })
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog__header {
  padding-top: 10px;
  span {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    color: $base-font-color;
  }
  .btn__wrapper {
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
