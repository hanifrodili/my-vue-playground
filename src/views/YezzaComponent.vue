<template lang="pug">
  .landing-test
    //- intro
    //- text-block
    //- text-image
    template(v-for="block in content.body")
      component(:is="block.component" :key="block._uid")
</template>
<script>
import Intro from '@/components/yezzabuilder/Intro.vue'
import TextBlock from '@/components/yezzabuilder/Text.vue'
import TextImage from '@/components/yezzabuilder/TextImage.vue'
export default {
  name: 'LandingTest',
  components: { Intro, TextBlock, TextImage },
  data: () => ({
    content: {
        body: [
          {
            _uid: "yz-00001",
            component: "Intro"
          },
          {
            _uid: "yz-00002",
            component: "TextBlock"
          },
          {
            _uid: "yz-00003",
            component: "TextImage"
          },
          {
            _uid: "yz-00002",
            component: "TextBlock"
          },
        ]
      }
    // userInput: {
    //   title: {
    //     value: 'Tell people about what makes your site special.'
    //   },
    //   btnText: {
    //     value: 'See More'
    //   },
    //   btnBgColor: {
    //     value: 'grey'
    //   },
    //   btnTextColor: {
    //     value: 'white'
    //   },
    //   btnBorderRadius: {
    //     value: '0px'
    //   },
    //   fontColor: {
    //     value: '#000000'
    //   },
    //   bgColor: {
    //     value: '#ffffff'
    //   },
    //   blockPadding: {
    //     value: '200px 0'
    //   }
    // }
  })
}
</script>
