import Vue from "vue";
import Vuetify from "vuetify/lib";
import ja from "vuetify/src/locale/ja";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify);

/* eslint-disable no-unused-vars, @typescript-eslint/camelcase */
const lightThemeSettings = {
  primary: "#1F76DD",
  secondary: "#EDC32F",
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
