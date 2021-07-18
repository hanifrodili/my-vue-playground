<template lang="pug">
  v-app-bar(app color='#009688' dark)
      div
        router-link(to="/" )
          v-img(:src="require('@/assets/my-playground-logo.png')" contain max-width='120' alt='My Playground Logo')
      v-spacer
      div.d-flex(v-if='$vuetify.breakpoint.width > 500')
        router-link(to='/')
          v-btn(large depressed text)
            span.mr-2 Home
        router-link(to='/about')
          v-btn(large depressed text)
            span.mr-2 About
        v-menu(offset-y style="z-index:999" transition="slide-y-transition")
          template(v-slot:activator="{ on }")
            div.mx-0.mb-0(icon small v-on="on")
              v-btn(large depressed text)
                | Page Builder
                v-icon mdi-chevron-down
          v-list.py-0
            router-link(to="/grapesjs" )
              v-list-item.py-3()
                v-list-item-title
                  | GrapesJS
            router-link(to="/vcraftjs" )
              v-list-item.py-3()
                v-list-item-title
                  | VCraftJS
            router-link(to="/yezzabuilder" )
              v-list-item.py-3()
                v-list-item-title
                  | Yezza Builder
        router-link(to='/mycustom')
          v-btn(large depressed text)
            span.mr-2 Custom Vuetify
      v-menu(offset-y  left bottom v-if='$vuetify.breakpoint.width<=500' transition="slide-y-transition")
        template(v-slot:activator='{ on, attrs }')
          v-btn(icon v-bind='attrs' v-on='on')
            v-icon mdi-xml
        v-list
          router-link(to='/')
            v-list-item
              v-list-item-title Home
          router-link(to='/about')
            v-list-item
              v-list-item-title About
          v-menu(offset-y transition="slide-y-transition")
            template(v-slot:activator="{ on }")
              v-list-item(v-on="on")
                v-list-item-title(icon)
                  | Page Builder
                  v-icon mdi-chevron-down
            v-list.py-0
              router-link(to="/grapesjs" )
                v-list-item.pa-3()
                  v-list-item-title
                      | GrapesJS
              router-link(to="/vcraftjs" )
                v-list-item.pa-3()
                  v-list-item-title
                      | VCraftJS
              router-link(to="/yezzabuilder" )
                v-list-item.pa-3()
                  v-list-item-title
                      | Yezza Builder
          router-link(to='/mycustom')
            v-list-item
              v-list-item-title Custom Vuetify
</template>
<script>
export default {
  name: 'TopNavBar'
}
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>