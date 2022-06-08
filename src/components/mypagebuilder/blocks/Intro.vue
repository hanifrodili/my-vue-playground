<template lang="pug">
  div(:style="cssProps")
    .block.intro
      v-row()
        v-col.text-center(cols="12" style="word-break: break-word")
          h1.title-font {{configs.title.value}}
          v-btn.btn-cta(v-show="configs.btnText.value" @click="" ) {{configs.btnText.value}}
      speed-menu(:dialog="dialog" :editable="editable" :blockIndex="blockIndex" :blockID="blockID" @openDialog="handleDialog" @editBlock="handleEditBlock")
      v-dialog(v-model="dialog" scrollable persistent max-width="500px" v-if="editable")
        v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
          v-card-title.justify-space-between
            | Intro {{reuseBlockID}}
            v-btn(color="primary" fab x-small dark text @click="dialog = false")
              v-icon mdi-close
          v-card-text.pa-0
            v-expansion-panels.elevation-0(accordion focusable)
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Section
                v-expansion-panel-content.py-3
                  label Image URL
                    v-icon.ml-1(style="font-size:15px; margin-bottom:3px" @click="howToGetImage = true") mdi-help-circle-outline
                  v-card.mb-2.how-to-card.elevation-0(v-if="howToGetImage")
                      v-card-title.py-0
                        p.mb-0(style="font-size:12px") How to get your image url
                        v-spacer
                        v-btn(color="white" fab x-small dark text @click="howToGetImage = false")
                          v-icon mdi-close
                      v-card-text
                        h5.font-weight-light You can use image from your
                          a(href="https://photos.google.com/" target="_blank")  Google Photo
                          |  (click your uploaded photo, open image in new tab and copy the url)
                          wbr
                          br
                          |  or you can use
                          a(href="https://imagekit.io/" target="_blank")  ImageKit
                          |  to host your image.
                  v-text-field.mb-4(v-model="configs.bgImage.value" @input="updateConfig" outlined dense clearable placeholder="Leave blank for no image" hide-details="auto" background-color="rgba(255,255,255,0.5)")
                  label Background Attachment
                  //- v-select.mb-2(v-model="configs.bgParallax.value" @input="updateConfig" outlined dense :items="yesNoOptions" item-value="option" item-text="label" hide-details="auto")
                  v-radio-group.mt-0.mb-4(v-model="configs.bgParallax.value" @input="updateConfig" hide-details)
                    v-radio(label="Scroll" value="scroll")  
                    v-radio(label="Fixed" value="fixed")  
                  p.mb-1 Background Color
                  v-btn.mb-4.btn-pickcolor( @click="bgColorPick=!bgColorPick" :color="configs.bgColor.value" width="100%")
                    span(v-if="!bgColorPick" ) {{configs.bgColor.value}}
                    span(v-else) Close
                  v-color-picker.mx-auto.mb-2.clr-picker(v-show="bgColorPick" v-model="configs.bgColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")

                  p.mb-1 Text  Color
                  v-btn.mb-4.btn-pickcolor( @click="txtColorPick=!txtColorPick" :color="configs.textColor.value" width="100%")
                    span(v-if="!txtColorPick" ) {{configs.textColor.value}}
                    span(v-else) Close
                  v-color-picker.mx-auto.mb-2.clr-picker(v-show="txtColorPick" v-model="configs.textColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")

                  label Padding
                  v-row
                    v-col(cols="12" sm="6")
                      label Top: {{configs.blockPaddingTop.value}}px
                      v-slider(v-model="configs.blockPaddingTop.value" @input="updateConfig" min="0" max="180")
                      //- v-text-field.mb-2(prefix="Top: " v-model="configs.blockPaddingTop.value" @input="updateConfig" outlined dense placeholder="Padding Top" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
                    v-col(cols="12" sm="6")
                      label Bottom: {{configs.blockPaddingBottom.value}}px
                      v-slider(v-model="configs.blockPaddingBottom.value" @input="updateConfig" min="0" max="180")
                      //- v-text-field.mb-2(prefix="Bottom: " v-model="configs.blockPaddingBottom.value" @input="updateConfig" outlined dense placeholder="Padding Bottom" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Content
                v-expansion-panel-content.py-3
                  label Title Text
                  v-text-field.mb-2(v-model="configs.title.value" @input="updateConfig" outlined dense clearable placeholder="Text 1" hide-details="auto" background-color="rgba(255,255,255,0.5)")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Button
                v-expansion-panel-content.py-3
                  label Button Text
                  v-text-field.mb-2(v-model="configs.btnText.value" @input="updateConfig" outlined dense placeholder="Button Text" hide-details="auto" background-color="rgba(255,255,255,0.5)" )
                  p.mb-1 Button Color
                  v-btn.mb-4.btn-pickcolor( @click="btnColorPick=!btnColorPick" :color="configs.btnBgColor.value" width="100%")
                    span(v-if="!btnColorPick" ) {{configs.btnBgColor.value}}
                    span(v-else) Close
                  v-color-picker.mx-auto.mb-2.clr-picker(v-show="btnColorPick" v-model="configs.btnBgColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  
                  p.mb-1 Button Text Color
                  v-btn.mb-4.btn-pickcolor( @click="btnTxtColorPick=!btnTxtColorPick" :color="configs.btnTextColor.value" width="100%")
                    span(v-if="!btnTxtColorPick" ) {{configs.btnTextColor.value}}
                    span(v-else) Close
                  v-color-picker.mx-auto.mb-2.clr-picker(v-show="btnTxtColorPick" v-model="configs.btnTextColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
          v-card-actions
            v-spacer
            v-btn(color="primary" @click="dialog=false") Done
            
</template>
<script>
import SpeedMenu from '@/components/mypagebuilder/builder/SpeedMenu.vue'
export default {
  name: 'Intro',
  components: { SpeedMenu },
  props: {
    configs: {
      type: Object,
      default: () => {}
    },
    blockID: {
      type: String
    },
    reuseBlockID: {
      type: String
    },
    blockIndex: {
      type: Number
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog: false,
    fab: false,
    howToGetImage: false,
    bgColorPick: false,
    txtColorPick: false,
    btnColorPick: false,
    btnTxtColorPick: false,
    slideNum: 0
  }),
  computed: {
    cssProps () {
      const customCSS = {}
      customCSS['--bg-color'] = this.configs.bgColor.value
      customCSS['--bg-image'] = 'url(' + this.configs.bgImage.value + ')'
      // customCSS['--bg-image'] = 'url()'
      customCSS['--font-color'] = this.configs.textColor.value
      customCSS['--block-padding-top'] = this.configs.blockPaddingTop.value + 'px'
      customCSS['--block-padding-bottom'] = this.configs.blockPaddingBottom.value + 'px'
      customCSS['--btn-bg-color'] = this.configs.btnBgColor.value
      customCSS['--btn-text-color'] = this.configs.btnTextColor.value
      customCSS['--btn-border-radius'] = this.configs.btnBorderRadius.value
      customCSS['--bg-parallax'] = this.configs.bgParallax.value
      return customCSS
    },
    style () {
      if (this.dialog) {
        return `
          .v-overlay.v-overlay--active {
            opacity: 0;
          }
        `
      }
      return ''
    }
  },
  watch: {
    style (style) {
      if (this.styleElement) {
        this.styleElement.parentNode.removeChild(this.styleElement)
      }
      this.styleElement = this.applyStyle(style)
    }
  },
  methods: {
    applyStyle (styleDef) {
      const styleElement = document.createElement('style')
      styleElement.type = 'text/css'
      document.head.appendChild(styleElement)
      styleElement.innerHTML = styleDef
      return styleElement
    },
    deleteBlock(id){
      this.$emit('removeBlock', id)
    },
    updateConfig(){
      this.$emit('updateConfigs', this.configs, this.blockID, this.reuseBlockID)
    },
    moveBlockUp(index){
      this.$emit('moveUp', this.blockID, index)
    },
    moveBlockDown(index){
      this.$emit('moveDown', this.blockID, index)
    },
    handleDialog(e){
      this.dialog = e
    },
    handleEditBlock(id,act){
      if (act === 'delete') {
        this.deleteBlock(id)
      }
      if (act === 'up') {
        this.moveBlockUp(id)
      }
      if (act === 'down') {
        this.moveBlockDown(id)
      }
    }
  }
}
</script>
<style scoped>
  .clr-picker{
    border: 1px solid rgba(0,0,0,.38);
    background-color:rgba(255,255,255,0.5);
  }
  .btn-open{
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
  }
  .btn-edit{
    z-index: 99;
  }
  .btn-edit{
    z-index: 99;
  }
  .btn-edit:hover, .btn-edit--active{
    transform: scale(1.2);
    color: var(--v-primary) !important;
    background-color: white !important;
    border: 2px solid var(--v-primary) !important;
  }
  .btn-pickcolor > .v-btn__content > span{
    background-color: rgba(255,255,255,.5);
    border-radius: 15px;
    padding: 3px;
  }
  .how-to-card{
    border: .5px solid gray;
    animation: fade-in .8s ease-in;
    background-color: rgba(0,0,0,.7);
  }
  .how-to-card *{
    color: white;
  }
  /* .edit-icon{
    transform: rotate(45deg);
  }
  .btn-edit:hover .edit-icon,.btn-edit--active .edit-icon{
    transform: rotate(0deg);
  } */
  .title-font{
    color: var(--font-color);
    font-size: 65px !important;
    line-height: 1em !important;
    margin-bottom: 25px;
    text-shadow: 0px 0px 5px #525252;
  }
  .btn-cta{
    background-color: var(--btn-bg-color) !important;
    border-radius: var(--btn-border-radius);
    color: var(--btn-text-color) !important;
    padding: 25px 15px !important;
    box-shadow: none !important;
    font-size: 15px;
    text-transform: capitalize;
  }
  .row{
    max-width: 1260px;
    margin: auto;
  }
  .block{
    background-attachment: var(--bg-parallax);
    background-image: var(--bg-image);
    background-position: center;
    background-size: cover;
    background-color: var(--bg-color);
    padding-right: 0;
    padding-left: 0;
    padding-top: var(--block-padding-top);
    padding-bottom: var(--block-padding-bottom);
    position: relative;
  }
  @media (max-width: 768px) and (min-width: 450px){
    .title-font{
      font-size: 50px !important;
    }
  }
  @media (max-width: 449px){
    .title-font{
      font-size: 36px !important;
    }
  }

  @keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<style lang="scss" scoped>
::v-deep .v-expansion-panel::before{
  box-shadow: none !important;
}
</style>
<style lang="sass" scoped>
.v-dialog__content
  justify-content: flex-end !important
</style>
