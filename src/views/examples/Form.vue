<template>
  <div>
    <zv-nav-bar title="表单"></zv-nav-bar>

    <zv-form :forms="forms"></zv-form>

    <div>
      {{ this.forms[0].value }}
    </div>
  </div>
</template>

<script>
import ZvNavBar from '../../components/zv-nav-bar/index'
import ZvForm from '../../components/zv-form/index'
export default {
  name: 'Form',
  components: { ZvForm, ZvNavBar },
  data() {
    return {
      forms: [
        {
          label: '用户名',
          value: '',
          rightIcon: 'info-o',
          clickRightIcon: this.clickRightIcon
        },
        { label: '密码', fieldType: 'password', value: 'aaaaaaa', readonly: true },
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
      this.$toast('question')
    }
  }
}
</script>

<style scoped></style>
