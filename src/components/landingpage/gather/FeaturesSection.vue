<template lang="pug">
  .features-section
    div.section-120.bg-tertiary.features
      v-row
        v-col.col.pt-5(cols="12" md="5")
          button.btn.bg-secondary.text-tertiary.btn-2.mt-5.mb-4 Fluid Video Chat
          .section-heading-text.text-secondary Make virtual interactions more human
          .section-body-text.text-white
            | Video chat shouldn&rsquo;t be awkward. Walking in and out of conversations feels natural and seamless in Gather.
        v-col.col(cols="12" md="7")
          .media-container-2.ratio-6x4
            //- img(src='https://via.placeholder.com/600x400?text=Video Anda' width='100%' alt='')
            video(height="100%" loop autoplay muted)
              source(src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4")
      v-row.reverse
        v-col.col.pt-5(cols="12" md="5")
          button.btn.bg-secondary.text-tertiary.btn-2.mt-5.mb-4 Fluid Video Chat
          .section-heading-text.text-secondary Make virtual interactions more human
          .section-body-text.text-white
            | Video chat shouldn&rsquo;t be awkward. Walking in and out of conversations feels natural and seamless in Gather.
        v-col.col(cols="12" md="7")
          .media-container-2.ratio-6x4
            //- img(src='https://via.placeholder.com/600x400?text=Video Anda' width='100%' alt='')
            video(height="100%" loop autoplay muted)
              source(src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4")
      v-row
        v-col.col.pt-5(cols="12" md="5")
          button.btn.bg-secondary.text-tertiary.btn-2.mt-5.mb-4 Fluid Video Chat
          .section-heading-text.text-secondary Make virtual interactions more human
          .section-body-text.text-white
            | Video chat shouldn&rsquo;t be awkward. Walking in and out of conversations feels natural and seamless in Gather.
        v-col.col(cols="12" md="7")
          .media-container-2.ratio-6x4
            //- img(src='https://via.placeholder.com/600x400?text=Video Anda' width='100%' alt='')
            video(height="100%" loop autoplay muted)
              source(src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4")
</template>
<script>
export default {
  name: "FeaturesSection"
}
</script>