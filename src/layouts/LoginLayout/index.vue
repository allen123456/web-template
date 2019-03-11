<template>
  <div class="login-layout">
    <nav-bar background-color="#fff">
      <template v-slot:left>
        <div>LOGO</div>
      </template>
    </nav-bar>
    <div class="login-layout-panel" :style="loginPanelStyle">
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from '../NavBar/index'
export default {
  name: 'LoginLayout',
  components: { NavBar },
  props: {
    justifyContent: {
      type: String,
      default: 'center'
    },
    alignItems: {
      type: String,
      default: 'flex-start'
    }
  },
  computed: {
    loginPanelStyle() {
      return {
        'justify-content': this.justifyContent,
        'align-items': this.alignItems,
        height: `${document.body.clientHeight - 44}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-layout {
  &-panel {
    display: flex;
  }
}
</style>
