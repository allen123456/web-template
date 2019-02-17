<template>
  <zv-cell-group>
    <template v-for="(item, index) in forms">
      <zv-textarea
        v-if="item.type === 'textarea'"
        v-model="item.value"
        :label="item.label"
        :rightIcon="item.rightIcon"
        :readonly="item.readonly"
        :key="index"
      />

      <zv-field
        v-else
        v-model="item.value"
        :label="item.label"
        :required="required(item)"
        :rightIcon="item.rightIcon"
        :readonly="item.readonly"
        :type="item.fieldType"
        :isLink="item.isLink"
        :inputAlign="item.inputAlign"
        :errorMessage="item.errorMessage"
        @handleBlur="handleBlur(index)"
        @clickRightIcon="clickRightIcon(item)"
        :key="index"
      />
    </template>
  </zv-cell-group>
</template>

<script>
import Schema from 'async-validator'
import ZvCellGroup from '../zv-cell-group/index'
import ZvField from '../zv-field/index'
import ZvTextarea from '../zv-textarea/index'
export default {
  name: 'ZvForm',
  components: { ZvTextarea, ZvField, ZvCellGroup },
  props: {
    forms: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      username: 'a'
    }
  },
  computed: {
    /** 2019/2/16
     * @Author: 刘宇琳
     * @Desc: 这个可以用来对表单组件做一些个性化设置
     */
    //   dataSource() {
    //     return this.forms.map(item => {
    //       if (item.readonly) {
    //         item.inputAlign = 'right'
    //       }
    //       return item
    //     })
    //   }
  },
  methods: {
    /** 2019/2/15
     * @Author: 刘宇琳
     * @Desc: 获取是否必填标识
     */
    required(item) {
      return item.rule ? !!item.rule.required : false
    },
    clickRightIcon(item) {
      return typeof item.clickRightIcon !== 'function'
        ? null
        : item.clickRightIcon()
    },
    handleBlur(index) {
      if (this.forms[index].rule) {
        this.validate(index)
      }
    },
    /** 2019/2/15
     * @Author: 刘宇琳
     * @Desc: 校验数据
     */
    validate(index) {
      const that = this
      const value = this.forms[index].value
      const rule = this.forms[index].rule
      let descriptor = { name: rule }
      let validator = new Schema(descriptor)
      validator.validate({ name: value }, errors => {
        if (errors && errors[0] !== '') {
          that.forms[index].errorMessage = errors[0].message
        } else {
          that.forms[index].errorMessage = ''
        }
        that.forms.splice(index, 1, that.forms[index])
      })
    },
    /** 2019/2/16
     * @Author: 刘宇琳
     * @Desc: 供外部调用，检查是否全部验证通过
     */
    onValidate(callback) {
      let isbool = true
      let itemIndex = 0
      const length = this.forms.length
      for (let i = 0; i < length; i++) {
        ;(index => {
          const that = this
          const rule = that.forms[index].rule
          if (rule) {
            const value = that.forms[index].value
            let descriptor = { name: rule }
            let validator = new Schema(descriptor)
            validator.validate({ name: value }, errors => {
              if (errors && errors[0] !== '') {
                that.forms[index].errorMessage = errors[0].message
                isbool = false
              } else {
                that.forms[index].errorMessage = ''
              }
              that.forms.splice(index, 1, that.forms[index])
              itemIndex = index
              if (itemIndex === length - 1) {
                callback(isbool)
              }
            })
          } else {
            itemIndex = index
            if (itemIndex === length - 1) {
              callback(isbool)
            }
          }
        })(i)
      }
    },
    /** 2019/2/16
     * @Author: 刘宇琳
     * @Desc: 重置表单
     */
    resetFields() {
      const length = this.forms.length
      for (let i = 0; i < length; i++) {
        const item = this.forms[i]
        item.value = ''
        if (item.errorMessage && item.errorMessage !== '') {
          item.errorMessage = ''
        }
        this.forms.splice(i, 1, item)
      }
    }
  }
}
</script>

<style scoped></style>
