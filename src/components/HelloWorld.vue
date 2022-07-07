<template lang="pug">
  .hello(style="margin-top:150px")
    h1.text-center.d-flex.flex-column.justify-center(style="font-size:35px; line-height:35px")
      | Welcome to
      br 
      | My Vue Playground
    a(href="https://hanifrodili.com" )
      div.mx-auto.my-5.pa-3(style="background: #2f3765; width: 150px; border-radius: 150px")
        v-img.mx-auto( src="https://ik.imagekit.io/hanifrodili/tr:w-150/the-coder-snapback-03_rX6H5O1xS.png?updatedAt=1629884886670" width="100px" )
    p.text-center.ma-0.mt-5 powered by: 
      a(href="https://vuetifyjs.com/" target="_blank" style="text-decoration:none; font-weight:600") Vuetify
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style scoped>
</style>