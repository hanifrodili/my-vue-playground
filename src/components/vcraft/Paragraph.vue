<template lang="pug">
  p {{content}}
</template>
<script>
import ParagraphSetting from '@/components/vcraft/ParagraphSetting.vue'

export default {
  name: 'Paragraph',
  props: {
    content: String
  },
  craft: {
    defaultProps: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    settings: {
      ParagraphSetting,
    }
  },
}
</script>