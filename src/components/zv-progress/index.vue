// 进度条组件 //
<template>
  <div class="zl-progress">
    <el-progress
      :show-text="false"
      v-show="strength === ''"
      :stroke-width="10"
      :percentage="0"
    ></el-progress>
    <el-progress
      :show-text="false"
      v-show="strength === 'L'"
      :stroke-width="10"
      :percentage="33.3"
      color="#fe7251"
    />
    <el-progress
      :show-text="false"
      v-show="strength === 'M'"
      :stroke-width="10"
      :percentage="66.6"
      color="#fbab4a"
    />
    <el-progress
      :show-text="false"
      v-show="strength === 'H'"
      :stroke-width="10"
      :percentage="100"
      color="#96b327"
    />
  </div>
</template>

<script>
export default {
  name: 'ZvProgress',
  props: {
    strength: {
      type: String,
      default: 'L'
    }
  },
  methods: {}
}
</script>

<style>
.zl-progress {
  width: 100%;
}
</style>
