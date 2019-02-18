<template>
  <div>
    <zv-nav-bar title="轻提示"></zv-nav-bar>

    <example-wrapper title="文字提示">
      <zv-button plain type="default" @click="btnClick(0)">
        文字提示
      </zv-button>
      <zv-button plain type="default" @click="btnClick(1)">
        长文字提示
      </zv-button>
    </example-wrapper>

    <example-wrapper title="成功/失败提示">
      <zv-button plain type="default" @click="btnClick(2)">
        成功提示
      </zv-button>
      <zv-button plain type="default" @click="btnClick(3)">
        失败提示
      </zv-button>
    </example-wrapper>

    <example-wrapper title="加载提示">
      <zv-button plain type="default" @click="btnClick(4)">
        加载提示
      </zv-button>
    </example-wrapper>
  </div>
</template>

<script>
import { toast } from '../../components/zv-pop/index'
import ZvButton from '../../components/zv-button/index'
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'Toast',
  components: { ExampleWrapper, ZvButton },
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
