<template lang="pug">
  .my-schedule-picker
    y-schedule-picker.mb-2(v-model="dateTime" :time-interval="timeInterval" :days-count="days" :opening-hour="openingHour" width="100%")
    p.text-center {{dateTime}}
</template>
<script>
import ySchedulePicker from '@/components/mycustom/ySchedulePicker.vue'

export default {
  name: 'MySchedulePicker',
  components: {ySchedulePicker},
  data: ()=>({
    dateTime: 'Not selected',
    timeInterval: 30,
    days: 30,
    openingHour: ['09:00','20:30']
  })
}
</script>