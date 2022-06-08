<template lang="pug">
.photo-card
  .photo-card-body
    img(src="https://picsum.photos/900/1200" width="100%" )
    .like-btn.float-btn
      svg(v-if="true"  width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(fill-rule="evenodd" clip-rule="evenodd" d="M6.21809 2C5.35409 2 4.54409 2.334 3.93809 2.941C2.68009 4.201 2.68009 6.252 3.93909 7.514L10.9981 14.585L18.0581 7.514C19.3171 6.252 19.3171 4.201 18.0581 2.941C16.8461 1.726 14.7101 1.728 13.4981 2.941L11.7061 4.736C11.3301 5.113 10.6661 5.113 10.2901 4.736L8.49809 2.94C7.89209 2.334 7.08309 2 6.21809 2ZM10.9981 17C10.7331 17 10.4781 16.895 10.2911 16.706L2.52309 8.926C0.487094 6.886 0.487094 3.567 2.52309 1.527C3.50709 0.543 4.81909 0 6.21809 0C7.61709 0 8.93009 0.543 9.91309 1.527L10.9981 2.614L12.0831 1.528C13.0671 0.543 14.3791 0 15.7791 0C17.1771 0 18.4901 0.543 19.4731 1.527C21.5101 3.567 21.5101 6.886 19.4741 8.926L11.7061 16.707C11.5181 16.895 11.2641 17 10.9981 17Z" fill="white")

      svg(v-else width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(fill-rule="evenodd" clip-rule="evenodd" d="M10.9981 17C10.7321 17 10.4781 16.895 10.2901 16.706L2.52309 8.926C0.487094 6.886 0.487094 3.567 2.52309 1.527C3.50609 0.543 4.81909 0 6.21809 0C7.61709 0 8.93009 0.543 9.91309 1.527L10.9981 2.614L12.0821 1.528C13.0661 0.543 14.3791 0 15.7781 0C17.1771 0 18.4901 0.543 19.4731 1.527C21.5091 3.567 21.5091 6.886 19.4741 8.926L11.7061 16.707C11.5181 16.895 11.2641 17 10.9981 17Z" fill="white")
    .del-btn.float-btn
      svg(width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z" fill="white")

    .video-btn.float-btn
      svg(width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M0 26.4552V2.49674C0 0.949931 1.68073 -0.0113832 3.014 0.772852L23.1082 12.5923C24.4139 13.3604 24.425 15.2448 23.1283 16.0281L3.03415 28.1671C1.70121 28.9723 0 28.0125 0 26.4552Z" fill="white")
</template>

<script>
export default {
  name: 'PhotoCard'
}
</script>

<style lang="scss" scoped>
.photo-card{
  aspect-ratio: 3 / 4;
  border-radius: 15px;
  // max-width: 159px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.float-btn{
  position: absolute;
  z-index: 9;
}
.like-btn{
  bottom: 12.49px;
  left: 17px;
}
.del-btn{
  bottom: 12.49px;
  right: 17px;
}
.video-btn{
  top: 40%;
  right: 40%;
}
</style>
