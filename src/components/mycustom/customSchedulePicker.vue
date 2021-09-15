<template lang="pug">
  .my-schedule-picker
    y-schedule-picker.mb-2(v-model="dateTime" :params='params' bg-active='#e6edff' width="100%")
    p.text-center {{dateTime ? dateTime: 'Not Selected'}}
</template>
<script>
import ySchedulePicker from '@/components/mycustom/ySchedulePicker.vue'

export default {
  name: 'MySchedulePicker',
  components: {ySchedulePicker},
  data: ()=>({
    dateTime: '2021-10-07 11:30:00',
    params: {
      timeInterval: 30,
      daysCount: 30,
      openingHour: ['09:00','20:30'],
      daysOff: ['2021-09-16','2021-10-01','2021-10-02','2021-10-03']
    }
  })
}
</script>