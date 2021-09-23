<template lang="pug">
  v-app-bar.elevation-0(app color='#ffffff' light)
      div
        router-link(to="/" )
          v-img(src="https://via.placeholder.com/90x40?text=Logo" contain max-width='120' alt='Logo')
      v-spacer
      div.d-flex(v-if='$vuetify.breakpoint.width > 500')
        router-link(to='/')
          v-btn(large depressed text)
            span.mr-2 Menu 1
        //- router-link(to='/about')
          v-btn(large depressed text)
            span.mr-2 About
        v-menu(offset-y style="z-index:999" transition="slide-y-transition")
          template(v-slot:activator="{ on }")
            div.mx-0.mb-0(icon small v-on="on")
              v-btn(large depressed text)
                | Menu 2
                v-icon mdi-chevron-down
          v-list.py-0
            router-link(to="#" )
              v-list-item.py-3()
                v-list-item-title
                  | Sub-Menu 1
            router-link(to="#" )
              v-list-item.py-3()
                v-list-item-title
                  | Sub-Menu  2
        router-link(to='#')
          v-btn(large depressed text)
            span.mr-2 Menu 3
      v-menu(offset-y  left bottom v-if='$vuetify.breakpoint.width<=500' transition="slide-y-transition")
        template(v-slot:activator='{ on, attrs }')
          v-btn(icon v-bind='attrs' v-on='on')
            v-icon mdi-menu
        v-list
          router-link(to='/')
            v-list-item
              v-list-item-title Menu 1
          //- router-link(to='/about')
            v-list-item
              v-list-item-title About
          v-menu(offset-y transition="slide-y-transition")
            template(v-slot:activator="{ on }")
              v-list-item(v-on="on")
                v-list-item-title(icon)
                  | Menu 2
                  v-icon mdi-chevron-down
            v-list.py-0
              router-link(to="#" )
                v-list-item.pa-3()
                  v-list-item-title
                      | Sub-Menu 1
              router-link(to="#" )
                v-list-item.pa-3()
                  v-list-item-title
                      | Sub-Menu 2
          router-link(to='#')
            v-list-item
              v-list-item-title Menu 3
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