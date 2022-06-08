<template lang="pug">
.scrollTrigger
  div.img-container
    img(src='https://via.placeholder.com/200x400?text=Video Anda' alt='')
    img(src='https://via.placeholder.com/300x500?text=Video Anda' alt='')
</template>

<script>
export default {
  name: 'scrollTrigger',
  mounted() {
    window.addEventListener('scroll',
      this.testScroll
    );   
  },
  methods: {
    testScroll() {
      const parentPos = document.getElementsByClassName('scrollTrigger')[0].getBoundingClientRect()
      const elPos = document.getElementsByClassName('img-container')[0].getBoundingClientRect()
      let relativePos = elPos.top - parentPos.top
      console.log(relativePos);
    }
  }
}
</script>

<style scoped>
.scrollTrigger{
  margin-top: 800px;
}
.img-container{
  display: flex;
  justify-content: space-between;
}
.img-container img{
  height: fit-content;
}
.img-container img:nth-child(1){
  transform: translateX(50px);
  box-shadow: 4px 6px 5px 0px rgba(0,0,0,0.32);
  -webkit-box-shadow: 4px 6px 5px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: 4px 6px 5px 0px rgba(0,0,0,0.32);
}
.img-container img:nth-child(2){
  transform: translateX(-50px);
  box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.32);
  -webkit-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.32);
}
</style>
