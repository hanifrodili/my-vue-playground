<template lang="pug">
  .top-section
    div.section-90
      v-row
        v-col.col(cols="12" md="6")
          .main-heading-text.mt-5
            | A Better way to
            br
            span.typed-words.text-primary
          p.main-body-text
            | Centered around fully customizable spaces, Gather makes spending time with your communities just as easy as real life
          .space32
          button.btn.bg-primary.btn-1.light Get Started
        v-col.col(cols="12" md="6")
          .media-container-1.ratio-6x4
            //- img(src='https://via.placeholder.com/600x400?text=Video Anda' width='100%' alt='')
            video(height="100%" loop autoplay muted)
              source(src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4")
</template>
<script>
import Typed from '@/assets/js/typed.min.js'

export default {
  name: 'TopSection',
  mounted(){
    new Typed(".typed-words", {
      strings: ["", "Gather", "work", "host events", "learn", "hang out"],
      typeSpeed: 111,
      backSpeed: 74,
      backDelay: 1600,
      startDelay: 1000,
      loop: true,
      showCursor: false,
      cursorChar: "|",
      attr: null,
    });
  }
}
</script>