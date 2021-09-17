<template lang="pug">
  .mycustom.pa-5.mx-auto(style="max-width:600px; margin-top:40px")
    label Text Field
    custom-text-field.pa-2.rounded-lg.elevation-2
    div.my-9
    label Date Picker (with range)
    custom-date-picker.pa-2.rounded-lg.elevation-2
    div.my-9
    label Schedule Picker
    div
      v-btn.btn.warning.mb-2.px-2.py-1(v-if="isVibrateEnabled"  @click="showAlert" style="font-size:10px; height: fit-content") Click here before scroll ;)
    custom-schedule-picker.py-2.rounded-lg.elevation-2
</template>

<script>
import CustomTextField from '@/components/mycustom/customTextField.vue'
import CustomDatePicker from '@/components/mycustom/customDatePicker.vue'
import CustomSchedulePicker from '@/components/mycustom/customSchedulePicker.vue'
export default {
  name: 'MyCustom',
  data: () => ({
    testValue: '',
    isVibrateEnabled: false,
  }),
  components: { CustomTextField, CustomDatePicker, CustomSchedulePicker },
  mounted() {
    this.isVibrateEnabled = navigator.vibrate
  },
  methods:{
    showAlert(){
      alert('Reason is to detect user interaction before browser allowing vibration. TQ ;)')
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  .mycustom{
    font-family: 'Inter', sans-serif;
  }
</style>
