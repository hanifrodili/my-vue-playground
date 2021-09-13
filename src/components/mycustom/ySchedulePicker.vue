<template lang="pug">
  .y-schedule-picker.mx-auto(:style="'max-width:'+width + ';' + 'height:'+height" :class="{ 'theme--light': theme === 'light', 'theme--dark': theme === 'dark' }")
    v-row.ma-0(style="height:100%;")
      v-col.pa-0.schedule-container(cols="6")
        div.text-left.schedule-item.date(v-for="(item,index) in dateTimeList" :key="index" @click="selectDate(item.date,index)" :class="{ active: selectedDate === item.date }")
         p {{convertDate(item.date)}}
      v-col.pa-0.schedule-container(cols="6")
        div.text-right.schedule-item.time(v-for="(item,index) in dateTimeList[selectedDateIndex].time" :key="index" @click="selectTime(item)" :class="{ active: selectedTime === item }")
          p {{covertTime(item)}}
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "100px"
    },
    daysCount: {
      type: Number,
      default: 30
    },
    timeInterval: {
      type: Number,
      default: 15
    },
    openingHour: {
      type: Array,
      default: () => ['08:00','20:00']
    }
  },
  mounted(){
    this.getDateTime(this.daysCount)
    if (this.$vuetify.theme.dark) {
      this.theme = 'dark'
    }
  },
  data: () => ({
    dateTimeList: [{date: '',time:['']}],
    selectedDateIndex: 0,
    selectedDate: '',
    selectedTime: '',
    theme: 'light'
  }),
  methods:{
    addLeadingZero(str,count){
      str = String(str)
      const len = str.length
      if (len < count) {
        for (let index = 0; index < count-len; index++) {
          str = '0' + str
        }
        return str
      }
      return str
    },
    selectDate(val,index){
      this.selectedDateIndex = index
      this.selectedDate = val
      let schedule = this.selectedDate + ' ' + this.selectedTime
      this.$emit('input', schedule)
    },
    selectTime(val){
      if (val === '') {
        return
      }
      this.selectedTime = val
      let schedule = this.selectedDate + ' ' + this.selectedTime
      this.$emit('input', schedule)
    },
    getTimeRanges(interval, language = window.navigator.language, open, close, day) {
      // day 0 = today
      const ranges = [];
      const [openHour,openMinute] = open.split(':')
      const [closeHour,closeMinute] = close.split(':')
      const current = new Date()
      const insert = new Date()
      const end = new Date()
      const format = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
          insert.setHours(parseInt(openHour), parseInt(openMinute))
          end.setHours(parseInt(closeHour),parseInt(closeMinute))
          insert.setMinutes(minutes)
          insert.setSeconds(0)
          if (insert<end && insert>current && day === 0) {
            ranges.push(insert.toLocaleTimeString(language, format))
          // console.log(insert,end);
          }
          if(day > 0 && insert<end){
            ranges.push(insert.toLocaleTimeString(language, format))
          }
      }

      return ranges;
    },
    getDateTime(days){
      this.dateTimeList = []
      for (let index = 0; index < days; index++) {
        let day = {}
        const date = new Date(new Date().getTime()+(index*24*60*60*1000))
        const formattedDate = date.getFullYear()+'-'+this.addLeadingZero((date.getMonth()+1),2)+'-'+this.addLeadingZero(date.getDate(),2)
        day.date = formattedDate
        day.time = this.getTimeRanges(this.timeInterval,'my',this.openingHour[0],this.openingHour[1],index)
        this.dateTimeList.push(day)
      }
      // console.log(this.dateTimeList);
    },
    convertDate(val){
      const today = new Date(new Date().getTime()+(0*24*60*60*1000))
      const tomorrow = new Date(new Date().getTime()+(1*24*60*60*1000))
      const todaydate = today.getFullYear()+'-'+this.addLeadingZero((today.getMonth()+1),2)+'-'+this.addLeadingZero(today.getDate(),2)
      const tomorrowdate = tomorrow.getFullYear()+'-'+this.addLeadingZero((tomorrow.getMonth()+1),2)+'-'+this.addLeadingZero(tomorrow.getDate(),2)
      if (val === todaydate) {
        return 'Today'
      }
      if (val === tomorrowdate) {
        return 'Tomorrow'
      }
      if (val === '') {
        return '-'
      }
      const d = new Date(val);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
      let newDate = days[d.getDay()] + ', ' + this.addLeadingZero(d.getDate(),2) + ' ' + months[d.getMonth()]
      return newDate
    },
    covertTime(val){
      if (val === '') {
        return 'Select Date'
      }
      const insert = new Date()
      const format = {
        hour: 'numeric',
        minute: 'numeric'
      }
      const hour= val.split(':')[0]
      const min= val.split(':')[1]
      insert.setHours(hour)
      insert.setMinutes(min)
      insert.setSeconds(0)
      let newTime = insert.toLocaleTimeString('en',format)
      if(newTime.split(':')[0].length === 1){
        return '0'+newTime
      }else{
        return newTime
      }
      
    }
  }
}
</script>
<style scoped>
.y-schedule-picker{
  padding: 4px 16px;
  width: 100%;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.schedule-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.schedule-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding-top: 25%;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.row{
  position: relative;
}
.row:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events   : none;
  background : linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%);
  width    : 100%;
  height   : 100%;
}
.y-schedule-picker.theme--dark .row:after{
   background : linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 20%, rgba(18,18,18,0) 80%, rgba(18,18,18,1) 100%);
}

.schedule-item{
  padding: 5px;
  scroll-snap-align: center;
  /* scroll-snap-stop: always; */
}
.schedule-item p{
  margin-bottom: 0;
  font-size: 15px;
}
.schedule-item.date.active{
  background-color: rgba(0,0,0,.3);
  border-radius: 5px 0 0 5px;
}
.schedule-item.time.active{
  background-color: rgba(0,0,0,.3);
  border-radius: 0 5px 5px 0;
}
.schedule-item:first-child{
  margin-top: 32px;
}
</style>