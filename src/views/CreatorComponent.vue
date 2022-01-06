<template lang="pug">
.creator-component
  //- product-card.mb-2(v-for="(product, index) in products" :key="index" :productData="product" :productIndex="index")
  product-card(:products="products")
  product-card-3(:products="products")
  hr
  div.mx-auto.my-4(style="max-width: 345px")
    v-row
      v-col.pa-2(cols="6" v-for="n in 6" :key="n")
        photo-card
</template>

<script>
// import ProductCard from '@/components/CreatorComponents/ProductCard.vue';
import ProductCard from '@/components/CreatorComponents/ProductCardV2.vue';
import ProductCard3 from '@/components/CreatorComponents/ProductCardV3.vue';
import PhotoCard from '@/components/CreatorComponents/PhotoCard.vue';

export default {
  name: 'CreatorComponent',
  components: { ProductCard, ProductCard3, PhotoCard },
  data: ()=>({
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
        title: 'Tiktok video created by me',
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
  })
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
.creator-component{
  background-color: #eeeeee;
  font-family: 'Inter', sans-serif;
  padding: 50px 0px;
}
</style>
