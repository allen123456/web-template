<template>
  <div class="list">
    <zv-nav-bar title="列表" />

    <zv-list class="test-list" @handleLoad="onLoad" :data-source="list">
      <template v-slot="{ dataSource }">
        <zv-cell
          v-for="(item, index) in dataSource"
          :key="index"
          :title="item"
        />
      </template>
    </zv-list>
  </div>
</template>

<script>
import ZvList from '../../components/zv-list/index'
import ZvNavBar from '../../components/zv-nav-bar/index'
import ZvCell from '../../components/zv-cell/index'
import * as api from '@/api/test'
export default {
  name: 'List',
  components: { ZvCell, ZvNavBar, ZvList },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      api.test().then(arr => {
        this.list = arr
      })
    },
    onLoad(obj) {
      if (obj.pullAction === 'pullingDown') {
        api.error().then(() => {
          obj.callback({ pullAction: obj.pullAction, error: true })
        })
      } else {
        debugger
        api.test().then(arr => {
          this.list = this.list.concat(arr)
          obj.callback({ pullAction: obj.pullAction, limit: arr.length })
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  height: calc(100vh);
  overflow: hidden;
  .test-list {
    height: calc(100vh - 46px);
  }
}
</style>
