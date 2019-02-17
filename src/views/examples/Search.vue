<template>
  <div>
    <zv-nav-bar title="搜索" />

    <zv-search v-model="search" @onSearch="handleSearch" />
  </div>
</template>

<script>
import ZvSearch from '../../components/zv-search/index'
import { toast } from '../../components/zv-pop/index'
export default {
  name: 'Search',
  components: { ZvSearch },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSearch() {
      toast({ message: `搜索关键词: ${this.search}` })
    }
  }
}
</script>

<style scoped></style>
