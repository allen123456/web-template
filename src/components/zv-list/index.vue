<template>
  <div ref="scrollList" class="zv-list">
    <van-pull-refresh
      v-if="haveData"
      v-model="refreshing"
      @refresh="handleLoad('pullingDown')"
    >
      <van-list
        v-model="loading"
        :finished="isFinished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        :immediate-check="false"
        @load="handleLoad('pullingUp')"
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
    // 页面一次加载多少个数据
    pageSize: {
      type: Number,
      default: 20
    },
    dataSource: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      finished: false,
      refreshing: false,
      error: false,
      loading: false,
      noDataHeight: { height: this.computedHeight }
    }
  },
  computed: {
    /** 2019/2/17
     * @Author: 刘宇琳
     * @Desc: 是否有数据，以便判断是否出现无数据页面
     */
    haveData() {
      return this.dataSource.length > 0
    },
    isFinished() {
      return this.dataSource.length < this.pageSize
    },
    /** 2019/2/17
     * @Author: 刘宇琳
     * @Desc: 计算容器高度
     */
    computedHeight() {
      if (this.$refs.scrollList) {
        debugger
        const scrollHeight = this.$refs.scrollList.$el.clientHeight
        return `${scrollHeight}px`
      }
      return `300px`
    }
  },
  methods: {
    handleLoad(pullAction) {
      if (pullAction === 'pullingUp' && !this.refreshing) {
        this.$emit('handleLoad', { pullAction, callback: this.callback })
      } else if (pullAction === 'pullingDown') {
        this.$emit('handleLoad', { pullAction, callback: this.callback })
      }
    },
    /** 2019/2/17
     * @Author: 刘宇琳
     * @Desc: pullAction: 当前是上拉还是下拉操作 limit: 当前返回的数据条数 error: 当前请求是否报错
     */
    callback({ pullAction = '', limit = 0, error = false } = {}) {
      if (!error) {
        if (pullAction === 'pullingUp') {
          this.loading = false
          this.finished = limit < this.pageSize
        } else if (pullAction === 'pullingDown') {
          this.refreshing = false
          // window.scrollTo(0, this.pageSize)
        }
      } else {
        if (pullAction === 'pullingUp') {
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
