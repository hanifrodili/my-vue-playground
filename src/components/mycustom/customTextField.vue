<template lang="pug">
  .my-text-field
    v-text-field.mt-3(v-model="name1"  label="First Name" filled rounded hide-details="auto" :rules="rules.not_empty" clearable)
      template( v-slot:append)
        svg(class="warning-icon"  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(fill-rule="evenodd" clip-rule="evenodd" d="M8.16602 5.66602C8.16602 5.20602 8.53935 4.83268 8.99935 4.83268C9.45935 4.83268 9.83268 5.20602 9.83268 5.66602V9.83268C9.83268 10.2927 9.45935 10.666 8.99935 10.666C8.53935 10.666 8.16602 10.2927 8.16602 9.83268V5.66602ZM8.16602 12.3327C8.16602 11.8727 8.53935 11.4993 8.99935 11.4993C9.45935 11.4993 9.83268 11.8727 9.83268 12.3327C9.83268 12.7927 9.45935 13.166 8.99935 13.166C8.53935 13.166 8.16602 12.7927 8.16602 12.3327ZM8.99935 15.666C5.32352 15.666 2.33268 12.6752 2.33268 8.99935C2.33268 5.32352 5.32352 2.33268 8.99935 2.33268C12.6752 2.33268 15.666 5.32352 15.666 8.99935C15.666 12.6752 12.6752 15.666 8.99935 15.666ZM8.99935 0.666016C4.39685 0.666016 0.666016 4.39685 0.666016 8.99935C0.666016 13.6018 4.39685 17.3327 8.99935 17.3327C13.6018 17.3327 17.3327 13.6018 17.3327 8.99935C17.3327 4.39685 13.6018 0.666016 8.99935 0.666016Z" fill="#CD3300")
    v-text-field.mt-3(v-model="name2"  label="Last Name" filled rounded hide-details="auto" :rules="rules.not_empty" clearable)
      template( v-slot:append)
        svg(class="warning-icon"  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(fill-rule="evenodd" clip-rule="evenodd" d="M8.16602 5.66602C8.16602 5.20602 8.53935 4.83268 8.99935 4.83268C9.45935 4.83268 9.83268 5.20602 9.83268 5.66602V9.83268C9.83268 10.2927 9.45935 10.666 8.99935 10.666C8.53935 10.666 8.16602 10.2927 8.16602 9.83268V5.66602ZM8.16602 12.3327C8.16602 11.8727 8.53935 11.4993 8.99935 11.4993C9.45935 11.4993 9.83268 11.8727 9.83268 12.3327C9.83268 12.7927 9.45935 13.166 8.99935 13.166C8.53935 13.166 8.16602 12.7927 8.16602 12.3327ZM8.99935 15.666C5.32352 15.666 2.33268 12.6752 2.33268 8.99935C2.33268 5.32352 5.32352 2.33268 8.99935 2.33268C12.6752 2.33268 15.666 5.32352 15.666 8.99935C15.666 12.6752 12.6752 15.666 8.99935 15.666ZM8.99935 0.666016C4.39685 0.666016 0.666016 4.39685 0.666016 8.99935C0.666016 13.6018 4.39685 17.3327 8.99935 17.3327C13.6018 17.3327 17.3327 13.6018 17.3327 8.99935C17.3327 4.39685 13.6018 0.666016 8.99935 0.666016Z" fill="#CD3300")
    p.mt-3.text-center {{name1}} {{name2}}
</template>
<script>
export default {
  name: "MyTextField",
  data: () => ({
    name1: 'John',
    name2: '',
    rules: {
      not_empty: [v => !!v || 'This field is required'],
      // not_empty: [v => v.length >= 1 || 'This field is required']
    }
  })
}
</script>
<style lang="scss" scoped>
::v-deep{
  .v-input .warning-icon{
    display: none;
  }
  .v-input.error--text .warning-icon{
    display: unset !important;
  }
  .v-text-field--rounded > .v-input__control > .v-input__slot {
    padding: 8px 16px;
  }
  .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
    align-items: center;
  }
  .v-text-field--filled{
    .v-input__slot{
      background: #F7F7F7 !important;
      border: 1px solid #c1c1c1 !important;
      border-radius: 4px;
      max-height: 48px;
      min-height: 48px;
      padding-left: 16px;
    }
    :not(.v-text-field--single-line) input{
      margin-top: auto;
      padding: 0;
    }
    .v-label{
      top: unset !important;
      color: #848484;
    }
    .v-label--active{
      transform: translateY(-10px) scale(0.75);
      color: #848484 ;
    }
  }
  .v-input--has-state{
    .v-label{
      color: #CD3300 !important;
    }
    .v-input__slot{
      border: 1px solid #CD3300 !important;
    }
    .error--text{
      color: #CD3300 !important;
    }
  }
  .v-input--has-state.v-input--is-focused{
    .v-label{
      color: #CD3300 !important;
    }
    .v-input__slot{
      border: 1.5px solid #CD3300 !important;
    }
  }
  .theme--light.v-input input,
  .theme--light.v-input textarea{
    color: #333 ;
    caret-color: #333;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 24px !important;
  }
  .theme--light.v-input.error--text input,
  .theme--light.v-input.error--text textarea{
    color: #CD3300 !important;
    caret-color: #CD3300;
  }
  .v-input--is-focused{
    .v-label{
      color: #848484 !important;
    }
    .v-input__slot{
      border: 1.5px solid #333 !important;
    }
  }
  .v-text-field--enclosed .v-input__append-inner{
    margin: auto 0 !important;
  }
  .mdi::before{
    font-size: 20px;
    color: #333;
  }
}
</style>
