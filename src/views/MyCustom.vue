<template lang="pug">
  .mycustom.pa-5.mx-auto(style="max-width:800px")
    label Text Field
    custom-text-field
    div.my-8
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
</style>
