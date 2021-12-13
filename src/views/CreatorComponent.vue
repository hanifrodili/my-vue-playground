<template lang="pug">
.creator-component
  //- product-card.mb-2(v-for="(product, index) in products" :key="index" :productData="product" :productIndex="index")
  product-card(:products="products")
</template>

<script>
// import ProductCard from '@/components/CreatorComponents/ProductCard.vue';
import ProductCard from '@/components/CreatorComponents/ProductCardV2.vue';

export default {
  name: 'CreatorComponent',
  components: { ProductCard },
  data: ()=>({
    products:[
      {
        medium: 'instagram',
        title: 'Instagram Story',
        currency: 'RM',
        rate: 900,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna, consectetur elementum nisi. Integer et arcu ante. Aliquam erat volutpat.'
      },
      {
        medium: 'twitter',
        title: 'Tweet with image',
        currency: 'RM',
        rate: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna.'
      },
      {
        medium: 'tiktok',
        title: 'Tiktok video create by me',
        currency: 'RM',
        rate: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna, consectetur elementum nisi. Integer et arcu ante. Aliquam erat volutpat. Donec gravida molestie mauris, vitae placerat libero pharetra in. Ut malesuada nibh ante, ac scelerisque lorem elementum in.'
      },
      {
        medium: 'youtube',
        title: 'Video create by you',
        currency: 'RM',
        rate: 500,
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
  padding: 50px 20px;
}
.product-card{
  max-width: 345px;
  width: 100%;
  margin: auto;
}
</style>
