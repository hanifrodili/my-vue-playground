<template lang="pug">
  .craftjs
    Editor(component='div' :resolverMap="resolverMap" v-if="$vuetify.breakpoint.width > 700")
      Navbar
      ElementSidebar
      Preview
      SettingSidebar
    div(v-if="$vuetify.breakpoint.width <= 700")
      p.text-center.mt-5 Not Small Screen Friendly 😬
</template>

<script>
import { Editor, Canvas } from '@v-craft/core'
import SettingSidebar from '@/components/vcraft/SettingSidebar.vue';
import ElementSidebar from '@/components/vcraft/ElementSidebar.vue';
import Navbar from '@/components/vcraft/Navbar.vue';
import Preview from '@/components/vcraft/Preview.vue';
import Container from '@/components/vcraft/elements/Container.vue';
import Paragraph from '@/components/vcraft/elements/Paragraph.vue';
import Heading from '@/components/vcraft/elements/Heading.vue';
import Picture from '@/components/vcraft/elements/Picture.vue';
import Carousel from '@/components/vcraft/elements/Carousel.vue';
import demoData from './demoData';

export default {
  name: 'App',
  components: {
    Editor, SettingSidebar, ElementSidebar, Navbar, Preview,
  },
  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph, Heading, Picture, Carousel,
      },
      demoData
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

html {
  overflow: hidden;
}

body {
  background: #eee;
  margin: 0;
}
</style>
