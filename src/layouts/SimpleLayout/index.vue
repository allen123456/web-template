<template>
  <div>
    <simple-nav-bar />
    <router-view />
  </div>
</template>

<script>
import SimpleNavBar from './SimpleNavBar'
export default {
  name: 'SimpleLayout',
  components: { SimpleNavBar }
}
</script>
