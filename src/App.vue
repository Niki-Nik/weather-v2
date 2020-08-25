<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" dark color="rgb(59, 57, 57)" app clipped>
      <div class="location">
        <v-list>
          <v-list-item>
            <input
              type="text"
              v-on:keyup.enter="weather"
              v-model="getWeather"
              placeholder="Enter city..."
              class="form-control"
            />
          </v-list-item>
        </v-list>
      </div>
      <v-btn block color="blue-grey" class="btnn" @click="weather">get the weather</v-btn>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="rgb(97, 97, 255)">
      <v-app-bar-nav-icon color="#FFF" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span @click="darkMode" id="dark" class="dark btn">
        <span class="material-icons">brightness_2</span>
      </span>
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
      <hr />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isDarkMode: false,
      drawer: false,
      getWeather: "",

      url: "http://api.openweathermap.org/data/2.5/weather?",
      q: "q=",
      nameCity: "",
      appid: "&appid=2f214a568d767d2c4201c9df83ad2f7d"
    };
  },
  methods: {
    darkMode() {
      if (this.isDarkMode === false) {
        this.isDarkMode = true;
        document.getElementById("dark").innerHTML =
          '<span class="sun material-icons">brightness_7</span>';
        document.getElementById("app").style.backgroundColor = "#222222";
      } else {
        this.isDarkMode = false;
        document.getElementById("app").style.backgroundColor =
          "rgb(97, 97, 255)";
        document.getElementById("dark").innerHTML =
          '<span class="material-icons">brightness_2</span>';
      }
    },
    weather() {
      if (this.getWeather != "") {
        this.nameCity = this.getWeather;
        this.getWeather = "";
        fetch(this.url + this.q + this.nameCity + this.appid)
          .then(function(resp) {
            return resp.json();
          })
          .then(function(data) {
            // console.log(data);
            document.querySelector(".degrees").innerHTML =
              Math.round(data.main.temp - 273) + " &deg;" + "C";
            document.querySelector(".weat").textContent =
              data.weather[0]["description"];

            document.querySelector(".humidity").innerHTML =
              '<i class="material-icons ii">opacity</i>' +
              data.main["humidity"];

            document.querySelector(".pressure").innerHTML =
              '<i class="material-icons">waves</i>' + data.main["pressure"];

            document.querySelector(".feels_like").innerHTML =
              '<i class="fa fa-thermometer-half" aria-hidden="true"></i>' +
              Math.round(data.main["feels_like"] - 273);

            document.querySelector(".title").textContent = data.name;
            if (data.weather[0]["icon"] === "03d") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "03n") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "01d") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "01n") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "02d") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "04d") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "04n") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.weather[0]["icon"] === "02n") {
              document.querySelector(".icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
          });
      }
    }
  },
  mounted() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=2f214a568d767d2c4201c9df83ad2f7d"
    )
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        // console.log(data);
        document.querySelector(".degrees").innerHTML =
          Math.round(data.main.temp - 273) + " &deg;" + "C";
        document.querySelector(".weat").textContent =
          data.weather[0]["description"];

        document.querySelector(".humidity").innerHTML =
          '<i class="material-icons ii">opacity</i>' + data.main["humidity"];

        document.querySelector(".pressure").innerHTML =
          '<i class="material-icons">waves</i>' + data.main["pressure"];

        document.querySelector(".feels_like").innerHTML =
          '<i class="fa fa-thermometer-half" aria-hidden="true"></i>' +
          Math.round(data.main["feels_like"] - 273);

        document.querySelector(".title").textContent = data.name;
        if (data.weather[0]["icon"] === "03d") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "03n") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "01d") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "01n") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "02d") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "04d") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "04n") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
        }
        if (data.weather[0]["icon"] === "02n") {
          document.querySelector(".icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
        }
      });
  }
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
.btnn {
  margin-top: 5px;
}
img {
  width: 30px;
}
input {
  background: rgb(255, 255, 255);
  margin-top: 10px;
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