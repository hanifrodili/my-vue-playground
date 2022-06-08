<template lang="pug">
.MyFroala
  froala(:tag="'textarea'" :config="config" v-model="model")
  froalaView(v-model="model")
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg'

export default {
  name: 'MyFroala',
  components: { VueFroala },
  data:()=>({
    config: {
        events: {
          'froalaEditor.initialized': function () {
          }
        }
      },
      model: 'Edit Your Content Here!'
  })
}
</script>

<style lang="scss" scoped></style>
