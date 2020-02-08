declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vuetify/lib" {
  import Vue from "vue";
  export interface VFormObj extends Vue {
    validate(): boolean;
  }
}
declare module "vuetify/lib/directives";
declare module "vuetify/lib/locale/ja";
declare module "firebase/firebase";
