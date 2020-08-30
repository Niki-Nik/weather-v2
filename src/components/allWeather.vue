<template>
  <div>
    <div class="location">
      <v-list>
        <v-dialog v-model="dialog" width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-btn block color="rgb(97, 97, 255)" dark v-bind="attrs" v-on="on">узнать погоду</v-btn>
          </template>

          <v-card>
            <v-card-title class="win">Введите город</v-card-title>

            <v-text-field
              placeholder="Введите название города..."
              v-on:keyup.enter="weather"
              v-model="getWeather"
              class="input"
            ></v-text-field>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-on:click="weather"
                color="rgb(97, 97, 255)"
                text
                @click="dialog = false"
              >узнать погоду</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getWeather: "",
      dialog: false,

      url: "http://api.openweathermap.org/data/2.5/weather?",
      q: "q=",
      nameCity: "",
      appid: "&appid=2f214a568d767d2c4201c9df83ad2f7d",

      url2: "http://api.openweathermap.org/data/2.5/forecast?",
      q2: "q="
    };
  },
  methods: {
    weather() {
      this.inputWeather = true;
      if (this.getWeather != "") {
        this.nameCity = this.getWeather;
        this.getWeather = "";
        this.dialog = false;
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

        fetch(this.url2 + this.q2 + this.nameCity + this.appid)
          .then(function(res) {
            return res.json();
          })
          .then(function(data) {
            document.querySelector(".one").innerHTML =
              Math.round(data.list[1]["main"]["temp"] - 273) + "&deg;" + "C";
            document.querySelector(".two").innerHTML =
              Math.round(data.list[9]["main"]["temp"] - 273) + "&deg;" + "C";
            document.querySelector(".three").innerHTML =
              Math.round(data.list[17]["main"]["temp"] - 273) + "&deg;" + "C";
            document.querySelector(".four").innerHTML =
              Math.round(data.list[25]["main"]["temp"] - 273) + "&deg;" + "C";

            //
            if (data.list[1].weather[0]["icon"] === "03d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "03n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "01d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "01n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "02d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "04d") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "04n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[1]["weather"][0]["icon"] === "02n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[1].weather[0]["icon"] === "10n") {
              document.querySelector(".one_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/10n@2x.png"/>';
            }
            //

            if (data.list[9]["weather"][0]["icon"] === "03d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "03n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "01d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "01n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "02d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "04d") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "04n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "02n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[9].weather[0]["icon"] === "10n") {
              document.querySelector(".two_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/10n@2x.png"/>';
            }

            //
            if (data.list[17]["weather"][0]["icon"] === "03d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "03n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "01d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "01n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "02d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "04d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "04n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "02n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "10d") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[17].weather[0]["icon"] === "10n") {
              document.querySelector(".three_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/10n@2x.png"/>';
            }
            //
            if (data.list[25]["weather"][0]["icon"] === "03d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03d@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "03n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/03n@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "01d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01d@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "01n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/01n@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "02d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02d@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "04d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04d@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "04n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/04n@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "02n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "10d") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/02n@2x.png"/>';
            }
            if (data.list[25].weather[0]["icon"] === "10n") {
              document.querySelector(".four_icon").innerHTML =
                ' <img src="https://openweathermap.org/img/wn/10n@2x.png"/>';
            }
          });
      }
    }
  }
};
</script>

<style>
.btnn {
  margin-top: 5px;
}
.win {
  background: rgb(97, 97, 255);
  color: aliceblue;
}
</style>
