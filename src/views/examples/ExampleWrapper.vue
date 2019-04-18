<!--示例组件：示例包裹器
/**
* @author 刘宇琳
* @date 2019/2/18
* @param title: 示例名字
* 用法：参考examples文件夹中示例代码
*/
-->
<template>
  <div class="example__wrapper">
    <span>{{ title }}</span>

    <div class="example__slot-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleWrapper',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.example__wrapper {
  padding-top: 10px;
  span {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    color: $base-font-color;
  }
  .example__slot-wrapper {
    @include flex();
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
}
</style>
