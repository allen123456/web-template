<template>
  <div class="zv-input">
    <div class="zv-input__label">{{ label }}</div>
    <div class="zv-input__content">
      <el-input
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly"
        v-model="currentValue"
        :class="input__inner"
      >
        <zv-svg-icon
          slot="suffix"
          @click.native="handleClick"
          :icon-class="icon"
        />
      </el-input>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import ZvModel from 'mixins/zv-model'
export default {
  name: 'ZvInput',
  mixins: [ZvModel],
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    input__inner() {
      return this.readonly ? 'zv-input__inner' : ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('clickIcon', this.currentValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.zv-input {
  @include flex();
  @include containerH44();
  box-sizing: border-box;
  border-bottom: 1px solid $border-color;
  .zv-input__label {
    width: 120px;
  }
  .zv-input__content {
    flex: 1;
  }
}
</style>

<style lang="scss">
.zv-input {
  .el-input__inner {
    padding: 0;
    border-width: 0;
    color: $sub-font-color;
  }
  .zv-input__inner {
    .el-input__inner {
      color: #c7c7c7;
    }
  }
}
</style>
