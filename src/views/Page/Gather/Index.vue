<template lang="pug">
  .gather
    navbar
    top-section
    brand-banner
    features-section
    testimoni-section
    solutions-section
    cta-banner
    my-footer
</template>
<script>
import Navbar from '@/components/landingpage/gather/Navbar.vue'
import TopSection from '@/components/landingpage/gather/TopSection.vue'
import BrandBanner from '@/components/landingpage/gather/BrandBanner.vue'
import FeaturesSection from '@/components/landingpage/gather/FeaturesSection.vue'
import TestimoniSection from '@/components/landingpage/gather/TestimoniSection.vue'
import SolutionsSection from '@/components/landingpage/gather/SolutionsSection.vue'
import CtaBanner from '@/components/landingpage/gather/CtaBanner.vue'
import MyFooter from '@/components/landingpage/gather/Footer.vue'
export default {
  name: "Gather",
  components: {
    Navbar,
    TopSection,
    BrandBanner,
    FeaturesSection,
    TestimoniSection,
    SolutionsSection,
    CtaBanner,
    MyFooter
  }
}
</script>
<style scoped>
 @import '../../../assets/css/gather.css';
</style>