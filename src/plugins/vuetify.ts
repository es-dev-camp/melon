import Vue from "vue";
import Vuetify from "vuetify";
import ja from "vuetify/src/locale/ja";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

/* eslint-disable no-unused-vars, @typescript-eslint/camelcase */
const lightThemeSettings = {
  primary: "#01FF03",
  secondary: "#FF9360",
  accent: "#04E3EC",
  neutral: "#113364",
  neutral_light: "#F3F7FB",
  error: "#FF5252",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FB8C00"
};
/* eslint-enable */

export default new Vuetify({
  lang: {
    locales: { ja },
    current: "ja"
  },
  theme: {
    dark: false,
    themes: {
      light: lightThemeSettings
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
