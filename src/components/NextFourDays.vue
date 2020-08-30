<template>
  <div>
    <label>
      <p class="one_day"></p>
      <p class="one_icon"></p>
      <p class="one"></p>
    </label>
    <label>
      <p class="two_icon"></p>
      <p class="two"></p>
    </label>
    <label>
      <p class="three_icon"></p>
      <p class="three"></p>
    </label>
    <label>
      <p class="four_icon"></p>
      <p class="four"></p>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Bishkek&appid=2f214a568d767d2c4201c9df83ad2f7d"
    )
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
          document.querySelector(".one_icon").innerHTML =
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
          document.querySelector(".one_icon").innerHTML =
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
          document.querySelector(".one_icon").innerHTML =
            ' <img src="https://openweathermap.org/img/wn/10n@2x.png"/>';
        }
      });
  }
};
</script>

<style></style>
