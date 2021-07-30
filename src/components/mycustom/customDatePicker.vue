<template lang="pug">
  .my-date-picker
    v-date-picker.mb-1(v-model="dates"  header-color="basic100" color="info400" style="width:100%" :events="arrayEvents" event-color="warning" range)
    p.text-center {{dates[0]}} → {{dates[1]}}
</template>
<script>
export default {
  name: 'MyDatePicker',
  data: () => ({
    arrayEvents: null,
    dates: ['2021-07-10', '2021-08-10'],
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },
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
    color: black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0;
}
::v-deep .v-picker__body{
  width: 100% !important;
}
::v-deep .v-picker__title__btn{
  /* border-top: 1px solid var(--v-basic300); */
  border-bottom: 1px solid rgba(0,0,0,.5);
  padding: 8px 0;
  margin:0;
}
::v-deep .v-date-picker-header{
  /* border-bottom: 1px solid rgb(244,244,244);
  border-top: 1px solid rgb(244,244,244); */
  height: 61px;
}

::v-deep .v-date-picker-header > button{
  position: absolute !important;
  width: 24px;
  border-radius: 5px;
  color: black !important;
}

::v-deep .v-date-picker-header > button[aria-label="Previous month"],
::v-deep .v-date-picker-header > button[aria-label="Previous year"]{
  right: 53px;
}

::v-deep .v-date-picker-header > button[aria-label="Next month"],
::v-deep .v-date-picker-header > button[aria-label="Next year"]{
  right: 24px;
}

::v-deep .v-date-picker-header > div{
  position: absolute !important;
}

::v-deep .v-date-picker-header .v-date-picker-header__value button::after{
  font-family: "Material Design Icons";
  content: "\F0140";
  margin-left: 12px;
}

::v-deep .v-time-picker-title__time{
  color: black
}
::v-deep .v-time-picker-title__ampm{
  color: black;
  margin-bottom:0;
}
/* ::v-deep .v-time-picker-title{
    border-bottom: 1px solid rgb(244,244,244);
    border-top: 1px solid rgb(244,244,244);
} */
::v-deep .v-date-picker-table th {
    font-size: 15px;
    color: rgba(143, 155, 179, 1) !important;
    height: 44px;
    border-bottom: 1px solid rgb(244,244,244);
    border-top: 1px solid rgb(244,244,244);
}

::v-deep .v-date-picker-table--date {
    height: 290px;
    padding: 0;
}

::v-deep .v-date-picker-table .v-btn {
    height: 44px;
    width: 44px;
    font-size: 15px !important;
    font-weight: 600;
    border-radius: 4px !important;
}
::v-deep .v-date-picker-table__current{
  border: 1px solid black;
  color: white;
  background-color: rgba(0,0,0,.8);
}
::v-deep .v-date-picker-table .v-btn.v-btn--disabled {
    color:rgba(143, 155, 179, 1) !important;
}

::v-deep .v-date-picker-table .v-btn.v-btn--active {
    background-color: rgba(102, 144, 255, 1);
}

::v-deep .v-date-picker-table--date .v-date-picker-table__events{
  bottom: 12px;
}

::v-deep .v-date-picker-table__events > div{
  width: 5px;
  height: 5px;
}

.v-text-field--outlined >>> fieldset {
  border-color: rgba(0,0,0,.5);
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