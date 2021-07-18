<template lang="pug">
  v-app.main-font
    nav-bar(style="z-index:200" v-if="!['YezzaBuilderPreview'].includes($route.name)")
    v-main
      router-view
</template>

<script>
import NavBar from '@/components/TopBar.vue'
export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
</style>
