<template>
  <div>
    <zv-nav-bar title="轻提示"></zv-nav-bar>

    <div class="header">
      <span>文字提示</span>

      <div class="btn-wrappar">
        <zv-button plain type="default" @click="btnClick(0)">文字提示</zv-button>
        <zv-button plain type="default" @click="btnClick(1)">长文字提示</zv-button>
      </div>
    </div>

    <div class="header">
      <span>成功/失败提示</span>

      <div class="btn-wrappar">
        <zv-button plain type="default" @click="btnClick(2)">成功提示</zv-button>
        <zv-button plain type="default" @click="btnClick(3)">失败提示</zv-button>
      </div>
    </div>

    <div class="header">
      <span>加载提示</span>

      <div class="btn-wrappar">
        <zv-button plain type="default" @click="btnClick(4)">加载提示</zv-button>
      </div>
    </div>
  </div>
</template>

<script>
import ZvNavBar from '../../components/zv-nav-bar/index'
import { toast } from '../../components/zv-pop/index'
import ZvButton from '../../components/zv-button/index'
export default {
  name: 'Toast',
  components: { ZvButton, ZvNavBar },
  methods: {
    btnClick(index) {
      if (index === 0) {
        toast({ message: '这个框架打满分' })
      } else if (index === 1) {
        toast({ message: '这是一条长文字提示，超过一定字数就会换行' })
      } else if (index === 2) {
        toast({ success: '成功文案' })
      } else if (index === 3) {
        toast({ fail: '失败文案' })
      } else if (index === 4) {
        const loading = toast({ loading: '加载中...' })
        setTimeout(() => {
          loading.clear()
        }, 3000)
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
