<template lang="pug">
.product-card
  v-expansion-panels
    v-expansion-panel.mb-2.product-card-main(v-for="product in products" :key="product.product_id")
      v-expansion-panel-header.pa-0(style="min-height:0; max-height: 56px")
        v-row.ma-0.my-row()
          div.d-flex.align-center(style="width: calc(100% - 60px);")
            div.d-flex.align-center(style="width: -webkit-fill-available; height: fit-content;")
              div.d-flex(style="width:25px; margin-right:13px")
                svg.product-icon(v-if="product.medium === 'instagram'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path(d="M9.00032 0.272461C6.63021 0.272461 6.33276 0.282825 5.40188 0.325188C4.47282 0.367734 3.83866 0.514825 3.28376 0.730643C2.70978 0.953552 2.22289 1.25173 1.73781 1.73701C1.25237 2.2221 0.954199 2.70901 0.730569 3.28282C0.514212 3.83792 0.366944 4.47228 0.325127 5.40101C0.283492 6.33192 0.272583 6.62955 0.272583 8.99973C0.272583 11.3699 0.283128 11.6665 0.325309 12.5974C0.368035 13.5265 0.515121 14.1606 0.730751 14.7156C0.953835 15.2896 1.25201 15.7765 1.73727 16.2616C2.22216 16.747 2.70905 17.0459 3.28267 17.2688C3.83793 17.4846 4.47227 17.6317 5.40115 17.6743C6.33204 17.7166 6.6293 17.727 8.99923 17.727C11.3695 17.727 11.6661 17.7166 12.5969 17.6743C13.526 17.6317 14.1609 17.4846 14.7161 17.2688C15.2899 17.0459 15.7761 16.747 16.261 16.2616C16.7464 15.7765 17.0446 15.2896 17.2682 14.7157C17.4828 14.1606 17.6301 13.5263 17.6737 12.5976C17.7155 11.6666 17.7264 11.3699 17.7264 8.99973C17.7264 6.62955 17.7155 6.3321 17.6737 5.40119C17.6301 4.4721 17.4828 3.83791 17.2682 3.28301C17.0446 2.70901 16.7464 2.2221 16.261 1.73701C15.7756 1.25155 15.2901 0.95337 14.7156 0.730643C14.1593 0.514825 13.5247 0.367734 12.5957 0.325188C11.6648 0.282825 11.3684 0.272461 8.99759 0.272461H9.00032ZM8.21743 1.84519C8.44979 1.84482 8.70905 1.84519 9.00032 1.84519C11.3304 1.84519 11.6066 1.85355 12.5268 1.89537C13.3776 1.93428 13.8394 2.07646 14.1471 2.19592C14.5543 2.3541 14.8447 2.54319 15.15 2.84864C15.4554 3.1541 15.6445 3.44501 15.803 3.85228C15.9225 4.15955 16.0648 4.62137 16.1036 5.47228C16.1454 6.39228 16.1545 6.66864 16.1545 8.99773C16.1545 11.3268 16.1454 11.6032 16.1036 12.5232C16.0646 13.3741 15.9225 13.8359 15.803 14.1432C15.6448 14.5505 15.4554 14.8405 15.15 15.1457C14.8445 15.4512 14.5545 15.6403 14.1471 15.7985C13.8398 15.9185 13.3776 16.0603 12.5268 16.0992C11.6068 16.141 11.3304 16.1501 9.00032 16.1501C6.67002 16.1501 6.39385 16.141 5.47388 16.0992C4.623 16.0599 4.16119 15.9177 3.85338 15.7983C3.44612 15.6401 3.15522 15.451 2.84978 15.1456C2.54433 14.8401 2.35525 14.5499 2.19671 14.1425C2.07726 13.8352 1.9349 13.3734 1.89617 12.5225C1.85435 11.6025 1.84599 11.3261 1.84599 8.99555C1.84599 6.66501 1.85435 6.3901 1.89617 5.4701C1.93508 4.61919 2.07726 4.15737 2.19671 3.84973C2.35488 3.44246 2.54433 3.15155 2.84978 2.8461C3.15522 2.54064 3.44612 2.35155 3.85338 2.19301C4.16101 2.07301 4.623 1.93119 5.47388 1.8921C6.27895 1.85573 6.59094 1.84482 8.21743 1.84301V1.84519ZM13.6587 3.29428C13.0806 3.29428 12.6115 3.76282 12.6115 4.34119C12.6115 4.91937 13.0806 5.38846 13.6587 5.38846C14.2369 5.38846 14.706 4.91937 14.706 4.34119C14.706 3.76301 14.2369 3.29392 13.6587 3.29392V3.29428ZM9.00032 4.51791C6.5253 4.51791 4.51864 6.52464 4.51864 8.99973C4.51864 11.4748 6.5253 13.4806 9.00032 13.4806C11.4753 13.4806 13.4813 11.4748 13.4813 8.99973C13.4813 6.52464 11.4752 4.51791 9.00014 4.51791H9.00032ZM9.00032 6.09064C10.6068 6.09064 11.9093 7.39301 11.9093 8.99973C11.9093 10.6063 10.6068 11.9088 9.00032 11.9088C7.39364 11.9088 6.09132 10.6063 6.09132 8.99973C6.09132 7.39301 7.39364 6.09064 9.00032 6.09064Z" fill="#333333")
                svg.product-icon(v-if="product.medium === 'tiktok'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path(d="M5.98981 13.2589C7.32481 13.2589 8.40704 12.3032 8.40704 10.8417V0H11.306C11.1434 1.97723 13.1089 3.88718 15.2766 3.8435V6.56947C13.4228 6.56947 11.8464 5.78561 11.2977 5.35059V10.8417C11.2977 13.2589 9.39614 16 5.98981 16C2.58348 16 0.723389 13.2589 0.723389 10.8417C0.723389 7.43001 4.33383 5.45136 6.72509 5.93497V8.71154C6.6048 8.66898 6.29457 8.60606 6.03034 8.60606C4.68425 8.55644 3.57259 9.6482 3.57259 10.8417C3.57259 12.1767 4.65482 13.2589 5.98981 13.2589Z" fill="#333333")
                svg.product-icon(v-if="product.medium === 'twitter'" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path(fill-rule="evenodd" clip-rule="evenodd" d="M16.7717 4.08863C16.7785 4.26352 16.7808 4.43833 16.7808 4.61322C16.7808 9.91542 13.0509 16.0365 6.23036 16.0365C4.1352 16.0365 2.187 15.3687 0.545532 14.232C0.83569 14.2638 1.13037 14.2877 1.42957 14.2877C3.16675 14.2877 4.76676 13.6437 6.03592 12.5625C4.4133 12.5387 3.04316 11.3701 2.57061 9.78028C2.79747 9.82798 3.03108 9.8519 3.26999 9.8519C3.60688 9.8519 3.93396 9.80425 4.24748 9.70886C2.54949 9.34319 1.27055 7.72157 1.27055 5.77398C1.27055 5.75014 1.27055 5.74214 1.27055 5.72624C1.77098 6.02037 2.34375 6.20311 2.95195 6.22696C1.95562 5.50357 1.30068 4.27145 1.30068 2.88032C1.30068 2.14898 1.48307 1.45736 1.80412 0.861159C3.63249 3.29365 6.36603 4.89149 9.44773 5.05843C9.38442 4.7643 9.352 4.45436 9.352 4.14433C9.352 1.92647 11.0123 0.129883 13.0607 0.129883C14.1272 0.129883 15.0903 0.614862 15.7664 1.3939C16.6127 1.21901 17.4056 0.885162 18.1231 0.424101C17.845 1.36212 17.2578 2.14894 16.4906 2.6418C17.2413 2.54641 17.9573 2.33194 18.6212 2.01397C18.1231 2.81685 17.496 3.52423 16.7717 4.08863Z" fill="#333333")
                svg.product-icon(v-if="product.medium === 'youtube'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path(fill-rule="evenodd" clip-rule="evenodd" d="M19.9231 5.12119C20.7905 5.35471 21.4744 6.03861 21.7079 6.90598C22.1416 8.49061 22.1249 11.7933 22.1249 11.7933C22.1249 11.7933 22.1249 15.0793 21.7079 16.664C21.4744 17.5314 20.7905 18.2152 19.9231 18.4488C18.3385 18.8658 12 18.8658 12 18.8658C12 18.8658 5.67811 18.8658 4.0768 18.4321C3.20943 18.1986 2.52553 17.5147 2.29201 16.6473C1.875 15.0793 1.875 11.7766 1.875 11.7766C1.875 11.7766 1.875 8.49061 2.29201 6.90598C2.52553 6.03861 3.22611 5.33803 4.0768 5.10451C5.66143 4.6875 12 4.6875 12 4.6875C12 4.6875 18.3385 4.6875 19.9231 5.12119ZM15.2526 11.6608L9.98162 14.6966V8.625L15.2526 11.6608Z" fill="#333333")
              p.mb-0.product-text-title {{product.title}}
          div.text-end(style="width:60px")
            p.mb-0.product-text-title {{numberWithCommas(product.rate)}}
            p.mb-0.product-text-title.text-uppercase(style="font-size:12px!important; color: #848484") {{product.currency}}
      v-expansion-panel-content
        v-row.ma-0.my-row(style="")
          p.mb-0.product-text-desc {{product.description}}
        v-row.ma-0.my-row()
          div.product-chooose-btn(:class="{ 'selected': selected }")
            v-btn.choose-btn(v-if="!selected"  @click="selectProduct(product.product_id)") Choose
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
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card{
  max-width: 345px;
  width: 100%;
  margin: auto;
}

.product-card-main{
  background-color: #fff;
  border: 1px solid #dadada;
  border-radius: 10px !important;
  padding: 15px 20px 15px 13px;
}

.product-icon{
  /* margin-right: 13.27px; */
  // margin-top: 2px;
}

.product-text-title{
  color: #000;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 22px !important;
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
