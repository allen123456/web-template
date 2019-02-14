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
        { required: true, label: '用户名', value: '', rightIcon: 'info-o' },
        { label: '密码', fieldType: 'password', value: 'aaaaaaa', readonly: true },
        { label: '备注', type: 'textarea', value: '' }
      ]
    }
  }
}
</script>

<style scoped></style>
