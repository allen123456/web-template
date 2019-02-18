<template>
  <div>
    <zv-nav-bar title="表单"></zv-nav-bar>

    <zv-form ref="ZvForm" :forms="forms"></zv-form>

    <example-wrapper>
      <zv-button type="primary" @click="btnClick(0)">立即创建</zv-button>
      <zv-button plain type="default" @click="btnClick(1)">重置表单</zv-button>
    </example-wrapper>
  </div>
</template>

<script>
import ZvForm from '../../components/zv-form/index'
import { toast } from '../../components/zv-pop/index'
import ZvButton from '../../components/zv-button/index'
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'Form',
  components: { ExampleWrapper, ZvButton, ZvForm },
  data() {
    return {
      forms: [
        {
          label: '用户名',
          value: '',
          rightIcon: 'info-o',
          clickRightIcon: this.clickRightIcon
        },
        { label: '密码', fieldType: 'password', value: 'aaaaaaa' },
        {
          label: '邮箱',
          value: '',
          rule: [
            { required: true, message: '请填写邮箱' },
            { type: 'email', message: '请填写正确的邮箱格式' }
          ]
        },
        {
          label: '生日',
          value: '',
          rule: [
            {
              validator(rule, value, callback) {
                const errors = []
                if (value !== '1992-08-25') {
                  errors.push(new Error(rule.message))
                }
                callback(errors)
              },
              message: '请填写正确的生日'
            }
          ]
        },
        { label: '备注', type: 'textarea', value: '' }
      ]
    }
  },
  methods: {
    clickRightIcon() {
      toast({ message: '点击图标' })
    },
    btnClick(index) {
      if (index === 0) {
        this.$refs.ZvForm.onValidate(error => {
          error
            ? toast({ message: '验证通过' })
            : toast({ message: '验证失败' })
        })
      } else {
        this.$refs.ZvForm.resetFields()
      }
    }
  }
}
</script>
