<template>
  <div>
    <zv-nav-bar title="Picker" />

    <div class="header">
      <span>Picker</span>

      <div class="btn-wrappar">
        <zv-button plain type="default" @click="btnClick">Picker</zv-button>
      </div>
    </div>

    <zv-picker
      v-model="showPicker"
      title="标题"
      :columns="['杭州', '宁波', '温州', '嘉兴', '湖州']"
      @handleConfirm="handlePickerClick"
      @handleCancel="handlePickerClick"
    />
  </div>
</template>

<script>
import ZvPicker from '../../components/zv-picker/index'
import ZvButton from '../../components/zv-button/index'
import { toast } from '../../components/zv-pop/index'
export default {
  name: 'Picker',
  components: { ZvButton, ZvPicker },
  data() {
    return {
      showPicker: false
    }
  },
  methods: {
    handlePickerClick(item) {
      this.showPicker = false
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

<style lang="scss" scoped>
.header {
  padding-top: 10px;
  span {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    color: $zv-212121;
  }
  .btn-wrappar {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    margin-bottom: 10px;
  }
}
</style>
