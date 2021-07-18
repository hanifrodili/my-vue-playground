<template lang="pug">
  div(:style="cssProps")
    .block.text
      v-row()
        v-col.text-center(cols="12")
          h1.title-font {{userInput.title.value}}
          p.desc-font {{userInput.desc.value}}
      v-dialog(v-model="dialog" scrollable persistent max-width="500px")
        template( v-slot:activator="{ on, attrs }" )
          v-btn.btn-edit(:class="{'btn-edit--active':dialog}" v-bind="attrs" v-on="on" fab dark color="primary")
            v-icon.edit-icon mdi-pencil
        v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px); border:1px solid rgba(0,0,0,.1)")
          v-card-title.justify-space-between
            div
              | Text
              //- v-icon.pb-1.ml-3 mdi-dock-left
              //- v-icon.pb-1 mdi-dock-right
            v-btn(color="primary" fab x-small dark text @click="dialog = false")
              v-icon mdi-close
          v-card-text.pa-0
            v-expansion-panels.elevation-0(accordion focusable)
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Section
                v-expansion-panel-content.py-3
                  label Background Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="userInput.bgColor.value" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  label Text  Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="userInput.textColor.value" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  v-row
                    v-col(cols="12" sm="6")
                      label Padding Top (px)
                      v-text-field.mb-2(v-model="userInput.blockPaddingTop.value" outlined dense placeholder="Padding Top" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
                    v-col(cols="12" sm="6")
                      label Padding Bottom (px)
                      v-text-field.mb-2(v-model="userInput.blockPaddingBottom.value" outlined dense placeholder="Padding Bottom" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Content
                v-expansion-panel-content.py-3
                  label Title Text
                  v-text-field.mb-2(v-model="userInput.title.value" outlined dense placeholder="Text 1" hide-details="auto" background-color="rgba(255,255,255,0.5)")
                  label Description Text
                  v-textarea.mb-2(v-model="userInput.desc.value" outlined dense placeholder="Text 2" hide-details="auto" background-color="rgba(255,255,255,0.5)")
</template>
<script>
export default {
  name: 'TextBlock',
  // props: {
  //   title: {
  //     type: String,
  //     default: 'Your Text Goes Here'
  //   },
  //   desc: {
  //     type: String,
  //     default: 'Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   },
  //   textColor: {
  //     type: String,
  //     default: '#000000'
  //   },
  //   bgColor: {
  //     type: String,
  //     default: '#ffffff'
  //   },
  //   blockPadding: {
  //     type: String,
  //     default: '100px 0'
  //   }
  // },
  data: () => ({
    dialog: false,
    userInput: {
      title: {
        value: 'Your Text Goes Here'
      },
      desc: {
        value: 'Your Long Descriptions Goes Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      textColor: {
        value: '#000000'
      },
      bgColor: {
        value: '#FFFFFF'
      },
      blockPaddingTop: {
        value: 80
      },
      blockPaddingBottom: {
        value: 80
      }
    }
  }),
  computed: {
    cssProps () {
      const customCSS = {}
      customCSS['--bg-color'] = this.userInput.bgColor.value
      customCSS['--font-color'] = this.userInput.textColor.value
      customCSS['--block-padding-top'] = this.userInput.blockPaddingTop.value + 'px'
      customCSS['--block-padding-bottom'] = this.userInput.blockPaddingBottom.value + 'px'
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
    }
  }
}
</script>
<style scoped>
  .clr-picker{
    border: 1px solid rgba(0,0,0,.38);
    background-color:rgba(255,255,255,0.5);
  }
  .btn-edit{
    position: absolute;
    bottom: 5%;
    right: 5%;
    z-index: 99;
  }
  .btn-edit:hover, .btn-edit--active{
    transform: scale(1.2);
    color: var(--v-primary) !important;
    background-color: white !important;
    border: 2px solid var(--v-primary) !important;
  }
  .edit-icon{
    transform: rotate(45deg);
  }
  .btn-edit:hover .edit-icon,.btn-edit--active .edit-icon{
    transform: rotate(0deg);
  }
  .title-font{
    color: var(--font-color);
    font-size: 50px !important;
    margin-bottom: 15px;
  }
  .desc-font{
    color: var(--font-color);
    font-size: 15px !important;
    max-width: 780px;
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
