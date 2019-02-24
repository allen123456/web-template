<template>
  <div class="zv-tool-bar">
    <el-row>
      <el-col :span="12">
        <tags-view class="line" />
      </el-col>
      <el-col :span="12">
        <handle-tool />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TagsView from './TagsView'
import HandleTool from './HandleTool'
export default {
  name: 'ToolBar',
  components: { HandleTool, TagsView }
}
</script>

<style lang="scss" scoped>
.zv-tool-bar {
  box-sizing: border-box;
}
</style>
