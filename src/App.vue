<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      dark
      color="rgb(59, 57, 57)"
      app
      clipped
    >
      <allWeather></allWeather>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="rgb(97, 97, 255)">
      <v-app-bar-nav-icon
        color="#FFF"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <DarkMode></DarkMode>
    </v-app-bar>
    <br />
    <br />
    <br />
    <div class="content">
      <p class="title"></p>
      <p class="icon"></p>
      <p class="weat"></p>
      <p class="degrees"></p>
      <label class="humidity"></label>
      <label class="feels_like"></label>
      <label class="pressure"></label>
      <p id="next_days"></p>
      <hr />
      <NextFourDays></NextFourDays>
    </div>
    <BishkekWeather></BishkekWeather>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.sun {
  color: yellow;
}
.dark {
  margin-left: 10px;
  font-size: 20px;
  margin-top: 10px;
}
#app {
  background: rgb(97, 97, 255);
  color: aliceblue;
}
.item {
  background: rgb(97, 97, 255);
  margin-top: 8px;
  border-radius: 5px;
  margin-left: 7px;
  margin-right: 7px;
}
.item:hover {
  background: rgba(90, 101, 255, 0.801);
}
.content {
  text-align: center;
}
.content img {
  width: 80px;
}
.degrees {
  font-size: 40px;
}
.weat {
  font-size: 25px;
}
hr {
  background: #ffffff;
  margin-left: 45px;
  margin-right: 40px;
}
.humidity {
  margin-left: 10px;
  font-size: 30px;
}
.humidity i {
  font-size: 25px;
}
.feels_like {
  margin-left: 25px;
  font-size: 30px;
}
.feels_like i {
  font-size: 25px;
  margin-right: 4px;
}
.pressure {
  margin-left: 20px;
  font-size: 30px;
}
.pressure i {
  font-size: 25px;
}
</style>
