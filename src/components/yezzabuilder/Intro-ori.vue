<template lang="pug">
  div(:style="cssProps")
    .block.intro
      v-row()
        v-col.text-center(cols="12")
          h1.title-font {{userInput.title.value}}
          v-btn.btn-cta(v-show="userInput.btnText.value" @click="" ) {{userInput.btnText.value}}
      v-dialog(v-model="dialog" scrollable persistent max-width="500px")
        template( v-slot:activator="{ on, attrs }" )
          v-btn.btn-edit(:class="{'btn-edit--active':dialog}"  v-bind="attrs" v-on="on" fab dark color="primary")
            v-icon.edit-icon mdi-pencil
        v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
          v-card-title.justify-space-between
            | Text & Image
            v-btn(color="primary" fab x-small dark text @click="dialog = false")
              v-icon mdi-close
          v-card-text.pa-0
            v-expansion-panels.elevation-0(accordion focusable)
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Section
                v-expansion-panel-content.py-3
                  label Parallax Background
                  v-select.mb-2(v-model="userInput.bgParallax.value" outlined dense :items="yesNoOptions" item-value="option" item-text="label" hide-details="auto")
                  label Background Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="userInput.bgColor.value" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  label Text  Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="userInput.textColor.value" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  label Padding
                  v-row
                    v-col(cols="12" sm="6")
                      v-text-field.mb-2(prefix="Top: " v-model="userInput.blockPaddingTop.value" outlined dense placeholder="Padding Top" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
                    v-col(cols="12" sm="6")
                      v-text-field.mb-2(prefix="Bottom: " v-model="userInput.blockPaddingBottom.value" outlined dense placeholder="Padding Bottom" hide-details="auto" background-color="rgba(255,255,255,0.5)" type="number" min="0")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Content
                v-expansion-panel-content.py-3
                  label Title Text
                  v-text-field.mb-2(v-model="userInput.title.value" outlined dense placeholder="Text 1" hide-details="auto" background-color="rgba(255,255,255,0.5)")
              v-expansion-panel(style="background-color:transparent")
                v-expansion-panel-header Button
                v-expansion-panel-content.py-3
                  label Button Text
                  v-text-field.mb-2(v-model="userInput.btnText.value" outlined dense placeholder="Button Text" hide-details="auto" background-color="rgba(255,255,255,0.5)" )
                  label Button Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="userInput.btnBgColor.value" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
                  label Button Text Color
                  v-color-picker.mx-auto.mb-2.clr-picker(v-model="userInput.btnTextColor.value" mode="hexa" hide-canvas hide-mode-switch hide-sliders show-swatches hide-inputs swatches-max-height="200")
</template>
<script>
export default {
  name: 'Intro',
  // props: {
  //   userInput: {
  //     type: Object,
  //     default: () => {}
  //   }
  // },
  data: () => ({
    dialog: false,
    yesNoOptions: [
      {
        option: true,
        label: 'Yes'
      },
      {
        option: false,
        label: 'No'
      }
    ],
    userInput: {
      title: {
        value: 'Tell people about what makes your site special.'
      },
      btnText: {
        value: 'See More'
      },
      btnBgColor: {
        value: '#000000'
      },
      btnTextColor: {
        value: '#FFFFFF'
      },
      btnBorderRadius: {
        value: '4px'
      },
      textColor: {
        value: '#FFFFFF'
      },
      bgColor: {
        value: '#FFFFFF'
      },
      bgImage: {
        value: require('@/components/yezzabuilder/img/img-a.jpg')
      },
      blockPaddingTop: {
        value: 150
      },
      blockPaddingBottom: {
        value: 150
      },
      bgParallax: {
        value: true
      }
    }
  }),
  computed: {
    cssProps () {
      const customCSS = {}
      customCSS['--bg-color'] = this.userInput.bgColor.value
      customCSS['--bg-image'] = 'url(' + this.userInput.bgImage.value + ')'
      customCSS['--font-color'] = this.userInput.textColor.value
      customCSS['--block-padding-top'] = this.userInput.blockPaddingTop.value + 'px'
      customCSS['--block-padding-bottom'] = this.userInput.blockPaddingBottom.value + 'px'
      customCSS['--btn-bg-color'] = this.userInput.btnBgColor.value
      customCSS['--btn-text-color'] = this.userInput.btnTextColor.value
      customCSS['--btn-border-radius'] = this.userInput.btnBorderRadius.value
      customCSS['--bg-parallax'] = this.userInput.bgParallax.value ? 'fixed' : 'unset'
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
    right: 5%;
    bottom: 5%;
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
