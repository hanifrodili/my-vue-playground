<template lang="pug">
  .footer
    div.section-footer.bg-tertiary
      v-row.mx-auto(style="max-width:916px")
        v-col(cols="12" md="8")
          v-row
            v-col(cols="12" md="4")
              p.footer-heading Footer 1
              a(href="#")
                p.footer-item Link 1
              a(href="#")
                p.footer-item Link 2
              a(href="#")
                p.footer-item Link 3
            v-col(cols="12" md="4")
              p.footer-heading Footer 2
              a(href="#")
                p.footer-item Link 4
              a(href="#")
                p.footer-item Link 5
              a(href="#")
                p.footer-item Link 6
            v-col(cols="12" md="4")
              p.footer-heading Footer 3
              a(href="#")
                p.footer-item Link 7
              a(href="#")
                p.footer-item Link 8
              a(href="#")
                p.footer-item Link 9
        v-col(cols="12" md="4")
          img.footer-logo(src='https://via.placeholder.com/800x300?text=Logo' width="100%"  alt='')
          v-row
            v-col.text-center(cols="3")
              a(href="#" )
                v-icon.socmed-icon mdi-facebook
            v-col.text-center(cols="3")
              a(href="#" )
                v-icon.socmed-icon mdi-instagram
            v-col.text-center(cols="3")
              a(href="#" )
                v-icon.socmed-icon mdi-linkedin
            v-col.text-center(cols="3")
              a(href="#" )
                v-icon.socmed-icon mdi-twitter
          p.footer-copyright.text-center &copy; 2021 Hanif Rodili. All rights reserved.

</template>
<script>
export default {
  name: "Footer"
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.footer-heading{
  margin-bottom: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
.footer-item{
  color: #bdbdbd;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 16px;
}
.footer-copyright{
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.0025em;
  color: #bdbdbd;
  margin-top: 38px;
}
.footer-logo{
  margin-bottom: 20px;
}
.socmed-icon{
  font-size: 30px;
  color: #bdbdbd;
}
@media (max-width: 991px){
  .section-footer{
    text-align: center;
  }
}
</style>