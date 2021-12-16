<template lang="pug">
.qty-picker
  v-row(style="height:100%")
    div.btn-container
      div.dec-btn(@click="changeValue('dec')")
        svg(width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(d="M1 7L13 7" stroke="#848484" stroke-width="2" stroke-linecap="round")
    div
      div.number-box
        p.mb-0 {{qtyValue}}
    div.btn-container
      div.inc-btn(@click="changeValue('inc')")
        svg(width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(d="M7 1V13" stroke="#848484" stroke-width="2" stroke-linecap="round")
          path(d="M1 7L13 7" stroke="#848484" stroke-width="2" stroke-linecap="round")
</template>

<script>
export default {
  name: 'qtyPicker',
  data: ()=>({
    qtyValue: 0,
    minValue: 0,
    maxValue: 999
  }),
  methods: {
    changeValue(type) {
      if (type === 'inc') {
        if(this.qtyValue < this.maxValue)
          this.qtyValue++
      }
      if (type === 'dec') {
        if(this.qtyValue > this.minValue)
          this.qtyValue--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qty-picker{
  max-width: 160px;
  height: 48px;
  margin: auto;
}
.inc-btn,
.dec-btn{
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 0.75px solid #c1c1c1;
  border-radius: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-container{
  display: flex;
  align-items: center;
}
.number-box{
  margin: 0 16px;
  width: 64px;
  height: 100%;
  background: #FFFFFF;
  border: 2px solid #333333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number-box p{
  font-size: 16px;
  line-height: 24px;
}
</style>
