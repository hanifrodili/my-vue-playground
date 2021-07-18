<template lang="pug">
  .my-text-field
    v-text-field.mt-3(label="Name" filled rounded hide-details="auto" :rules="rules.not_empty")
    v-text-field.mt-3(label="Phone" filled rounded hide-details="auto")
</template>
<script>
export default {
  name: "MyTextField",
  data: () => ({
    rules: {
      not_empty: [v => !!v || 'This field is required']
    }
  })
}
</script>
<style scoped>
::v-deep .v-text-field--filled > .v-input__control > .v-input__slot{
  background: #F7F7F7 !important;
  border: 1px solid #eaeaea !important;
  border-radius: 4px;
  max-height: 48px;
  min-height: 48px;
  padding-left: 16px;
}
::v-deep .v-text-field.v-input--has-state > .v-input__control > .v-input__slot{
  border: 1px solid red !important;
}
::v-deep .v-text-field--filled:not(.v-text-field--single-line) input{
  margin-top: 14px;
}
::v-deep .v-text-field--filled .v-label{
  top: 14px !important;
  color: #C1C1C1;
}
::v-deep .v-text-field--filled .v-label--active{
  transform: translateY(-10px) scale(0.75);
  color: #C1C1C1 ;
}
::v-deep .theme--light.v-input input, .theme--light.v-input textarea{
  color: #2B2525 ;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 24px !important;
}
::v-deep .v-input--has-state.error--text{
  color: red;
}
</style>
