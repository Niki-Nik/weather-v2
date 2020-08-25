import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";
import DarkMode from "@/components/DarkMode";
import BishkekWeather from "@/components/BishkekWeather";

Vue.config.productionTip = false;

Vue.component("DarkMode", DarkMode);
Vue.component("BishkekWeather", BishkekWeather);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
