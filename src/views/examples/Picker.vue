<template>
  <div>
    <zv-nav-bar title="Picker" />

    <example-wrapper>
      <zv-button plain type="default" @click="btnClick">Picker</zv-button>
    </example-wrapper>

    <zv-picker
      v-model="showPicker"
      title="标题"
      :columns="['杭州', '宁波', '温州', '嘉兴', '湖州']"
      @confirm="handlePickerClick"
      @cancel="handlePickerClick"
    />
  </div>
</template>

<script>
import ZvPicker from '../../components/zv-picker/index'
import ZvButton from '../../components/zv-button/index'
import { toast } from '../../components/zv-pop/index'
import ExampleWrapper from './ExampleWrapper'
export default {
  name: 'Picker',
  components: { ExampleWrapper, ZvButton, ZvPicker },
  data() {
    return {
      showPicker: false
    }
  },
  methods: {
    handlePickerClick(item) {
      if (item) {
        toast({ message: `当前值：${item.value}, 当前索引：${item.index}` })
      }
    },
    btnClick() {
      this.showPicker = true
    }
  }
}
</script>
