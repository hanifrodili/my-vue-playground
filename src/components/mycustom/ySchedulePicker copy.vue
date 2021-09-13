<template lang="pug">
  .y-schedule-picker.mx-auto(:style="'width:'+width + ';' + 'height:'+height")
    v-row.ma-0(style="height:100%")
      v-col.pa-0.schedule-container(cols="6")
        div.text-left.schedule-item.date(v-for="(n,index) in days" :key="index" @click="selectDate(getDateStr(index))" :class="{ active: date === getDateStr(index) }")
         p {{convertFormat(getDateStr(index))}}
      v-col.pa-0.schedule-container(cols="6")
        div.text-right.schedule-item.time(v-for="(n,index) in minsleft/minsDiff + 1" :key="index" @click="selectTime(getTimeStr(minsDiff*index))" :class="{ active: time === getTimeStr(minsDiff*index) }")
          p {{getTimeStr(minsDiff*index)}}
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
    days: {
      type: Number,
      default: 30
    },
    minsDiff: {
      type: Number,
      default: 15
    }
  },
  mounted(){
    let selectedDate = ''
    let cdate = this.getDateStr(0)
    let ctime = this.getTimeStr(0)
    let currentDateTime = cdate + ' ' + ctime
    if (this.value === '') {
      selectedDate = currentDateTime
    }else{
      selectedDate = this.value
    }
    this.$emit('input', selectedDate)
    this.date = selectedDate.split(" ")[0]
    this.time = selectedDate.split(" ")[1]
    let date1 = new Date(currentDateTime);
    let date2 = new Date(cdate + ' ' + '20:30:00')
    let diff = date2.getTime() - date1.getTime()
    let msec = diff
    this.minsleft = Math.ceil(msec / 1000 / 60 )
    // msec -= hh * 1000 * 60 * 60;
    // var mm = Math.floor(msec / 1000 / 60);
    // msec -= mm * 1000 * 60;
    // var ss = Math.floor(msec / 1000);
    // msec -= ss * 1000;
  },
  data: () => ({
    date: '',
    time: '',
    minsleft: 0
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
    selectDate(val){
      this.date = val
      let schedule = this.date + ' ' + this.time
      this.$emit('input', schedule)
    },
    selectTime(val){
      this.time = val
      let schedule = this.date + ' ' + this.time
      this.$emit('input', schedule)
    },
    getToday(days){
      let date = new Date(new Date().getTime()+(days*24*60*60*1000))
      return date
    },
    getDateStr(days){
      let date = this.getToday(days)
      return date = date.getFullYear()+'-'+this.addLeadingZero((date.getMonth()+1),2)+'-'+this.addLeadingZero(date.getDate(),2)
    },
    getTimeStr(mins){
      let date = this.getToday(0)
      let hour = date.getHours()
      let min = date.getMinutes() + mins
      let remain = this.minsDiff - (min % this.minsDiff)
      if (remain === 0) {
        min += this.minsDiff
      }else{
        min += remain
      }
      if (min > 59) {
        let addhour = Math.trunc(min/60)
        min -= (60*addhour)
        hour += addhour
      }
      // if (mins >= 60) {
      //   let addhour = Math.trunc(mins/60)
      //   hour += addhour
      //   min = mins - (60*addhour)
      // }
      let time = this.addLeadingZero(hour,2) + ':' + this.addLeadingZero(min,2) + ':00'
      return time
    },
    convertFormat(val){
      let today = this.getDateStr(0)
      let tomorrow = this.getDateStr(1)
      if (val === today) {
        return 'Today'
      }
      if (val === tomorrow) {
        return 'Tomorrow'
      }
      const d = new Date(val);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
      let newDate = days[d.getDay()] + ', ' + this.addLeadingZero(d.getDate(),2) + ' ' + months[d.getMonth()]
      return newDate
    }
  }
}
</script>
<style scoped>
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
  background-image : linear-gradient(to bottom, 
                    rgba(255,255,255, 1) 1%,
                    rgba(255,255,255, 0), 
                    rgba(255,255,255, 1) 99%);
  width    : 100%;
  height   : 100%;
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
</style>