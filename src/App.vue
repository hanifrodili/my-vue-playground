<template lang="pug">
  v-app.main-font()
    nav-bar(style="z-index:200" v-if="!(['MyPageBuilderPreview','GatherPage'].includes($route.name))")
    v-main(:style="!(['MyPageBuilderPreview','GatherPage'].includes($route.name)) ? 'padding-top:56px' : ''")
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
