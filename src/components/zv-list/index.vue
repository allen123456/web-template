<template>
  <div>
    <van-pull-refresh v-if="haveData" v-model="refreshing" @refresh="handleLoad('pullingDown')">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="handleLoad('pullingUp')"
      >
        <slot :dataSource="dataSource" />
      </van-list>
    </van-pull-refresh>
    <no-more-data v-else />
  </div>
</template>

<script>
import NoMoreData from './NoMoreData'
import { toast } from '../../components/zv-pop/index'
export default {
  name: 'ZvList',
  components: { NoMoreData },
  props: {
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
      loading: false
    }
  },
  computed: {
    // 是否有数据，以便判断是否出现无数据页面
    haveData() {
      return Array.isArray(this.dataSource) && this.dataSource.length
    }
  },
  methods: {
    handleLoad(pullAction) {
      if (pullAction === 'pullingUp' && !this.refreshing) {
        this.loading = true
        this.$emit('handleLoad', { pullAction, callback: this.callback })
      } else if (pullAction === 'pullingDown') {
        this.$emit('handleLoad', { pullAction, callback: this.callback })
      }
    },
    callback({ pullAction = '', limit = 0, error = false } = {}) {
      if (!error) {
        if (pullAction === 'pullingUp') {
          this.loading = false
          this.finished = limit < this.pageSize
        } else if (pullAction === 'pullingDown') {
          this.refreshing = false
          window.scrollTo(0, this.pageSize)
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

<style scoped></style>
