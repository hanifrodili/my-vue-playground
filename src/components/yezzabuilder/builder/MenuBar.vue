<template lang="pug">
  v-app-bar(dense dark app style="z-index:150;" :style="$vuetify.breakpoint.width < 960 ? 'margin-top:54px !important' : 'margin-top:64px !important'")
    router-link(to="/yezzabuilder" target="_self" )
      v-tooltip(bottom)
        template( v-slot:activator="{ on, attrs }" )
          v-btn(icon v-bind="attrs" v-on="on")
            v-icon mdi-home
        span Back to Pages
    p.ma-0 {{pageTitle}}
    v-spacer
    v-tooltip(bottom)
      template( v-slot:activator="{ on, attrs }" )
        v-btn(icon @click="downloadJSON" v-bind="attrs" v-on="on")
          v-icon mdi-download
      span Download Layout File
    v-tooltip(bottom)
      template( v-slot:activator="{ on, attrs }" )
        v-btn(icon @click="dialog=true" v-bind="attrs" v-on="on")
          v-icon mdi-upload
      span Upload Layout File
    router-link(:to="`/yezzabuilder/preview/${pageID}`" target="_blank" )
      v-tooltip(bottom)
        template( v-slot:activator="{ on, attrs }" )
          v-btn(icon v-bind="attrs" v-on="on")
            v-icon mdi-eye-outline
        span Preview Layout
    //- router-link(to="/yezzabuilder/preview" target="_blank" )
    //-   v-tooltip(bottom)
    //-     template( v-slot:activator="{ on, attrs }" )
    //-       v-btn(icon  v-bind="attrs" v-on="on")
    //-         v-icon mdi-eye-outline
    //-     span Preview Layout
    v-dialog( v-model="dialog" max-width="500px" )
      v-card(  )
        v-card-title
          h5 Upload Layout File
        v-card-text()
          v-container(  )
            v-row
              v-col(cols="12")
                v-file-input(label="Choose Layout File" filled rounded hide-details="auto" accept="application/json" v-model="importedFile" )
        v-card-actions
          v-spacer
          v-btn( text @click="dialog=false") Close
          v-btn(text @click="readFile") Upload
</template>
<script>
export default {
  name: 'MenuBar',
  props:{
    pageID:{
      type: String
    },
    pageTitle:{
      type: String
    }
  },
  data:()=>({
    dialog: false,
    importedFile: null,
    userComponents: null
  }),
  mounted(){
    const userPages = JSON.parse(window.localStorage.getItem('userPages'))
    if (userPages){
      userPages.forEach(item => {
        if (item.id === this.pageID) {
          this.userComponents = item.components
        }
      });
    }
  },
  methods:{
    downloadJSON(){
      const data =  JSON.stringify(this.userComponents)
      const blob = new Blob([data], {type: 'application/json'})
      const d = new Date()
      const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = this.pageID+"-"+date+".json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['application/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    readFile() {
      let reader = new FileReader();
      reader.onload = e => {
        this.$emit('import',e.target.result)
      };
      reader.readAsText(this.importedFile);
      this.importedFile = null
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
  overflow: hidden;
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
