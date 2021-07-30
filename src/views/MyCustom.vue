<template lang="pug">
  .mycustom.pa-5.mx-auto(style="max-width:800px; margin-top:40px")
    label Text Field
    custom-text-field
    div.my-9
    label Date Picker (with range)
    custom-date-picker
</template>

<script>
import CustomTextField from '@/components/mycustom/customTextField.vue'
import customDatePicker from '@/components/mycustom/customDatePicker.vue'
export default {
  name: 'MyCustom',
  components: { CustomTextField, customDatePicker }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  .mycustom{
    font-family: 'Inter', sans-serif;
  }
</style>
