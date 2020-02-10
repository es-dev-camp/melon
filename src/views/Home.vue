<template>
  <v-container>
    <v-row justify="center">
      <v-img alt="farms form logo" src="@/assets/logo.png" />
    </v-row>
    <v-col align="center">
      <div>
        <span>ユーザ名: </span>
        <strong>{{ currentUserEmail }}</strong>
      </div>
      <div class="my-5">
        <v-btn x-large color="primary" class="secondary--text" width="300px" @click="inputItemDialog = true">
          <v-icon dark color="secondary" class="mr-2">mdi-pencil</v-icon>
          注文内容を入力
        </v-btn>
      </div>
      <div class="my-5">
        <v-btn x-large color="primary" class="secondary--text" width="300px" to="/archive">
          <v-icon dark color="secondary" class="mr-2">mdi-eye</v-icon>
          過去の情報を確認
        </v-btn>
      </div>
    </v-col>
    <v-dialog v-model="inputItemDialog" max-width="600">
      <input-form
        :current-order="currentOrder"
        @onSave="onInputDialogSave"
        @onCancel="onInputDialogCancel"
      />
    </v-dialog>
    <v-snackbar
      v-model="successSnackbar"
      color="primary"
    >
      注文を追加しました
      <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
    </v-snackbar>
    <v-row>
      <v-col>
        <div class="mt-12">
          <v-btn color="error" @click="onSignOut">ログアウト</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getBlancOrderData, addOrder } from "@/modules/orderModule";
import { signOut } from "@/modules/signinModule";
import InputForm from "@/components/InputForm.vue";
import firebase from "firebase/app";

@Component({
  components: {
    InputForm
  }
})
export default class Home extends Vue {
  inputItemDialog: boolean = false;
  successSnackbar: boolean = false;
  currentOrder = getBlancOrderData();

  get currentUserEmail() {
    const currentUser = firebase.auth().currentUser;
    return currentUser ? currentUser.email : "不明なユーザー"
  }

  async onInputDialogSave() {
    await addOrder(this.currentOrder);
    console.log("注文を追加");
    this.successSnackbar = true;
    this.inputItemDialog = false;
  }
  onInputDialogCancel() {
    console.log("注文追加をキャンセル");
    this.inputItemDialog = false;
  }

  async onSignOut() {
    await signOut();
  }
}
</script>
