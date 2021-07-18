<template lang="pug">
  .yezza-buider
    menu-bar()
    div(:style="$vuetify.breakpoint.width < 960 ? 'margin-top:46px' : 'margin-top:48px'")
      template(v-for="(components, index) in userComponents")
        component(:is="components.component" :configs="components.config" 
        :editable="true" :key="components._uid" :blockID="components._uid" 
        @removeBlock="removeBlock" @updateConfigs="updateConfigs" :blockIndex="index"
        @moveUp="moveBlockUp" @moveDown="moveBlockDown")
        v-row.ma-0
          v-col.text-center(cols='12' style="padding: 0px; border: 1px solid rgba(76, 175, 80, .9);")
            //- v-btn.mx-auto.addButton( @click="addBlock(index+1)" ) Test Add Block Here
            add-dialog(:position="index" @addBlock="addBlock")
      v-row.ma-0(v-if="userComponents.length === 0" style="margin-top:90px !important")
          v-col.text-center(cols='12')
            //- v-btn.mx-auto.addButton( @click="addBlock(index+1)" ) Test Add Block Here
            add-dialog(:position="-1" @addBlock="addBlock")
</template>
<script>
import YezzaBlocks from '@/components/yezzabuilder/blocks'
import AddDialog from '@/components/yezzabuilder/builder/addBlockDialog.vue'
import MenuBar from '@/components/yezzabuilder/builder/MenuBar.vue'

export default {
  name: 'YezzaBuilder',
  components: { AddDialog, MenuBar, ...YezzaBlocks },
  data: ()=>({
    userComponents: [
      // {
      //   _uid: "yz-00001",
      //   component: "Intro",
      //   config: {
      //     title: {
      //       value: 'Tell people about what makes your site special.'
      //     },
      //     btnText: {
      //       value: 'See More'
      //     },
      //     btnBgColor: {
      //       value: '#000000'
      //     },
      //     btnTextColor: {
      //       value: '#FFFFFF'
      //     },
      //     btnBorderRadius: {
      //       value: '4px'
      //     },
      //     textColor: {
      //       value: '#FFFFFF'
      //     },
      //     bgColor: {
      //       value: '#FFFFFF'
      //     },
      //     bgImage: {
      //       value: require('@/components/yezzabuilder/blocks/img/img-a.jpg')
      //     },
      //     blockPaddingTop: {
      //       value: 150
      //     },
      //     blockPaddingBottom: {
      //       value: 150
      //     },
      //     bgParallax: {
      //       value: true
      //     }
      //   }
      // },
      // {
      //   _uid: "yz-00002",
      //   component: "TextBlock",
      //   config:{
      //     title: {
      //       value: 'Your Text Goes Here'
      //     },
      //     desc: {
      //       value: 'Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      //     },
      //     textColor: {
      //       value: '#000000'
      //     },
      //     bgColor: {
      //       value: '#FFFFFF'
      //     },
      //     blockPaddingTop: {
      //       value: 80
      //     },
      //     blockPaddingBottom: {
      //       value: 80
      //     }
      //   }
      // },
      // {
      //   _uid: "yz-00003",
      //   component: "TextImage",
      //   config:{
      //     layout: {
      //       value: 1
      //     },
      //     title: {
      //       value: 'Your Text Goes Here'
      //     },
      //     desc: {
      //       value: 'Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      //     },
      //     btnText: {
      //       value: 'See More'
      //     },
      //     btnBgColor: {
      //       value: '#000000FF'
      //     },
      //     btnTextColor: {
      //       value: '#FFFFFFFF'
      //     },
      //     btnBorderRadius: {
      //       value: '4px'
      //     },
      //     textColor: {
      //       value: '#000000FF'
      //     },
      //     bgColor: {
      //       value: '#FFFFFFFF'
      //     },
      //     image: {
      //       value: require('@/components/yezzabuilder/blocks/img/img-b.jpg')
      //     },
      //     blockPaddingTop: {
      //       value: 80
      //     },
      //     blockPaddingBottom: {
      //       value: 80
      //     }
      //   }
      // }
    ],
  }),
  mounted(){
    const savedComponents = window.localStorage.getItem('userComponents')
    if (savedComponents !== null && savedComponents !== ''){
      this.userComponents = JSON.parse(savedComponents)
    }
  },
  methods: {
    removeBlock(id){
      this.userComponents = this.userComponents.filter((x) => x._uid !== id)
      console.log('remove block '+id);
      console.log(this.userComponents);
      window.localStorage.setItem('userComponents',JSON.stringify(this.userComponents))
    },
    updateConfigs(item, id){
      let editIndex = 0
      this.userComponents.forEach((component, index) => {
        if (component._uid === id) {
          editIndex = index
        }
      })
      this.userComponents[editIndex].config = item
      window.localStorage.setItem('userComponents',JSON.stringify(this.userComponents))
    },
    addBlock(pos, block){
      let newBlock = ''
      let newBlockID = this.randID()
      const intro = `{ "_uid": "${newBlockID}", "component": "Intro", "config": { "title": { "value": "Tell people about what makes your site special." }, "btnText": { "value": "See More" }, "btnBgColor": { "value": "#000000" }, "btnTextColor": { "value": "#FFFFFF" }, "btnBorderRadius": { "value": "4px" }, "textColor": { "value": "#FFFFFF" }, "bgColor": { "value": "#FFFFFF" }, "bgImage": { "value": "${require("@/components/yezzabuilder/blocks/img/img-a.jpg")}" }, "blockPaddingTop": { "value": 150 }, "blockPaddingBottom": { "value": 150 }, "bgParallax": { "value": true } } }`
      const textBlock = `{ "_uid": "${newBlockID}", "component": "TextBlock", "config": { "title": { "value": "Your Text Goes Here." }, "desc": {"value": "Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, "textColor": { "value": "#000000" }, "bgColor": { "value": "#FFFFFF" }, "blockPaddingTop": { "value": 80 }, "blockPaddingBottom": { "value": 80 } } }`
      const textImage = `{ "_uid": "${newBlockID}", "component": "TextImage", "config":{ "layout": { "value": 1 }, "title": { "value": "Your Text Goes Here" }, "desc": { "value": "Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, "btnText": { "value": "See More" }, "btnBgColor": { "value": "#000000FF" }, "btnTextColor": { "value": "#FFFFFFFF" }, "btnBorderRadius": { "value": "4px" }, "textColor": { "value": "#000000FF" }, "bgColor": { "value": "#FFFFFFFF" }, "image": { "value": "${require('@/components/yezzabuilder/blocks/img/img-b.jpg')}" }, "blockPaddingTop": { "value": 80 }, "blockPaddingBottom": { "value": 80 } } }`
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
      console.log("add block "+ JSON.parse(newBlock).component + ":" + newBlockID +" @ position "+pos);
      console.log(this.userComponents);
      window.localStorage.setItem('userComponents',JSON.stringify(this.userComponents))
    },
    moveBlockUp(id,index){
      const element = this.userComponents[index];
      this.userComponents.splice(index, 1);
      this.userComponents.splice(index-1, 0, element);
      window.localStorage.setItem('userComponents',JSON.stringify(this.userComponents))
    },
    moveBlockDown(id, index){
      const element = this.userComponents[index];
      this.userComponents.splice(index, 1);
      this.userComponents.splice(index+1, 0, element);
      window.localStorage.setItem('userComponents',JSON.stringify(this.userComponents))
    },
    randID(){
      var length = 10
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
      return result;
    }
  }
}
</script>
<style scoped>
</style>
