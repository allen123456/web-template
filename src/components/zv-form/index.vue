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

          <zv-uploader v-else-if="item.type === 'uploader'" :key="index"></zv-uploader>

          <zv-field
            v-else
            v-model="item.value"
            :label="item.label"
            :required="item.required"
            :rightIcon="item.rightIcon"
            :readonly="item.readonly"
            :type="item.fieldType"
            @click-right-icon="item.clickRightIcon"
            :key="index"
          ></zv-field>
        </template>
      </zv-cell-group>
    </zv-list>
  </div>
</template>

<script>
import ZvList from '../zv-list/index'
import ZvCellGroup from '../zv-cell-group/index'
import ZvField from '../zv-field/index'
import ZvTextarea from '../zv-textarea/index'
import ZvUploader from '../zv-uploader/index'
export default {
  name: 'ZvForm',
  components: { ZvUploader, ZvTextarea, ZvField, ZvCellGroup, ZvList },
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
  }
}
</script>

<style scoped></style>
