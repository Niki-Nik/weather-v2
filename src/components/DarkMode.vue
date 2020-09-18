<template>
  <span id="dark" class="dark btn">
    <span v-bind:title="'Включить темный режим'" class="sun material-icons"
      >brightness_7</span
    >
  </span>
  <!-- brightness_2 -->
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    darkMode() {
      if (this.isDarkMode === false) {
        this.isDarkMode = true;
        document.getElementById("dark").innerHTML =
          '<span class="mon material-icons">brightness_4</span>';
        document.getElementById("app").style.background = "rgb(34, 34, 34)";
      } else {
        this.isDarkMode = false;
        document.getElementById("app").style.background = "rgb(97, 97, 255)";
        document.getElementById("dark").innerHTML =
          '<span class="sun material-icons">brightness_7</span>';
      }
    },
  },
};
</script>

<style></style>
