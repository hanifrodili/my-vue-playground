<template lang="pug">
  .builder-home.px-5.py-10
    v-row
      v-col.px-1.py-2(cols="6" md="3" sm="4" v-for="page in userPages" :key="page.id")
        v-card( style="height:108px")
          v-card-text.pa-2.my-auto
            div
              h3 {{page.title}}
              p.mb-0(style="font-size:12px; line-height:15px")
                i Last Update:
                br
                |{{page.lastUpdate}}
          v-card-actions.pa-2
            v-spacer
            v-btn.mx-1(@click="dialogDelete=true" icon color="red" small)
              v-icon mdi-trash-can
            p.mb-0 |
            router-link(:to="{ name: 'YezzaBuilderPreview', params: { id: page.id }}" target="_blank")
              v-btn.mx-1(icon color="success" small)
                v-icon mdi-eye-outline
            router-link(:to="{ name: 'Builder', params: { id: page.id }}")
              v-btn.mx-1(icon color="primary" small)
                v-icon mdi-pencil
          v-dialog(v-model="dialogDelete" scrollable persistent max-width="300px")
            v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
              v-card-text.pa-4
                v-container()
                  p Confirm Delete?
                  h3 This action can't be undo
              v-card-actions
                v-spacer
                v-btn(outlined color="primary" @click="deletePage(page.id)") Yes
                v-btn(color="primary" @click="dialogDelete=false") No
      v-col.px-1.py-2(cols="6" md="3" sm="4")
        v-card.new-card.elevation-0.d-flex(@click="dialogAdd=true, newPageID = `page-${randID(5)}`" style="height:108px")
          v-card-text.text-center.ma-auto
            div 
              v-icon mdi-plus
              p.mb-0(style="font-size:12px") Build New
    v-dialog(v-model="dialogAdd" scrollable persistent max-width="500px")
      v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
        v-card-title.justify-space-between
          | Build New Page
          v-btn(color="primary" fab x-small dark text @click="dialogAdd = false")
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
    dialogAdd: false,
    dialogDelete: false,
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
      this.dialogAdd = false
      this.$router.push(`/yezzabuilder/builder/${id}`)
    },
    deletePage(id){
      this.userPages = this.userPages.filter((x) => x.id !== id)
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
      this.dialogDelete = false
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
}

.new-card{
  border: 2px solid rgba(0,0,0,.6) !important;
}
.new-card:hover{
  background-color: rgba(0, 0, 0, 0.2);
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