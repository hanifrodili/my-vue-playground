<template lang="pug">
  .builder-home
    v-container(style="margin-top:80px")
      v-row
        v-col(cols="6" md="3" v-for="page in userPages" :key="page.id")
          router-link(:to="{ name: 'Builder', params: { id: page.id }}")
            v-card( style="height:100%")
              v-card-text
                h3 {{page.title}}
                p.mb-0
                  i Last Update: {{page.lastUpdate}}
        v-col(cols="6" md="3")
          v-card.d-flex(@click="dialog=true, newPageID = `page-${randID(5)}`" style="height:100%")
            v-card-text.text-center.ma-auto
              h3 Build New Page +
    v-dialog(v-model="dialog" scrollable persistent max-width="500px")
      v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
        v-card-title.justify-space-between
          | Build New Page
          v-btn(color="primary" fab x-small dark text @click="dialog = false")
            v-icon mdi-close
        v-card-text.pa-4
          v-container()
            v-text-field(v-model="newPageID" label="Page ID" filled rounded hide-details="auto")
            v-text-field.mt-3(v-model="newPageTitle" label="Page Title" filled rounded hide-details="auto")
        v-card-actions
          v-spacer
          v-btn(outlined @click="createNewPage") Create
            
</template>

<script>
export default {
  name: 'BuilderHome',
  data:()=>({
    dialog: false,
    newPageID: '',
    newPageTitle: '',
    userPages:[]
  }),
  mounted(){
    const savedPages = JSON.parse(window.localStorage.getItem('userPages'))
    if (savedPages === null){
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    }else{
      this.userPages = savedPages
    }
  },
  methods:{
    randID(len){
      var length = len
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
      return result;
    },
    createNewPage(){
      const id = this.newPageID
      const title = this.newPageTitle
      const d = new Date()
      let newpage = {}
      newpage['id'] = id
      newpage['title'] = title
      newpage['lastUpdate'] = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      newpage['components'] = []
      this.userPages.push(newpage)
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
      this.newPageID = ''
      this.newPageTitle = ''
      this.dialog = false
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
::v-deep .v-text-field--filled > .v-input__control > .v-input__slot{
  background: #F7F7F7 !important;
  border: 1px solid #eaeaea !important;
  border-radius: 4px;
  max-height: 48px;
  min-height: 48px;
  padding-left: 16px;
}
::v-deep .v-text-field.v-input--has-state > .v-input__control > .v-input__slot{
  border: 1px solid red !important;
}
::v-deep .v-text-field--filled:not(.v-text-field--single-line) input{
  margin-top: 14px;
}
::v-deep .v-text-field--filled .v-label{
  top: 14px !important;
  color: #C1C1C1;
}
::v-deep .v-text-field--filled .v-label--active{
  transform: translateY(-10px) scale(0.75);
  color: #C1C1C1 ;
}
::v-deep .theme--light.v-input input, .theme--light.v-input textarea{
  color: #2B2525 ;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 24px !important;
}
::v-deep .v-input--has-state.error--text{
  color: red;
}
</style>