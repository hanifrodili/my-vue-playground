<template lang="pug">
  .mycustom.pa-5.mx-auto(style="max-width:600px; margin-top:40px")
    label Text Field
    custom-text-field.pa-2.rounded-lg.elevation-2
    div.my-9
    label Date Picker (with range)
    custom-date-picker.pa-2.rounded-lg.elevation-2
    div.my-9
    label Schedule Picker
    v-btn.btn.warning.mb-2( @click="showAlert" style="font-size:10px") Click here before scroll ;)
    custom-schedule-picker.py-2.rounded-lg.elevation-2
</template>

<script>
import CustomTextField from '@/components/mycustom/customTextField.vue'
import CustomDatePicker from '@/components/mycustom/customDatePicker.vue'
import CustomSchedulePicker from '@/components/mycustom/customSchedulePicker.vue'
export default {
  name: 'MyCustom',
  data: () => ({
    testValue: ''
  }),
  components: { CustomTextField, CustomDatePicker, CustomSchedulePicker },
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
