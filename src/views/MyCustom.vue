<template lang="pug">
  .mycustom.pa-5.mx-auto(style="max-width:600px; margin-top:40px")
    label Text Field
    custom-text-field.pa-2.rounded-lg.elevation-2
    div.my-9
    label Date Picker
    custom-date-picker.rounded-lg.elevation-2.mb-4
    custom-date-picker-2.rounded-lg.elevation-2
    div.my-9
    label Schedule Picker
    div
      v-btn.btn.warning.mb-2.px-2.py-1(v-if="isVibrateEnabled" @click="showAlert" style="font-size:10px; height: fit-content") Click here before scroll ;)
    custom-schedule-picker.py-2.rounded-lg.elevation-2
    div.my-9
    label Rate Card
    product-card(:products="products")
    hr.my-5
    product-card-3(:products="products")
    div.my-9
    label Quantity Selector
    qty-picker
</template>

<script>
import CustomTextField from '@/components/mycustom/customTextField.vue'
import CustomDatePicker from '@/components/mycustom/customDatePicker.vue'
import CustomDatePicker2 from '@/components/mycustom/customDatePickerV2.vue'
import CustomSchedulePicker from '@/components/mycustom/customSchedulePicker.vue'
import ScrollTrigger from '@/components/mycustom/scrollTrigger.vue'
import ProductCard from '@/components/CreatorComponents/ProductCardV2.vue';
import ProductCard3 from '@/components/CreatorComponents/ProductCardV3.vue';
import QtyPicker from '@/components/mycustom/qtyPicker.vue';

export default {
  name: 'MyCustom',
  components: { 
    CustomTextField,
    CustomDatePicker,
    CustomDatePicker2,
    CustomSchedulePicker,
    ScrollTrigger,
    ProductCard,
    ProductCard3,
    QtyPicker
  },
  data: () => ({
    testValue: '',
    isVibrateEnabled: false,
    products:[
      {
        product_id: 0,
        medium: 'instagram',
        title: 'Instagram Story',
        currency: 'usd',
        rate: 300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna, consectetur elementum nisi. Integer et arcu ante. Aliquam erat volutpat.'
      },
      {
        product_id: 1,
        medium: 'twitter',
        title: 'Tweet with image',
        currency: 'myr',
        rate: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna.'
      },
      {
        product_id: 2,
        medium: 'tiktok',
        title: 'Tiktok video created by me with signature move',
        currency: 'usd',
        rate: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna, consectetur elementum nisi. Integer et arcu ante. Aliquam erat volutpat. Donec gravida molestie mauris, vitae placerat libero pharetra in. Ut malesuada nibh ante, ac scelerisque lorem elementum in.'
      },
      {
        product_id: 3,
        medium: 'youtube',
        title: 'Video created by you',
        currency: 'myr',
        rate: 99999,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna, consectetur elementum nisi. Integer et arcu ante. Aliquam erat volutpat. Donec gravida molestie mauris, vitae placerat libero pharetra in. Ut malesuada nibh ante, ac scelerisque lorem elementum in.'
      }
    ]
  }),
  mounted() {
    this.isVibrateEnabled = navigator.vibrate
  },
  methods:{
    showAlert(){
      alert('Reason is to detect user interaction before browser allowing vibration. TQ ;)')
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  .mycustom{
    font-family: 'Inter', sans-serif;
  }
</style>
