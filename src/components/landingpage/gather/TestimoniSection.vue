<template lang="pug">
  .testimoni-section
    div.section-90(style="background-color: #f7f5f4;")
      v-carousel(cycle :height="$vuetify.breakpoint.width < 960 ? '212' : '270'" )
        v-carousel-item
          .d-block.testimoni-item
            img(src='https://via.placeholder.com/100x100?text=Gambar Anda' alt='...')
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum blanditiis voluptatem facilis cupiditate tenetur fuga iusto.
        v-carousel-item
          .d-block.testimoni-item
            img(src='https://via.placeholder.com/100x100?text=Gambar Anda' alt='...')
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum blanditiis voluptatem facilis cupiditate tenetur fuga iusto.
        v-carousel-item
          .d-block.testimoni-item
            img(src='https://via.placeholder.com/100x100?text=Gambar Anda' alt='...')
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum blanditiis voluptatem facilis cupiditate tenetur fuga iusto.
</template>
<script>
export default {
  name: "TestimoniSection"
}
</script>
<style scoped>
::v-deep .v-carousel__controls{
  /* margin-bottom: -40px; */
  background: transparent;
}
@media (max-width: 959px){
  ::v-deep .v-window__prev,
  ::v-deep .v-window__next {
    display: none;
  }
}
::v-deep .v-window__prev,
::v-deep .v-window__next {
    background: rgba(0, 0, 0, 0.0) !important;
    border-radius: 50%;
    margin: 0 16px;
    /* top: calc(94.5% - 20px) !important; */
    z-index: 1 !important;
}
::v-deep .theme--dark.v-btn.v-btn--icon {
  color: #000000 !important;
}
::v-deep .v-btn__content > .mdi-chevron-right,
::v-deep .v-btn__content > .mdi-chevron-left{
  font-size: 45px !important;
}
</style>