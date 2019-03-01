<template>
  <div>
    <navigate />
    <tool-bar />
    <app-main />
  </div>
</template>

<script>
import Navigate from './Navigate'
import AppMain from './AppMain'
import ToolBar from './ToolBar'
export default {
  name: 'index',
  components: { ToolBar, AppMain, Navigate }
}
</script>

<style scoped></style>
