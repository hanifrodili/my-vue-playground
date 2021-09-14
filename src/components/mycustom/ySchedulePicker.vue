<template lang="pug">
  .y-schedule-picker.mx-auto(:style="cssProps")
    v-row.ma-0(style="height:100%;")
      v-col.pa-0.schedule-container(cols="7")
        div.text-left.schedule-item.date(v-for="(item,index) in dateTimeList" :key="index"  :class="{ active: selectedDate === item.date }" :id="'date'+index")
         p {{convertDate(item.date)}}
      v-col.pa-0.schedule-container(cols="5")
        div.text-right.schedule-item.time(v-for="(item,index) in dateTimeList[selectedDateIndex].time" :key="index"  :class="{ active: selectedTime === item }" :id="'time'+index")
          p {{covert24To12(item)}}
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
      default: "151px"
    },
    bgActive: {
      type: String,
      default: '#dedede'
    },
    params: {
      type: Object,
      default: () => ({
        timeInterval: 15,
        daysCount: 7,
        openingHour: ['08:00','22:00'],
      })
    }
  },
  computed: {
    cssProps () {
      return {
        '--bg-active': this.bgActive,
        '--el-width': this.width,
        '--el-height': this.height
      }
    },
  },
  mounted(){
    const [date,time] = this.value.split(' ')
    this.selectedDate = date ? date : ''
    this.selectedTime = time ? time : ''
    this.getDateTime(this.params.daysCount)
    this.setSelected()
    // const item = document.getElementById('date0')
    const container = document.getElementsByClassName('schedule-container')[1]
    const itemTop = container.offsetTop
    // this.selectPosTop = itemTop
    this.selectPosTop = itemTop + (container.offsetHeight/2) - (35/2)
    this.selectPosBottom = itemTop + (container.offsetHeight/2) + (35/2)
    
  },
  data: () => ({
    dateTimeList: [{date: '',time:['']}],
    selectedDateIndex: 0,
    selectedDate: '',
    selectedTime: '',
    selectPosTop: 0,
    selectPosBottom: 0
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
      setTimeout(() => {
          const selected = document.getElementById('date'+this.selectedDateIndex)
          const container = document.getElementsByClassName('schedule-container')[0]
          const topPos = selected.offsetTop
          const halfPos = topPos - (container.offsetHeight/2) + (selected.offsetHeight/2)
          container.scrollTop = halfPos
        }, 1);
      let schedule = this.selectedDate + ' ' + this.selectedTime
      this.$emit('input', schedule)
    },
    selectTime(val){
      if (val === '') {
        return
      }
      this.selectedTime = val
      const selecteTimeIndex = this.dateTimeList[this.selectedDateIndex].time.findIndex(x => x === this.selectedTime)
      setTimeout(() => {
          const selected = document.getElementById('time'+selecteTimeIndex)
          const container = document.getElementsByClassName('schedule-container')[1]
          const topPos = selected.offsetTop
          const halfPos = topPos - (container.offsetHeight/2) + (selected.offsetHeight/2)
          container.scrollTop = halfPos
        }, 1);
      let schedule = this.selectedDate + ' ' + this.selectedTime
      this.$emit('input', schedule)
    },
    getTimeRanges(interval, open, close, day) {
      // day 0 = today
      const ranges = [];
      const [openHour,openMinute] = open.split(':')
      const [closeHour,closeMinute] = close.split(':')
      const current = new Date()
      const insert = new Date()
      const end = new Date()
      for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
        insert.setHours(parseInt(openHour), parseInt(openMinute))
        end.setHours(parseInt(closeHour),parseInt(closeMinute))
        insert.setMinutes(minutes)
        let wtime = this.addLeadingZero(insert.getHours(),2)+':'+this.addLeadingZero(insert.getMinutes(),2)+':00'
        if (insert<=end && insert>current && day === 0) {
          ranges.push(wtime)
        // console.log(insert,end);
        }
        if(day > 0 && insert<=end){
          ranges.push(wtime)
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
        day.time = this.getTimeRanges(this.params.timeInterval,this.params.openingHour[0],this.params.openingHour[1],index)
        this.dateTimeList.push(day)
      }
    },
    setSelected(){
      if (this.selectedDate === '') {
        this.selectedDate = this.dateTimeList[0].date
      }else{
        this.selectedDateIndex = this.dateTimeList.findIndex(x => x.date === this.selectedDate)
        setTimeout(() => {
          const selected = document.getElementById('date'+this.selectedDateIndex)
          const container = document.getElementsByClassName('schedule-container')[0]
          const topPos = selected.offsetTop
          const halfPos = topPos - (container.offsetHeight/2) + (selected.offsetHeight/2)
          container.scrollTop = halfPos
        }, 1);
      }
      if (this.selectedTime === '') {
        this.selectedTime = this.dateTimeList[0].time[0]
      }else{
        const selecteTimeIndex = this.dateTimeList[this.selectedDateIndex].time.findIndex(x => x === this.selectedTime)
        setTimeout(() => {
          const selected = document.getElementById('time'+selecteTimeIndex)
          const container = document.getElementsByClassName('schedule-container')[1]
          const topPos = selected.offsetTop
          const halfPos = topPos - (container.offsetHeight/2) + (selected.offsetHeight/2)
          container.scrollTop = halfPos
        }, 1);
      }
      setTimeout(() => {
        document.getElementsByClassName('schedule-container')[0].addEventListener('scroll', this.scrollToSelectDate);
      }, 500);
      setTimeout(() => {
        document.getElementsByClassName('schedule-container')[1].addEventListener('scroll', this.scrollToSelectTime);
      }, 501);
    },
    covert24To12 (time) { //format 08:00:00
      // Check correct time format and split into components
      time = time.split(':')[0]+':'+time.split(':')[1]
      time = time.match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
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
    scrollToSelectDate(){
      // console.log(this.selectPosTop, this.selectPosBottom);
      const parentPos = document.getElementsByClassName('schedule-container')[0].getBoundingClientRect()
      const dates = document.getElementsByClassName('date')
      dates.forEach((date,index) => {
        const datePos = date.getBoundingClientRect()
        let relativePos = (datePos.top - parentPos.top)
        relativePos = relativePos + (relativePos/2)
        // console.log(relativePos);
        // console.log(date);
        if (relativePos > this.selectPosTop && relativePos < this.selectPosBottom) {
          date.classList.add("active")
          // console.log(this.dateTimeList[index].date);
          this.selectDate(this.dateTimeList[index].date, index)
          // console.log(date);
          // console.log(this.selectPosTop,relativePos,this.selectPosBottom);
        }else{
          date.classList.remove("active")
        }
      });
    },
    scrollToSelectTime(){
      // console.log(this.selectPosTop, this.selectPosBottom);
      const parentPos = document.getElementsByClassName('schedule-container')[1].getBoundingClientRect()
      const times = document.getElementsByClassName('time')
      times.forEach((time,index) => {
        const timePos = time.getBoundingClientRect()
        let relativePos = timePos.top - parentPos.top
        relativePos = relativePos + (relativePos/2)
        // console.log(relativePos);
        // console.log(time);
        if (relativePos > this.selectPosTop && relativePos < this.selectPosBottom) {
          time.classList.add("active")
          // console.log(this.dateTimeList[index].date);
          this.selectTime(this.dateTimeList[this.selectedDateIndex].time[index])
          // console.log(date);
          // console.log(this.selectPosTop,relativePos,this.selectPosBottom);
        }else{
          time.classList.remove("active")
        }
      });
    }
  }
}
</script>
<style scoped>
.y-schedule-picker{
  padding: 4px 16px;
  width: 100%;
  max-width: var(--el-width);
  height: var(--el-height);
  transition: padding .3s ease-in-out;
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
  scroll-behavior: smooth;
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
  padding: 0;
  padding-top: 7px;
  scroll-snap-align: center;
  height: 35px;
  color: #848484;
  /* scroll-snap-stop: always; */
}
.schedule-container:nth-child(1) .schedule-item{
  padding-left: 24px;
}
.schedule-container:nth-child(2) .schedule-item{
  padding-right: 24px;
}
.schedule-item p{
  margin-bottom: 0;
  font-size: 15px;
  user-select: none;
  font-weight: 400;
  /* color: rgb(59, 59, 59); */
}
.schedule-item.active{
  background-color: var(--bg-active);
}
.schedule-item.active p{
  color: black;
  font-weight: 600;
}
.schedule-item.date.active{
  border-radius: 5px 0 0 5px;
}
.schedule-item.time.active{
  border-radius: 0 5px 5px 0;
}
.schedule-item:first-child{
  margin-top: 54px;
}
.schedule-item:last-child{
  margin-bottom: 54px;
}

@media (max-width: 400px){
  .y-schedule-picker{
    padding: 4px 0px;
  }
}
</style>