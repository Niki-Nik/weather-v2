<template>
  <v-list dense>
    <v-list-item link>
      <v-list-item-content>
        <v-switch color="rgb(94, 94, 255)" @click="DarkMode"></v-switch>Темный режим
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    DarkMode() {
      if (this.$vuetify.theme.dark == true) {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
    }
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>

<style>
</style>