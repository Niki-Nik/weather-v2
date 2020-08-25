<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="#FF5722" dark flat>
              <v-toolbar-title>Узнать погоду</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                color="#FF5722"
                v-model="input"
                label="Название города..."
                type="text"
                v-on:keyup.enter="Discover"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer>
                <p class="weat"></p>
                <label class="degrees"></label>
              </v-spacer>
              <v-btn color="#FF5722" @click="Discover" dark>Найти</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      getWeather: "",
      input: "",
      url: "http://api.openweathermap.org/data/2.5/weather?",
      q: "q=",
      nameCity: "",
      appid: "&appid=70e1ed322b02acbc57d443dd91065f3e"
    };
  },
  methods: {
    Discover() {
      this.nameCity = this.input;
      fetch(this.url + this.q + this.nameCity + this.appid)
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          document.querySelector(".degrees").innerHTML =
            Math.round(data.main.temp - 273) + "&deg;";
          document.querySelector(".weat").textContent =
            data.weather[0]["description"];
        });
      this.input = "";
    }
  }
};
</script>

<style>
</style>
