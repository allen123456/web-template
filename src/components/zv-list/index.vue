<!--公用组件：列表
/**
* @author 刘宇琳
* @date 2019/2/18
* @param dataSource：列表数据源
* 用法：集成了无数据页面、上下拉刷新。参考examples/List.vue
*/
-->
<template>
  <div ref="scrollList" class="zv-list">
    <van-pull-refresh
      v-if="haveData"
      v-model="refreshing"
      @refresh="handleLoad('pullingDown')"
    >
      <van-list
        v-model="loading"
        :offset="100"
        :finished="isFinished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad('pullingUp')"
        :immediate-check="immediateCheck"
      >
        <slot :dataSource="dataSource" />
      </van-list>
    </van-pull-refresh>
    <no-more-data v-else :style="noDataHeight" />
  </div>
</template>

<script>
import NoMoreData from './NoMoreData'
import { toast } from '../../components/zv-pop/index'
export default {
  name: 'ZvList',
  components: { NoMoreData },
  props: {
    /** 2019/2/18
     * @Author: 刘宇琳
     * @Desc: 页面一次加载多少个数据
     */
    pageSize: {
      type: Number,
      default: 20
    },
    dataSource: {
      type: Array,
      default() {
        return []
      }
    },
    immediateCheck: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      finished: false,
      refreshing: false,
      error: false,
      loading: false,
      isFrist: true,
      noDataHeight: { height: this.computedHeight }
    }
  },
  computed: {
    /** 2019/2/17
     * @Author: 刘宇琳
     * @Desc: 是否有数据，以便判断是否出现无数据页面
     */
    haveData() {
      return this.isFrist || this.dataSource.length > 0
    },
    /** 2019/2/18
     * @Author: 刘宇琳
     * @Desc: 检查后台数据是否全部加载完了，显示'没有更多了'提示
     */
    isFinished() {
      return this.isFrist ? false : this.dataSource.length < this.pageSize
    },
    /** 2019/2/17
     * @Author: 刘宇琳
     * @Desc: 计算容器高度
     */
    computedHeight() {
      if (this.$refs.scrollList) {
        const scrollHeight = this.$refs.scrollList.$el.clientHeight
        return `${scrollHeight}px`
      }
      return `300px`
    }
  },
  methods: {
    handleLoad(pullAction) {
      if (pullAction === 'pullingUp' && !this.refreshing) {
        this.$emit('load', { pullAction, callback: this.callback })
      } else if (pullAction === 'pullingDown') {
        this.$emit('load', { pullAction, callback: this.callback })
      }
    },
    /** 2019/2/17
     * @Author: 刘宇琳
     * @Desc: pullAction: 当前是上拉还是下拉操作 limit: 当前返回的数据条数 error: 当前请求是否报错
     */
    callback({ pullAction = '', limit = 0, error = false } = {}) {
      if (!error) {
        if (this.isFrist) {
          this.$nextTick(() => {
            this.isFrist = false
          })
        }
        if (pullAction === 'pullingUp') {
          this.loading = false
          this.finished = limit < this.pageSize
        } else if (pullAction === 'pullingDown') {
          this.refreshing = false
          // window.scrollTo(0, this.pageSize)
        }
      } else {
        if (pullAction === 'pullingUp') {
          this.loading = false
          this.error = true
        } else if (pullAction === 'pullingDown') {
          this.refreshing = false
          toast({ message: '刷新失败' })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-list {
  overflow: scroll;
}
</style>
