<template lang="pug">
  .mycustom.pa-5.mx-auto(style="max-width:800px")
    label Text Field
    custom-text-field
    hr.my-4
</template>

<script>
import CustomTextField from '@/components/mycustom/customTextField.vue'
export default {
  name: 'MyCustom',
  components: { CustomTextField }
}
</script>
<style scoped>
</style>
