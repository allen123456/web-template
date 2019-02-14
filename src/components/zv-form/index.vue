<template>
  <div>
    <zv-list>
      <zv-cell-group>
        <template v-for="(item, index) in forms">
          <zv-textarea
            v-if="item.type === 'textarea'"
            v-model="item.value"
            :label="item.label"
            :rightIcon="item.rightIcon"
            :readonly="item.readonly"
            :key="index"
          ></zv-textarea>

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
          ></zv-field>
        </template>
      </zv-cell-group>
    </zv-list>
  </div>
</template>

<script>
import Schema from 'async-validator'
import ZvList from '../zv-list/index'
import ZvCellGroup from '../zv-cell-group/index'
import ZvField from '../zv-field/index'
import ZvTextarea from '../zv-textarea/index'
export default {
  name: 'ZvForm',
  components: { ZvTextarea, ZvField, ZvCellGroup, ZvList },
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
    required(item) {
      return item.rule ? !!item.rule.required : false
    },
    clickRightIcon(item) {
      return typeof item.clickRightIcon !== 'function' ? null : item.clickRightIcon()
    },
    handleBlur(index) {
      if (this.forms[index].rule) {
        this.validate(index)
      }
    },
    /**
     * 校验数据
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
    }
  }
}
</script>

<style scoped></style>
