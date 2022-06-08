<template lang="pug">
v-dialog(v-model="dialog" scrollable persistent max-width="500px")
  template( v-slot:activator="{ on, attrs }" )
    v-btn.btn-add(:class="{'btn-add--active':dialog}"  v-bind="attrs" v-on="on" fab dark color="success")
      v-icon.add-icon mdi-plus
  v-card(style="background-color:rgba(255,255,255,0.8); backdrop-filter: blur(4px);")
    v-card-title.justify-space-between
      | Add Block
      v-btn(color="primary" fab x-small dark text @click="dialog = false")
        v-icon mdi-close
    v-card-text.pa-4
      v-container
        h4.mb-3 New Block
        v-row
          v-col(cols="12" md="6")
            v-btn(style="width:100%" @click="addBlock(position+1, 0), dialog=false") Intro
          v-col(cols="12" md="6")
            v-btn(style="width:100%" @click="addBlock(position+1, 1), dialog=false") Text
          v-col(cols="12" md="6")
            v-btn(style="width:100%" @click="addBlock(position+1, 2), dialog=false") Text & Image
          v-col(cols="12" md="6")
        div(v-if="usedBlock.length > 0")
          hr.mt-6.mb-3(style="width:100%")
          h4.mb-3 Reuse Block
          v-row
            v-col(cols="12" md="6" v-for="(block, index) in usedBlock" :key="index")
              v-btn(style="width:100%" @click="reuseBlock(position+1, usedBlock[index]), dialog=false") {{block.name}} {{block.reuseBlockID}}
</template>

<script>
export default {
  props: {
    position: {
      type: Number
    },
    usedBlock: {
      type: Array
    }
  },
  data: ()=>({
    dialog: false
  }),
  methods: {
    addBlock(pos,block){
      this.$emit('addBlock',pos,block)
    },
    reuseBlock(pos,block){
      this.$emit('reuseBlock',pos,JSON.stringify(block))
    }
  }
}
</script>
<style scoped>
.btn-add{
  display: block;
  position: absolute;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 100;
  opacity: .7;
  height: 40px;
  width: 40px;
}
.btn-add:hover, .btn-add--active{
    /* transform: scale(1.2); */
    /* color: var(--v-danger) !important;
    background-color: white !important; */
    border: 2px solid var(--v-danger) !important;
    opacity: 1;
  }
  .add-icon{
    transform: rotate(0deg);
  }
  .btn-add:hover .add-icon,.btn-add--active .add-icon{
    transform: rotate(45deg);
  }
</style>