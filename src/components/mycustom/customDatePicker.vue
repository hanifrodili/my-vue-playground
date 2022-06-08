<template lang="pug">
  .my-date-picker
    label.pa-4 Range
    v-date-picker.mb-1(v-model="dates"  header-color="basic100" color="info400" style="width:100%" :events="arrayEvents" event-color="#848484" range)
    p.text-center {{dates[0]}} → {{dates[1]}}
</template>
<script>
export default {
  name: 'MyDatePicker',
  data: () => ({
    arrayEvents: null,
    dates: ['2022-01-10', '2021-12-20'],
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
@font-face {
  font-family: "Material Design Icons";
  src: local("Material Design Icons"),
   url(../../assets/materialdesignicons-webfont.ttf) format("truetype");
}
/* @import url('../../assets/materialdesignicons-webfont.ttf'); */
</style>
<style lang="scss" scoped>
.my-date-picker{
  max-width: 327px;
  width: 100%;
  margin: auto;
  padding: 10px 0;
}
::v-deep{
  .v-btn:before{
    background-color: transparent !important;
  }
  .v-date-picker-title__year{
    display: none;
  }
  .v-date-picker-title__date {
    display: none;
  }
  .v-picker__title {
    /* color: black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px; */
    padding: 0;
  }
  .v-picker__body{
    width: 100% !important;
  }
  /* ::v-deep .v-picker__title__btn{
    border-top: 1px solid var(--v-basic300);
    border-bottom: 1px solid rgba(0,0,0,.5);
    padding: 8px 0;
    margin:0;
  } */

  .v-date-picker-header{ /*month and arrow */
    /* border-bottom: 1px solid rgb(244,244,244);
    border-top: 1px solid rgb(244,244,244); */
    height: 20px;
  }

  .v-date-picker-header > button{
    position: absolute !important;
    width: 24px;
    border-radius: 5px;
    color: black !important; /*change month and arrow color*/
  }

  .v-date-picker-header > button[aria-label="Previous month"],
  .v-date-picker-header > button[aria-label="Previous year"]{
    right: 30px;
    color: rgba(62,62,62,.5) !important;
  }

  .v-date-picker-header > button[aria-label="Next month"],
  .v-date-picker-header > button[aria-label="Next year"]{
    right: 10px;
    color: rgba(62,62,62,.5) !important;
  }

  .v-date-picker-header > div{
    position: absolute !important;
  }
  .v-date-picker-header .v-date-picker-header__value button{
    vertical-align: middle;
    padding: 0;
  }
  .v-date-picker-header .v-date-picker-header__value button::after{
    font-family: "Material Design Icons";
    content: "\F0142";
    font-size: 24px;
    font-weight: normal;
    margin-left: 14px;
    color: rgba(62,62,62,.5);
  }
  .v-date-picker-table th {
    font-size: 15px;
    color: #19181A !important; /*change days name color text*/
    height: 44px;
    border-bottom: none;
    /* border-bottom: 1px solid rgb(244,244,244); */
    border-top: none;
    /* border-top: 1px solid rgb(244,244,244); */
  }

  .v-date-picker-table--date {
    height: 290px;
    padding: 0;
  }

  .v-date-picker-table .v-btn {
    height: 40px;
    width: 100%;
    font-size: 13px !important;
    font-weight: 600;
    border-radius: 10px !important;
  }
  .v-date-picker-table__current{
    border: 2px solid #333; /*change current date color border*/
    color: white; /*change current date color text*/
    background-color: #333; /*change current date color bg*/
  }
  .v-date-picker-table .v-btn.v-btn--disabled {
    color:rgba(143, 155, 179, 1) !important; /*change disabled date color text*/
  }

  .v-date-picker-table .v-btn.v-btn--active {
    background-color: #6153FF; /*change active/selected date color bg*/
    color: #fff;
  }

  .v-btn.v-btn--active .v-date-picker-table__events > div {
    background-color: #fff !important;
  }

  .v-date-picker-table--date .v-date-picker-table__events{
    bottom: 12px;
  }

  .v-date-picker-table__events > div{
    width: 5px;
    height: 5px;
  }

  .v-date-picker-table--month td .v-btn {
    margin: 0 auto;
    max-width: 140px;
    min-width: 40px;
    width: 100%;
    font-size: 15px !important;
    font-weight: 600 !important;
  }
  .v-date-picker-years {
    font-size: 15px;
    font-weight: 600;
    height: 290px;
    list-style-type: none;
    overflow: auto;
    text-align: center;
  }
  .v-ripple__container{
    display: none;
  }
}
</style>