<template>
  <v-container container--fluid class="pa-0">
    <v-row no-gutters>
      <v-col
        cols="6"
        style="height:100vh;"
        class="d-flex align-center justify-center"
      >
        <img src="@/assets/logo.png" width="80%" />
      </v-col>
      <v-col
        cols="6"
        style="height:100vh;"
        class="d-flex align-center justify-center primary"
      >
        <v-form
          ref="signInForm"
          v-model="valid"
          lasy-validation
          style="width:60%;"
          @keyup.enter.native="doSignIn()"
        >
          <v-text-field
            v-model="email"
            label="メールアドレス"
            placeholder="メールアドレス"
            required
            solo
          ></v-text-field>
          <v-text-field
            v-show="!showPasswordReset"
            v-model="password"
            label="パスワード"
            placeholder="パスワード"
            required
            solo
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          ></v-text-field>
          <v-btn
            v-show="!showPasswordReset"
            block
            color="secondary"
            class="font-weight-bold login-btn"
            @click="doSignIn"
            >ログイン</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
    <v-overlay :value="isInProgress">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";

@Component
export default class SignIn extends Vue {
  email: string = "";
  password: string = "";
  show: boolean = false;
  valid: boolean = true;
  isInProgress: boolean = false;
  showPasswordReset = false;

  async doSignIn() {
    if ((this.$refs.signInForm as any).validate()) {
      this.isInProgress = true;
      await this.signIn({ email: this.email, password: this.password })
        .catch(err => {
          const errorCodeList = [
            "auth/invalid-email",
            "auth/user-disabled",
            "auth/user-not-found",
            "auth/wrong-password"
          ];
          const errorMessage = errorCodeList.includes(err.code)
            ? "ユーザーIDまたはパスワードの入力に誤りがあります"
            : "ログイン処理に失敗しました";
          this.toastErrorMessage(errorMessage);
        })
        .finally(() => {
          this.isInProgress = false;
        });
    }
  }
  async signIn(payload: { email: string; password: string }) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .catch(err => {
        console.log("error: ", err);
        throw err;
      });
    console.log("signIn");
  }
  toastErrorMessage(errorMessage: string) {
    console.error(errorMessage);
  }
}
</script>
