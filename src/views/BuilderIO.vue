<template lang="pug">
  render-content(
    model="page"
    @contentLoaded="contentLoaded"
    @contentError="contentError"
    :options="options"
  )
</template>

<script>
import { builder, RenderContent } from '@builder.io/vue';
// Enter your Builder.io public API key
builder.init('a3c63523164d497ba2faabde4c0540fa');

// Optional - Set attributes to target content off of
// https://www.builder.io/c/docs/guides/targeting-and-scheduling
builder.setUserAttributes({
  locale: 'en_us',
});
export default {
  components: { RenderContent },
  data: () => ({
    notFound: false,
    options: {
      // optional - define the URL to pull content for
      // in browseres this is grabbed automatically from location.href for pages
      // and content targeted to specific URLs
      // url: this.$route.path,
      // optional - filter content on custom fields
      query: {
        data: {
          myCustomField: 'myCustomValue',
        },
      },
    }
  }),
  methods: {
    contentLoaded(content) {
      if (!content) {
        this.notFound = true;
      }
    },
    contentError(err) {
      // Handle error
      console.log(err);
    },
  },
}
</script>