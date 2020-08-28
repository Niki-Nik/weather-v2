<template>
  <div>
    <div class="location">
      <v-list>
        <v-list-item>
          <input
            type="text"
            v-on:keyup.enter="weather"
            v-model="getWeather"
            placeholder="Введите название города..."
            class="form-control"
          />
        </v-list-item>
      </v-list>
    </div>
    <v-btn block color="blue-grey" class="btnn" @click="weather">узнать погоду</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getWeather: "",

      url: "http://api.openweathermap.org/data/2.5/weather?",
      q: "q=",
      nameCity: "",
      appid: "&appid=2f214a568d767d2c4201c9df83ad2f7d",

      url2: "http://api.openweathermap.org/data/2.5/forecast?"
    };
  },
  methods: {
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

        fetch(this.url2 + this.q + this.nameCity + this.appid)
          .then(function(res) {
            return res.json();
          })
          .then(function(data) {
            document.querySelector(".one").innerHTML =
              Math.round(data.list[4]["main"]["temp"] - 273) + "&deg;" + "C";
            document.querySelector(".two").innerHTML =
              Math.round(data.list[12]["main"]["temp"] - 273) + "&deg;" + "C";
            document.querySelector(".three").innerHTML =
              Math.round(data.list[20]["main"]["temp"] - 273) + "&deg;" + "C";
            document.querySelector(".four").innerHTML =
              Math.round(data.list[28]["main"]["temp"] - 273) + "&deg;" + "C";

            //
            if (data.list[4].weather[0]["icon"] === "03d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[4].weather[0]["icon"] === "03n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[4].weather[0]["icon"] === "01d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[4].weather[0]["icon"] === "01n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[4].weather[0]["icon"] === "02d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[4].weather[0]["icon"] === "04d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[4].weather[0]["icon"] === "04n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[4]["weather"][0]["icon"] === "02n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            //

            if (data.list[12]["weather"][0]["icon"] === "03d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "03n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "01d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "01n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "02d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "04d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "04n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[12].weather[0]["icon"] === "02n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }

            //
            if (data.list[20]["weather"][0]["icon"] === "03d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "03n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "01d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "01n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "02d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "04d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "04n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[20].weather[0]["icon"] === "02n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            //
            if (data.list[28]["weather"][0]["icon"] === "03d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "03n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "01d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "01n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "02d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "04d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "04n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "02n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[28].weather[0]["icon"] === "10d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
          });
      }
    }
  }
};
</script>

<style>
</style>