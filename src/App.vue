<template lang="pug">
  v-app.main-font()
    nav-bar(style="z-index:200" v-if="!(['YezzaBuilderPreview','GatherPage'].includes($route.name))")
    v-main(:style="!(['YezzaBuilderPreview','GatherPage'].includes($route.name)) ? 'padding-top:50px' : ''")
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
