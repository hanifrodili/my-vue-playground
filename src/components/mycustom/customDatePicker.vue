<template lang="pug">
  .my-date-picker
    v-date-picker.mb-4(header-color="basic100" color="info400" style="width:100%")
</template>
<script>
export default {
  name: 'MyDatePicker'
}
</script>
<style scoped>
@import url(`../../assets/materialdesignicons-webfont.ttf`);

::v-deep .v-date-picker-title__year{
    display: none;
}
::v-deep .v-date-picker-title__date {
    display: none;
}
::v-deep .v-picker__title {
    color: var(--v-primary500);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0;
}
::v-deep .v-picker__body{
  width: 100% !important;
}
::v-deep .v-picker__title__btn{
  /* border-top: 1px solid var(--v-basic300); */
  border-bottom: 1px solid var(--v-basic300);
  padding: 8px 0;
  margin:0;
}
::v-deep .v-date-picker-header{
  border-top: 1px solid var(--v-basic300);
  border-bottom: 1px solid var(--v-basic300);
  height: 48px;
}

::v-deep .v-date-picker-header > button[aria-label="Previous month"],
::v-deep .v-date-picker-header > button[aria-label="Previous year"]{
  position: absolute !important;
  right: 40px;
  width: 20px;
  border-radius: 5px;
}

::v-deep .v-date-picker-header > button[aria-label="Next month"],
::v-deep .v-date-picker-header > button[aria-label="Next year"]{
  position: absolute !important;
  right: 20px;
  width: 20px;
  border-radius: 5px;
}

::v-deep .v-date-picker-header > div{
  position: absolute !important;
}

::v-deep .v-date-picker-header .v-date-picker-header__value button::after{
  font-family: "Material Design Icons";
  content: "\F0140";
}

::v-deep .v-time-picker-title__time{
  color: black
}
::v-deep .v-time-picker-title__ampm{
  color: black;
  margin-bottom:0;
}
::v-deep .v-time-picker-title{
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
}
::v-deep .v-date-picker-table th {
    font-size: 15px;
    color:var(--v-textColorHint) !important;
}
::v-deep .v-date-picker-table--date .v-btn {
    height: 32px;
    width: 32px;
    font-size: 15px !important;
    font-weight: 600;
    border-radius: 4px !important;
}
::v-deep .v-date-picker-table__current{
  border: 1px solid black;
  color: white;
  background-color: rgba(0,0,0,.8);
}
::v-deep .theme--light.v-btn.v-btn--disabled {
    color:var(--v-textColorHint) !important;
}
.v-text-field--outlined >>> fieldset {
  border-color: var(--v-primary200);
}
::v-deep .v-date-picker-table--month td .v-btn {
    margin: 0 auto;
    max-width: 140px;
    min-width: 40px;
    width: 100%;
    font-size: 15px !important;
    font-weight: 600 !important;
}
::v-deep .v-date-picker-years {
    font-size: 15px;
    font-weight: 600;
    height: 290px;
    list-style-type: none;
    overflow: auto;
    text-align: center;
}
</style>