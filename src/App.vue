<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" dark app clipped>
      <allWeather></allWeather>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="rgb(130, 113, 221)">
      <!-- <DarkMode></DarkMode> -->
      <allWeather></allWeather>
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
.searchh {
  color: #ffffff;
  font-size: 26px;
  margin-top: 4px;
}
.searchh:hover {
  color: silver;
}
.sun {
  color: yellow;
}
.dark {
  /* margin-left: 10px; */
  font-size: 20px;
  margin-top: 10px;
}
#app {
  color: aliceblue;
  background: linear-gradient(
    to bottom right,
    rgb(101, 115, 255),
    rgb(111, 114, 247),
    rgb(120, 114, 239),
    rgb(130, 113, 231),
    rgb(139, 112, 223),
    rgb(149, 111, 215),
    rgb(158, 111, 208),
    rgb(168, 110, 200),
    rgb(177, 109, 192),
    rgb(187, 108, 184),
    rgb(196, 108, 176),
    rgb(206, 107, 168)
  );
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
