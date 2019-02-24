<template>
  <div>
    <nav-bar />
    <tool-bar />
    <app-main />
  </div>
</template>

<script>
import NavBar from './NavBar'
import AppMain from './AppMain'
import ToolBar from './ToolBar'
export default {
  name: 'index',
  components: { ToolBar, AppMain, NavBar }
}
</script>

<style scoped></style>
