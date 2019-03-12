<template>
  <div class="list">
    <zv-nav-bar title="列表" />

    <zv-tabs v-model="active">
      <zv-tab v-for="(title, index) in tabs" :title="title" :key="index">
        <zv-list
          class="list__wrapper"
          @load="onLoad"
          :data-source="index === 0 ? list : noMoreData"
        >
          <template v-slot="{ dataSource }">
            <zv-cell
              v-for="(item, index) in dataSource"
              :key="index"
              :title="item"
            />
          </template>
        </zv-list>
      </zv-tab>
    </zv-tabs>
  </div>
</template>

<script>
import ZvList from '../../components/zv-list/index'
import ZvCell from '../../components/zv-cell/index'
import * as api from '@/api/test'
import ZvTabs from '../../components/zv-tabs/index'
import ZvTab from '../../components/zv-tab/index'
export default {
  name: 'List',
  components: { ZvTab, ZvTabs, ZvCell, ZvList },
  data() {
    return {
      tabs: ['无限列表', '无数据页面'],
      list: [],
      noMoreData: [],
      active: '0'
    }
  },
  methods: {
    onLoad(obj) {
      if (obj.pullAction === 'pullingDown') {
        api.error().then(() => {
          obj.callback({ pullAction: obj.pullAction, error: true })
        })
      } else {
        api.test({ isHideLoading: true }).then(arr => {
          if (arr) {
            setTimeout(() => {
              this.list = this.list.concat(arr)
              obj.callback({ pullAction: obj.pullAction, limit: arr.length })
            }, 3000)
          } else {
            obj.callback({ pullAction: obj.pullAction, error: true })
          }
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
  .list__wrapper {
    height: calc(100vh - 88px);
  }
}
</style>
