<template lang="pug">
.product-card
  v-expansion-panels
    v-expansion-panel.mb-2.product-card-main(v-for="(product,index) in products" :key="index")
      v-expansion-panel-header.pa-0(style="min-height:0")
        v-row.ma-0.my-row()
          v-col.d-flex.pa-0.align-self-center(cols='1')
            svg.product-icon(width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
              path(d="M12.0002 3.27246C9.63009 3.27246 9.33264 3.28282 8.40176 3.32519C7.4727 3.36773 6.83853 3.51482 6.28364 3.73064C5.70966 3.95355 5.22277 4.25173 4.73769 4.73701C4.25225 5.2221 3.95408 5.70901 3.73045 6.28282C3.51409 6.83792 3.36682 7.47228 3.325 8.40101C3.28337 9.33192 3.27246 9.62955 3.27246 11.9997C3.27246 14.3699 3.28301 14.6665 3.32519 15.5974C3.36791 16.5265 3.515 17.1606 3.73063 17.7156C3.95371 18.2896 4.25189 18.7765 4.73714 19.2616C5.22204 19.747 5.70893 20.0459 6.28255 20.2688C6.83781 20.4846 7.47215 20.6317 8.40103 20.6743C9.33191 20.7166 9.62918 20.727 11.9991 20.727C14.3694 20.727 14.6659 20.7166 15.5968 20.6743C16.5259 20.6317 17.1608 20.4846 17.716 20.2688C18.2898 20.0459 18.776 19.747 19.2609 19.2616C19.7463 18.7765 20.0445 18.2896 20.2681 17.7157C20.4827 17.1606 20.6299 16.5263 20.6736 15.5976C20.7154 14.6666 20.7263 14.3699 20.7263 11.9997C20.7263 9.62955 20.7154 9.3321 20.6736 8.40119C20.6299 7.4721 20.4827 6.83791 20.2681 6.28301C20.0445 5.70901 19.7463 5.2221 19.2609 4.73701C18.7754 4.25155 18.29 3.95337 17.7155 3.73064C17.1591 3.51482 16.5246 3.36773 15.5955 3.32519C14.6647 3.28282 14.3683 3.27246 11.9975 3.27246H12.0002ZM11.2173 4.84519C11.4497 4.84482 11.7089 4.84519 12.0002 4.84519C14.3303 4.84519 14.6065 4.85355 15.5266 4.89537C16.3775 4.93428 16.8393 5.07646 17.1469 5.19592C17.5542 5.3541 17.8446 5.54319 18.1498 5.84864C18.4553 6.1541 18.6444 6.44501 18.8029 6.85228C18.9223 7.15955 19.0647 7.62137 19.1034 8.47228C19.1453 9.39228 19.1543 9.66864 19.1543 11.9977C19.1543 14.3268 19.1453 14.6032 19.1034 15.5232C19.0645 16.3741 18.9223 16.8359 18.8029 17.1432C18.6447 17.5505 18.4553 17.8405 18.1498 18.1457C17.8444 18.4512 17.5544 18.6403 17.1469 18.7985C16.8397 18.9185 16.3775 19.0603 15.5266 19.0992C14.6067 19.141 14.3303 19.1501 12.0002 19.1501C9.6699 19.1501 9.39373 19.141 8.47376 19.0992C7.62287 19.0599 7.16107 18.9177 6.85326 18.7983C6.446 18.6401 6.1551 18.451 5.84966 18.1456C5.54421 17.8401 5.35513 17.5499 5.19658 17.1425C5.07713 16.8352 4.93477 16.3734 4.89605 15.5225C4.85423 14.6025 4.84587 14.3261 4.84587 11.9956C4.84587 9.66501 4.85423 9.3901 4.89605 8.4701C4.93496 7.61919 5.07713 7.15737 5.19658 6.84973C5.35476 6.44246 5.54421 6.15155 5.84966 5.8461C6.1551 5.54064 6.446 5.35155 6.85326 5.19301C7.16089 5.07301 7.62287 4.93119 8.47376 4.8921C9.27882 4.85573 9.59082 4.84482 11.2173 4.84301V4.84519ZM16.6586 6.29428C16.0804 6.29428 15.6114 6.76282 15.6114 7.34119C15.6114 7.91937 16.0804 8.38846 16.6586 8.38846C17.2368 8.38846 17.7058 7.91937 17.7058 7.34119C17.7058 6.76301 17.2368 6.29392 16.6586 6.29392V6.29428ZM12.0002 7.51791C9.52518 7.51791 7.51851 9.52464 7.51851 11.9997C7.51851 14.4748 9.52518 16.4806 12.0002 16.4806C14.4752 16.4806 16.4812 14.4748 16.4812 11.9997C16.4812 9.52464 14.475 7.51791 12 7.51791H12.0002ZM12.0002 9.09064C13.6067 9.09064 14.9092 10.393 14.9092 11.9997C14.9092 13.6063 13.6067 14.9088 12.0002 14.9088C10.3935 14.9088 9.09119 13.6063 9.09119 11.9997C9.09119 10.393 10.3935 9.09064 12.0002 9.09064Z" fill="#333333")
          v-col.d-flex.pa-0.align-self-center.pl-2(cols='8')
            p.mb-0.product-text-title {{product.title}}
          v-col.d-flex.pa-0.align-self-center.justify-end(cols='3')
            p.mb-0.product-text-title {{product.currency}} {{product.rate}}
      v-expansion-panel-content
        v-row.ma-0.my-row(style="")
          p.mb-0.product-text-desc {{product.description}}
        v-row.ma-0.my-row()
          div.product-chooose-btn(:class="{ 'selected': selected }")
            v-btn.choose-btn(v-if="!selected"  @click="selectProduct(index)") Choose
            v-row.product-select(v-else)
              v-col(cols="3")
                v-btn.inc-btn(v-if="defaultValue > 1" @click="defaultValue--" )
                  svg(width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg")
                    path(d="M1 7L13 7" stroke="white" stroke-width="2" stroke-linecap="round")
                v-btn.inc-btn(v-else  @click="selected = false" )
                  svg(width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg")
                    path(fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z" fill="white")
              v-col(cols="6")
                p.product-qty {{defaultValue}}
              v-col(cols="3")
                v-btn.dec-btn( @click="defaultValue++" )
                  svg(width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg")
                    path(d="M7 1V13" stroke="white" stroke-width="2" stroke-linecap="round")
                    path(d="M1 7L13 7" stroke="white" stroke-width="2" stroke-linecap="round")
      
</template>

<script>
export default {
  name: 'ProductCardV2',
  props: {
    products: {
      type: Array,
      default: () => ({})
    }
  },
  data: ()=>({
    selected: false,
    defaultValue: 1
  }),
  methods: {
    selectProduct(index) {
      console.log(index);
      this.selected = true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card-main{
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 10px !important;
  padding: 16px 20px 16px 13.27px;
}

.product-icon{
  /* margin-right: 13.27px; */
}

.product-text-title{
  color: #000;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 20px !important;
}

.product-text-desc{
  color: #000;
  font-weight: 400 !important;
  font-size: 13px !important;
  line-height: 20px;
  height: max-content;
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.v-expansion-panel--active .product-text-desc{
  opacity: 1;
}

.product-chooose-btn{
  background-color: #2E7CF6;
  box-shadow: none !important;
  border-radius: 8px;
  color: #fff;
  height: 40px !important;
  margin-left: auto;
  margin-top: 10px;
  text-align: center;
  width: 98px;
  transition:  width .3s ease-in-out,
    background .3s ease-in-out;
}

.product-chooose-btn.selected{
  background-color: #333;
  width: 123px;
}

.product-chooose-btn .choose-btn{
  box-shadow: none;
  background-color: transparent;
  color: #fff;
  height: 100%;
  width: 100%;
  min-width: unset;
  padding: 7px 19px !important;
  text-transform: capitalize;
  letter-spacing: -.03em;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  text-indent: none;
  vertical-align: none;
}

.product-select{
  padding: 8px 19px;
  height: 100%;
  width: 100%;
}

.product-select .col{
  height: 100%;
}

.product-select .product-qty{
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 100%;
}

.product-select .inc-btn,
.product-select .dec-btn{
  padding: 0 !important;
  width: 100% !important;
  box-shadow: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  min-width: unset;
  vertical-align: unset;
}

// overwrite
::v-deep{
  .v-expansion-panel--active:not(:first-child),
  .v-expansion-panel--active + .v-expansion-panel {
    margin-top: 0 !important;
  }
  .v-expansion-panel-content__wrap {
    padding: 0;
    flex: unset !important;
    padding-top: 12px;
    padding-left: 34px;
    max-width: 100%;
  }
  .v-expansion-panel-header__icon{
    display: none;
  }
  .v-expansion-panel::before{
    box-shadow: none;
  }
  .theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after{
    border: none
  }
  .v-btn::before{
    background-color: transparent;
  }
  .v-ripple__container{
    display: none;
  }
}
</style>
