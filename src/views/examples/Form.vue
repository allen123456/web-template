<template>
  <div>
    <zv-nav-bar title="表单"></zv-nav-bar>

    <zv-list>
      <zv-cell-group>
        <zv-field label="用户名" :required="true"></zv-field>
        <zv-field label="用户名"></zv-field>
      </zv-cell-group>
      <zv-cell-group>
        <zv-textarea></zv-textarea>
      </zv-cell-group>
    </zv-list>
  </div>
</template>

<script>
import ZvNavBar from '../../components/zv-nav-bar/index'
import ZvList from '../../components/zv-list/index'
import ZvCellGroup from '../../components/zv-cell-group/index'
import ZvField from '../../components/zv-field/index'
import ZvTextarea from '../../components/zv-textarea/index'
export default {
  name: 'Form',
  components: { ZvTextarea, ZvField, ZvCellGroup, ZvList, ZvNavBar },
  data() {
    return {
      username: 'a'
    }
  }
}
</script>

<style scoped></style>
