<template lang="pug">
  div
    input.form-control(v-model="content" )
</template>
<script>
import { settingMixin } from '@v-craft/core'

export default {
  name: "ParagraphSetting",
  mixins: [settingMixin],
  computed: {
    content: {
      get() {
        return this.elementProps.content
      },
      set(value) {
        this.updateContent(value)
      },
    },
  },
  methods: {
    updateContent(content) {
      this.elementPropsSetter({ content })
    },
  },
}
</script>