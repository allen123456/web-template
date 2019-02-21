<template>
  <div class="container">
    <div class="strength">
      <div class="l" />
      <div class="m" :class="{ active: validateKey[strength].index >= 2 }" />
      <div class="h" :class="{ active: validateKey[strength].index >= 3 }" />
    </div>
    <div class="tip">{{ validateKey[strength].name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    strength: {
      type: String,
      default: 'L',
      validator: val => ['L', 'M', 'H'].indexOf(val) > -1
    }
  },
  data() {
    return {
      validateKey: {
        L: { index: 1, name: '弱' },
        M: { index: 2, name: '中' },
        H: { index: 3, name: '强' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 8px;
  display: flex;
  .strength {
    background-color: #d8d8d8;
    border-radius: 4px;
    display: flex;
    width: 92px;
    height: 100%;
    .l {
      background-color: #fe7251;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      flex: 1;
    }
    .m {
      flex: 1;
      margin: 0 2px;
      &.active {
        background-color: #fbab4a;
      }
    }
    .h {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      flex: 1;
      &.active {
        background-color: $themeBg;
      }
    }
  }
  .tip {
    width: 50px;
    text-align: center;
    position: relative;
    top: -2px;
  }
}
</style>
