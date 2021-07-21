<template lang="pug">
  .yezza-builder
    menu-bar(@import="importData" :pageID="pageID" :pageData="userComponents" :pageTitle="pageTitle")
    div(:style="$vuetify.breakpoint.width < 960 ? 'margin-top:46px' : 'margin-top:48px'")
      template(v-for="(components, index) in userComponents")
        component(:is="components.component" :configs="components.config" 
        :editable="true" :key="components._uid" :blockID="components._uid" :reuseBlockID="components.reuseBlockID"
        @removeBlock="removeBlock" @updateConfigs="updateConfigs" :blockIndex="index"
        @moveUp="moveBlockUp" @moveDown="moveBlockDown")
        v-row.ma-0
          v-col.text-center(cols='12' style="padding: 0px; border: 1px solid rgba(76, 175, 80, .9);")
            //- v-btn.mx-auto.addButton( @click="addBlock(index+1)" ) Test Add Block Here
            add-dialog(:position="index" @addBlock="addBlock" :usedBlock="userComponents | removeDuplicateBlock"  @reuseBlock="reuseBlock")
      v-row.ma-0(v-if="userComponents.length === 0" style="margin-top:90px !important")
          v-col.text-center(cols='12')
            //- v-btn.mx-auto.addButton( @click="addBlock(index+1)" ) Test Add Block Here
            add-dialog(:position="-1" @addBlock="addBlock" :usedBlock="userComponents")
</template>
<script>
import YezzaBlocks from '@/components/yezzabuilder/blocks'
import AddDialog from '@/components/yezzabuilder/builder/addBlockDialog.vue'
import MenuBar from '@/components/yezzabuilder/builder/MenuBar.vue'

export default {
  name: 'YezzaBuilder',
  components: { AddDialog, MenuBar, ...YezzaBlocks },
  data: ()=>({
    userPages:[],
    userComponents: [],
    pageID: '',
    pageTitle: ''
  }),
  mounted(){
    this.pageID = this.$route.params.id
    this.userPages = JSON.parse(window.localStorage.getItem('userPages'))
    if (this.userPages.length > 0){
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              this.userComponents = item.components
              this.pageTitle = item.title
          }
      });
    }
    const browserID = window.localStorage.getItem('browserID')
    if (browserID == null || browserID == ''){
       window.localStorage.setItem('browserID','user-'+this.randID(10))
    }
  },
  filters: {
    removeDuplicateBlock(e){
      const uniqueBlock = Array.from(e.reduce((map, obj) => map.set(obj.reuseBlockID,obj), new Map()).values());
      return uniqueBlock
    }
  },
  methods: {
    removeBlock(id){
      this.userComponents = this.userComponents.filter((x) => x._uid !== id)
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              item.components = this.userComponents
          }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    },
    updateConfigs(item, id, reuseID){
      this.userComponents.forEach((component, index) => {
        if (component._uid === id) {
          this.userComponents[index].config = item
        }
        if (component.reuseBlockID === reuseID) {
          this.userComponents[index].config = item
        }
      })
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              item.components = this.userComponents
              const d = new Date()
              item.lastUpdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
          }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    },
    addBlock(pos, block){
      let newBlock = ''
      const newBlockID = this.randID(10)
      const reuseBlockID = this.randNum(5)
      const intro = `{ "_uid": "${newBlockID}", "component": "Intro", "name": "Intro", "reuseBlockID": "${reuseBlockID}", "config": { "title": { "value": "Tell people about what makes your site special." }, "btnText": { "value": "See More" }, "btnBgColor": { "value": "#000000" }, "btnTextColor": { "value": "#FFFFFF" }, "btnBorderRadius": { "value": "4px" }, "textColor": { "value": "#FFFFFF" }, "bgColor": { "value": "#FFFFFF" }, "bgImage": { "value": "${require("@/components/yezzabuilder/blocks/img/img-a.jpg")}" }, "blockPaddingTop": { "value": 150 }, "blockPaddingBottom": { "value": 150 }, "bgParallax": { "value": true } } }`
      const textBlock = `{ "_uid": "${newBlockID}", "component": "TextBlock", "name": "Text", "reuseBlockID": "${reuseBlockID}", "config": { "title": { "value": "Your Text Goes Here." }, "desc": {"value": "Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, "textColor": { "value": "#000000" }, "bgColor": { "value": "#FFFFFF" }, "blockPaddingTop": { "value": 80 }, "blockPaddingBottom": { "value": 80 } } }`
      const textImage = `{ "_uid": "${newBlockID}", "component": "TextImage", "name": "Text & Image", "reuseBlockID": "${reuseBlockID}", "config":{ "layout": { "value": 1 }, "title": { "value": "Your Text Goes Here" }, "desc": { "value": "Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, "btnText": { "value": "See More" }, "btnBgColor": { "value": "#000000FF" }, "btnTextColor": { "value": "#FFFFFFFF" }, "btnBorderRadius": { "value": "4px" }, "textColor": { "value": "#000000FF" }, "bgColor": { "value": "#FFFFFFFF" }, "image": { "value": "${require('@/components/yezzabuilder/blocks/img/img-b.jpg')}" }, "blockPaddingTop": { "value": 80 }, "blockPaddingBottom": { "value": 80 } } }`
      switch (block) {
        case 0:
          newBlock = intro
          break;
        case 1:
          newBlock = textBlock
          break;
        case 2:
          newBlock = textImage
          break;
      }
      this.userComponents.splice(pos,0,JSON.parse(newBlock))
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              item.components = this.userComponents
              const d = new Date()
              item.lastUpdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
          }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    },
    reuseBlock(pos, blockData){
      let block = JSON.parse(blockData)
      block._uid = this.randID(10)
      this.userComponents.splice(pos,0,block)
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              item.components = this.userComponents
              const d = new Date()
              item.lastUpdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
          }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    },
    moveBlockUp(id,index){
      if (index===0){ 
        alert('Already on top')
        return
      } 
      const element = this.userComponents[index];
      this.userComponents.splice(index, 1);
      this.userComponents.splice(index-1, 0, element);
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              item.components = this.userComponents
              const d = new Date()
              item.lastUpdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
          }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    },
    moveBlockDown(id,index){
      if (index===this.userComponents.length-1){ 
        alert('Already at bottom')
        return
      } 
      const element = this.userComponents[index];
      this.userComponents.splice(index, 1);
      this.userComponents.splice(index+1, 0, element);
      this.userPages.forEach(item => {
          if (item.id === this.pageID) {
              item.components = this.userComponents
              const d = new Date()
              item.lastUpdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
          }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    },
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
    randNum(len){
      var length = len
      var result           = '#';
      var characters       = '0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
      return result;
    },
    importData(e){
      this.userComponents = JSON.parse(e)
      this.userPages.forEach(item => {
        if (item.id === this.pageID) {
          item.components = JSON.parse(e)
          const d = new Date()
          item.lastUpdate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        }
      })
      window.localStorage.setItem('userPages',JSON.stringify(this.userPages))
    }
  }
}
</script>
<style scoped>
</style>
