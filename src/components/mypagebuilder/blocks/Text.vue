<template lang="pug">
  div(:style="cssProps")
    .block.text
      v-row()
        v-col.text-center(cols="12")
          h1.title-font {{configs.title.value}}
          p.desc-font {{configs.desc.value}}
      speed-menu(:dialog="dialog" :editable="editable" :blockIndex="blockIndex" :blockID="blockID" @openDialog="handleDialog" @editBlock="handleEditBlock")
      v-dialog(v-model="dialog" scrollable persistent max-width="500px" v-if="editable" )
        v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px); border:1px solid rgba(0,0,0,.1)")
          v-card-title.justify-space-between
            div
              | Text  {{reuseBlockID}}
              //- v-icon.pb-1.ml-3 mdi-dock-left
              //- v-icon.pb-1 mdi-dock-right
            v-btn(color="primary" fab x-small dark text @click="dialog = false")
              v-icon mdi-close
          v-card-text.pa-0
            v-expansion-panels.elevation-0(accordion focusable)
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Section
                v-expansion-panel-content.py-3
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
                      //- v-text-field.mb-2(v-model="configs.blockPaddingTop.value" @input="updateConfig" outlined dense placeholder="Padding Top" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
                    v-col(cols="12" sm="6")
                      label Bottom: {{configs.blockPaddingBottom.value}}px
                      v-slider(v-model="configs.blockPaddingBottom.value" @input="updateConfig" min="0" max="180")
                      //- v-text-field.mb-2(v-model="configs.blockPaddingBottom.value" @input="updateConfig" outlined dense placeholder="Padding Bottom" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Content
                v-expansion-panel-content.py-3
                  label Title Text
                  v-text-field.mb-2(v-model="configs.title.value" @input="updateConfig" outlined dense clearable placeholder="Title" hide-details="auto" background-color="rgba(255,255,255,0.5)")
                  label Description Text
                  v-textarea.mb-2(v-model="configs.desc.value" @input="updateConfig" outlined dense clearable placeholder="Description" hide-details="auto" background-color="rgba(255,255,255,0.5)")
          v-card-actions
            v-spacer
            v-btn(color="primary" @click="dialog=false") Done
</template>
<script>
import SpeedMenu from '@/components/mypagebuilder/builder/SpeedMenu.vue'
export default {
  name: 'TextBlock',
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
    bgColorPick: false,
    txtColorPick: false
  }),
  computed: {
    cssProps () {
      const customCSS = {}
      customCSS['--bg-color'] = this.configs.bgColor.value
      customCSS['--font-color'] = this.configs.textColor.value
      customCSS['--block-padding-top'] = this.configs.blockPaddingTop.value + 'px'
      customCSS['--block-padding-bottom'] = this.configs.blockPaddingBottom.value + 'px'
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
  /* .edit-icon{
    transform: rotate(45deg);
  }
  .btn-edit:hover .edit-icon,.btn-edit--active .edit-icon{
    transform: rotate(0deg);
  } */
  .title-font{
    color: var(--font-color);
    font-size: 50px !important;
    margin-bottom: 15px;
  }
  .desc-font{
    color: var(--font-color);
    font-size: 15px !important;
    max-width: 500px;
    margin: auto;
  }
  .row{
    max-width: 1260px;
    margin: auto;
  }
  .block{
    background-color: var(--bg-color);
    padding-right: 0;
    padding-left: 0;
    padding-top: var(--block-padding-top);
    padding-bottom: var(--block-padding-bottom);
    position: relative;
  }
  @media (max-width: 768px) and (min-width: 450px){
    .title-font{
      font-size: 45px !important;
    }
    .desc-font{
      font-size: 14px !important;
    }
  }
  @media (max-width: 449px){
    .title-font{
      font-size: 30px !important;
    }
    .desc-font{
      font-size: 13px !important;
      max-width: 320px;
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

.v-overlay__scrim
  opacity: 0 !important
</style>
