<template lang="pug">
.grapesjs
  div(id="gjs" v-if="$vuetify.breakpoint.width > 700" )
  div(v-if="$vuetify.breakpoint.width <= 700")
    p.text-center.mt-5 Not Small Screen Friendly 😬
</template>
<script>
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
// import 'grapesjs-blocks-basic'
// import 'grapesjs-navbar';
// import 'grapesjs-component-countdown';
// import 'grapesjs-plugin-forms';
// import 'grapesjs-plugin-export';
// import 'grapesjs-aviary';
// import 'grapesjs-plugin-filestack';
import 'grapesjs-preset-webpage';

export default {
  name: 'GrapesJS',
  mounted () {
    grapesjs.init({
      container: '#gjs',
      height: '100vh',
      width: 'auto',
      plugins: [
        // 'gjs-blocks-basic',
        // 'gjs-navbar',
        // 'gjs-component-countdown',
        // 'gjs-plugin-forms',
        // 'gjs-plugin-export',
        // 'gjs-aviary',
        // 'gjs-plugin-filestack'
        'gjs-preset-webpage'
      ]
    })
  }
}
</script>
