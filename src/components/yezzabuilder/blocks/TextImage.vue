<template lang="pug">
  div(:style="cssProps")
    .block.text-image
      v-row.px-5(v-if="configs.layout.value === 1")
        v-col.text-center(cols="12" sm="6" :class="$vuetify.breakpoint.lg ? 'pr-8' : ''")
          v-img(:src="configs.image.value" height="auto" width="100%")
        v-col.text-left.align-self-center(cols="12" sm="6")
          h1.title-font {{configs.title.value}}
          p.desc-font {{configs.desc.value}}
          v-btn.btn-cta(v-show="configs.btnText.value" @click="" ) {{configs.btnText.value}}
      v-row.px-5(v-if="configs.layout.value === 2")
        v-col.text-left.align-self-center(cols="12" sm="6" :class="$vuetify.breakpoint.lg ? 'pr-8' : ''")
          h1.title-font {{configs.title.value}}
          p.desc-font {{configs.desc.value}}
          v-btn.btn-cta(v-show="configs.btnText.value" @click="" ) {{configs.btnText.value}}
        v-col.text-center(cols="12" sm="6")
          v-img(:src="configs.image.value" height="auto" width="100%")
      v-row.px-5(v-if="configs.layout.value === 3")
        v-col.text-center(cols="12")
          v-img.mb-8.mx-auto(:src="configs.image.value" height="auto" width="100%" style="max-width:900px")
          h1.title-font {{configs.title.value}}
          p.desc-font.mx-auto {{configs.desc.value}}
          v-btn.btn-cta(v-show="configs.btnText.value" @click="" ) {{configs.btnText.value}}
      speed-menu(:dialog="dialog" :editable="editable" :blockIndex="blockIndex" :blockID="blockID" @openDialog="handleDialog" @editBlock="handleEditBlock")
      v-dialog(v-model="dialog" scrollable persistent max-width="500px" v-if="editable" )
        v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
          v-card-title.justify-space-between
            | Text & Image  {{reuseBlockID}}
            v-btn(color="primary" fab x-small dark text @click="dialog = false")
              v-icon mdi-close
          v-card-text.pa-0
            v-expansion-panels.elevation-0(accordion focusable)
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Section
                v-expansion-panel-content.py-3
                  label Background Image
                  v-file-input.mb-2(v-model="newImage" @input="updateConfig" @change="changeImage" outlined dense hide-details="auto" background-color="rgba(255,255,255,0.5)")
                  label Background Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="configs.bgColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  label Text  Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="configs.textColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  v-row
                    v-col(cols="12" sm="6")
                      label Padding Top (px)
                      v-text-field.mb-2(v-model="configs.blockPaddingTop.value" @input="updateConfig" outlined dense placeholder="Padding Top" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
                    v-col(cols="12" sm="6")
                      label Padding Bottom (px)
                      v-text-field.mb-2(v-model="configs.blockPaddingBottom.value" @input="updateConfig" outlined dense placeholder="Padding Bottom" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Layout
                v-expansion-panel-content.py-3
                  //- v-select.mb-2(v-model="configs.layout.value" outlined dense :items="layoutList" item-value="id" item-text="label" hide-details="auto")
                  div(v-for="layout in layoutList" :key="layout.id" @click="changeLayout(layout.id)")
                    v-img.mx-auto(:src="require(`@/components/yezzabuilder/blocks/img/${layout.img}`)" width="60%" :class="configs.layout.value === layout.id ? 'layout-border__active' : 'layout-border'" )
                    p.text-center {{layout.label}}
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Content
                v-expansion-panel-content.py-3
                  label Title Text
                  v-text-field.mb-2(v-model="configs.title.value" @input="updateConfig" outlined dense placeholder="Text 1" hide-details="auto" background-color="rgba(255,255,255,0.5)")
                  label Description Text
                  v-textarea.mb-2(v-model="configs.desc.value" @input="updateConfig" outlined dense placeholder="Text 2" hide-details="auto" background-color="rgba(255,255,255,0.5)")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Button
                v-expansion-panel-content.py-3
                  label Button Text
                  v-text-field.mb-2(v-model="configs.btnText.value" @input="updateConfig" outlined dense placeholder="Button Text" hide-details="auto" background-color="rgba(255,255,255,0.5)" )
                  label Button Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="configs.btnBgColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  label Button Text Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="configs.btnTextColor.value" @input="updateConfig" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
</template>
<script>
import SpeedMenu from '@/components/yezzabuilder/builder/SpeedMenu.vue'
export default {
  name: 'TextImage',
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
    newImage: null,
    fab: false,
    layoutList: [
      {
        id: 1,
        label: 'Image Left',
        img: 'img-left.jpg'
      },
      {
        id: 2,
        label: 'Image Right',
        img: 'img-right.jpg'
      },
      {
        id: 3,
        label: 'Image Top',
        img: 'img-top.jpg'
      }
    ]
  }),
  computed: {
    cssProps () {
      const customCSS = {}
      customCSS['--bg-color'] = this.configs.bgColor.value
      customCSS['--font-color'] = this.configs.textColor.value
      customCSS['--block-padding-top'] = this.configs.blockPaddingTop.value + 'px'
      customCSS['--block-padding-bottom'] = this.configs.blockPaddingBottom.value + 'px'
      customCSS['--btn-bg-color'] = this.configs.btnBgColor.value
      customCSS['--btn-text-color'] = this.configs.btnTextColor.value
      customCSS['--btn-border-radius'] = this.configs.btnBorderRadius.value
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
    changeLayout (id) {
      this.configs.layout.value = id
      this.updateConfig()
    },
    changeImage (e) {
      const file = e.target.files[0]
      this.newImage = file
      this.configs.image.value = URL.createObjectURL(file)
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
  .layout-border{
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .layout-border:hover{
    cursor: pointer;
  }
  .layout-border__active{
    border: 2px solid black;
    border-radius: 5px;
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
    max-width: 780px;
    margin-bottom: 15px;
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
</style>
