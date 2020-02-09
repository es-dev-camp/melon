<template>
  <v-container>
    <v-row justify="center">
      <v-img alt="farms form logo" src="@/assets/logo.png" />
    </v-row>
    <v-col align="center">
      <div>
        <v-text>ユーザ名: </v-text>
        <strong>{{ name }}</strong>
      </div>
      <div class="my-5">
        <v-btn x-large width="300px" to="/archive">
          <v-icon dark>mdi-pencil</v-icon>
          <v-text>注文内容を入力</v-text>
        </v-btn>
      </div>
      <div class="my-5">
        <v-btn x-large width="300px">
          <v-icon dark>mdi-eye</v-icon>
          <v-text>過去の情報を確認</v-text>
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
    <v-row justify="center">
      <v-btn width="300px" @click="onClick">
        <v-icon dark>mdi-wrench</v-icon>
        <v-text>注文データ追加</v-text>
      </v-btn>
    </v-row>
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
  name: string = firebase.auth().currentUser.email;

  async onClick() {
    const order = getBlancOrderData();
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
