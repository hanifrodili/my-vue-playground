<template lang="pug">
  v-app-bar(dense dark app style="z-index:150;" :style="$vuetify.breakpoint.width < 960 ? 'margin-top:54px !important' : 'margin-top:64px !important'")
    v-spacer
    router-link(to="/yezzabuilder/preview" target="_blank" )
      v-btn(icon)
        v-icon mdi-eye-outline
</template>
<script>
export default {
  name: 'MenuBar'
}
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>
