import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";
import DarkMode from "@/components/DarkMode";
import BishkekWeather from "@/components/BishkekWeather";
import allWeather from "@/components/allWeather";

Vue.config.productionTip = false;

Vue.component("DarkMode", DarkMode);
Vue.component("BishkekWeather", BishkekWeather);
Vue.component("allWeather", allWeather);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
