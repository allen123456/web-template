<template>
  <div class="zv-search">
    <van-search
      v-model="currentValue"
      background="#fff"
      show-action
      placeholder="请输入搜索关键词"
    >
      <div slot="action" @click="handleSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
import ZvModel from 'mixins/zv-model'
export default {
  name: 'ZvSearch',
  mixins: [ZvModel],
  methods: {
    handleSearch() {
      this.$emit('onSearch')
    }
  }
}
</script>

<style lang="scss">
.zv-search {
  .van-cell {
    background-color: #f5f5f5;
  }
}
</style>
