<template>
  <div class="about" style="height:100vh">
    <iframe :style="$vuetify.breakpoint.width < 960 ? 'margin-top: 6px' : 'margin-top: 14px'" src="https://hanifrodili.com/index.html" frameborder="0" class="myiframe"></iframe>
  </div>
</template>
<script>
export default {
  data: () => ({
  }),
}
</script>
<style scoped>
.myiframe{
  height: calc(100%);
  width: 100%;
  /* margin-top: 56px; */
}
</style>