<template lang="pug">
  v-speed-dial.btn-open(v-model="fab" v-if="editable" direction="left" transition="slide-x-reverse-transition" right=true bottom=true)
    template( v-slot:activator )
      v-btn.btn-speeddial(v-model="fab" dark small fab color="primary")
        v-icon(v-if="!fab") mdi-dots-horizontal
        v-icon(v-else) mdi-close
    v-tooltip(bottom)
      template( v-slot:activator="{ on, attrs }" )
        v-btn.btn-edit(@click="editDialog(true)" fab x-small dark color="success" v-bind="attrs" v-on="on")
          v-icon.edit-icon mdi-pencil
      span Edit Block
    v-tooltip(bottom)
      template( v-slot:activator="{ on, attrs }" )
        v-btn.btn-edit(fab x-small dark color="red" v-bind="attrs" v-on="on")
          v-icon.edit-icon(@click="editBlock(blockID,'delete')") mdi-trash-can
      span Delete Block
    v-tooltip(bottom)
      template( v-slot:activator="{ on, attrs }" )
        v-btn.btn-edit(fab x-small dark color="warning" v-bind="attrs" v-on="on")
          v-icon.edit-icon(@click="editBlock(blockIndex,'down')") mdi-arrow-down-thick
      span Move Block Down
    v-tooltip(bottom)
      template( v-slot:activator="{ on, attrs }" )
        v-btn.btn-edit(fab x-small dark color="warning" v-bind="attrs" v-on="on")
          v-icon.edit-icon(@click="editBlock(blockIndex,'up')") mdi-arrow-up-thick
      span Move Block Up
</template>
<script>
export default {
  name:"SpeedMenu",
  props:{
    editable:{
      type: Boolean,
      default: false
    },
    dialog:{
      type: Boolean,
      default: false
    },
    blockIndex:{
      type: Number
    },
    blockID:{
      type: String
    }
  },
  data:()=>({
    fab: false,
  }),
  methods:{
    editDialog(bool){
      this.$emit('openDialog',bool)
    },
    editBlock(ind,act){
      this.$emit('editBlock',ind,act)
    }
  }
}
</script>
<style scoped>
.btn-open{
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
  }
  .btn-edit{
    z-index: 99;
  }
  .btn-edit{
    z-index: 99;
  }
  .btn-edit:hover{
    transform: scale(1.2);
    color: var(--v-primary) !important;
    background-color: white !important;
    border: 2px solid var(--v-primary) !important;
  }
  .btn-speeddial{
      opacity: .5;
  }
  .btn-speeddial:hover,
  .btn-speeddial:active,
  .btn-speeddial:focus{
      opacity: 1;
  }
</style>
