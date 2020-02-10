import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import moment from "moment";

import "@/firebase/firebase";

Vue.config.productionTip = false;
console.info(process.env.VUE_APP_VERSION);

Vue.filter("displayDateTime", (value: any) => {
  try {
    const dateFormat = "YYYY/MM/DD HH:mm:ss";
    const date = moment.unix(value.seconds);
    return date.format(dateFormat);
  } catch {
    return "Unknown";
  }
});

Vue.filter("displayDate", (value: any) => {
  try {
    const dateFormat = "YYYY/MM/DD";
    const date = moment.unix(value.seconds);
    return date.format(dateFormat);
  } catch {
    return "Unknown";
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
