<template lang="pug">
  div.setting-panel
    div.settings()
      component(
        v-for="(component, name) in settings"
        :key="name"
        :is="component"
        :node="selectedNode"
      )
</template>
<script>
export default {
  name: "SettingPanel",
  inject: [
    'editor',
  ],
  computed: {
    selectedNode() {
      return this.editor.selectedNode;
    },
    settings() {
      if (!this.selectedNode) {
        return null;
      }

      return this.editor.getSettings(this.selectedNode);
    },
  },
};
</script>