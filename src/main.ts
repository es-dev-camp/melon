import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "@/firebase/firebase";

Vue.config.productionTip = false;
console.info(process.env.VUE_APP_VERSION);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
