import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";
import DarkMode from "@/components/DarkMode";

Vue.config.productionTip = false;

Vue.component("DarkMode", DarkMode);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
