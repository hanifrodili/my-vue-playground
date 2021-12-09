<template lang="pug">
.creator-component
  //- product-card.mb-2(v-for="(product, index) in products" :key="index" :productData="product" :productIndex="index")
  product-card-2(:products="products")
</template>

<script>
import ProductCard from '@/components/CreatorComponents/ProductCard.vue';
import ProductCard2 from '@/components/CreatorComponents/ProductCardV2.vue';

export default {
  name: 'CreatorComponent',
  components: { ProductCard, ProductCard2 },
  data: ()=>({
    products:[
      {
        title: 'Product Title 1',
        currency: 'RM',
        rate: 3000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna, consectetur elementum nisi. Integer et arcu ante. Aliquam erat volutpat.'
      },
      {
        title: 'Product Title 2',
        currency: 'SGD',
        rate: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis scelerisque magna.'
      },
      {
        title: 'Product Title 3',
        currency: 'Rp',
        rate: 10000000,
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
