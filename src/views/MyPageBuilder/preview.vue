<template lang="pug">
.mypage-builder-preview
  template(v-for="(components, index) in userComponents")
      component(:is="components.component" :configs="components.config" :key="components._uid")
  v-row.ma-0(v-if="userComponents.length === 0" style="margin-top:100px !important")
        v-col.text-center(cols='12')
          v-icon.black--text(style="font-size:100px") mdi-package-variant
          h3 Oops.. Nothing to see here.
</template>

<script>
import MyPageBlocks from '@/components/mypagebuilder/blocks'

export default {
  name: 'MyPageBuilderPreview',
  components: { ...MyPageBlocks },
  data: ()=>({
    userComponents: []
  }),
  mounted(){
    const savedComponents = window.localStorage.getItem('userComponents')
    if (savedComponents !== null && savedComponents !== ''){
      this.userComponents = JSON.parse(savedComponents)
    }
  }
}
</script>