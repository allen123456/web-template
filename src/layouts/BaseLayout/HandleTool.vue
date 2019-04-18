<template>
  <div class="handle-tool">
    <div>
      <el-button size="small" icon="el-icon-edit">默认按钮</el-button>
      <el-button size="small" icon="el-icon-edit">默认按钮</el-button>
      <el-button size="small" icon="el-icon-edit">默认按钮</el-button>
    </div>
    <div class="handle-tool__search">
      <el-input placeholder="请输入内容" v-model="input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <div class="handle-tool__text">检索条件</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HandleTool',
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.handle-tool {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  &__search {
    width: 320px;
    display: flex;
    border: 1px solid $border-color;
    border-radius: 4px;
    font-size: 12px;
    height: 32px;
    .handle-tool__text {
      width: 80px;
      height: 32px;
      color: $base-font-color;
      text-align: center;
      line-height: 32px;
      position: relative;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        height: 16px;
        width: 1px;
        background-color: $border-color;
        top: 50%;
        left: 0;
        margin-top: -8px;
      }
    }
  }
}
</style>
<style lang="scss">
.handle-tool {
  .el-input__inner {
    border-color: #fff;
    height: 30px;
    line-height: 30px;
  }
  .el-input--medium .el-input__icon {
    line-height: 30px;
  }
}
</style>
