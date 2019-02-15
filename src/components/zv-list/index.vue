<template>
  <div>
    <van-list
      v-if="haveData"
      v-model="currentValue"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="handleLoad"
    >
      <slot :dataSource="dataSource" />
    </van-list>
    <no-more-data v-else />
  </div>
</template>

<script>
import ZvModel from 'mixins/zv-model'
import NoMoreData from './NoMoreData'
export default {
  name: 'ZvList',
  components: { NoMoreData },
  mixins: [ZvModel],
  props: {
    error: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    dataSource: {
      type: Array,
      default() {
        return ['']
      }
    }
  },
  data() {
    return {
      finished: false
    }
  },
  computed: {
    // 是否有数据，以便判断是否出现无数据页面
    haveData() {
      return Array.isArray(this.dataSource) && this.dataSource.length
    }
  },
  methods: {
    handleLoad() {
      debugger
      this.$emit('handleLoad')
    }
  }
}
</script>

<style scoped></style>
