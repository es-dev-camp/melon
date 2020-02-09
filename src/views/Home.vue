<template>
  <v-container>
    <v-row justify="center">
      <v-img alt="farms form logo" src="@/assets/logo.png" />
    </v-row>
    <v-col align="center">
      <div class="my-5">
        <v-btn x-large @click="inputItemDialog = true">注文内容を入力</v-btn>
      </div>
      <div class="my-5">
        <v-btn x-large to="/archive">過去の情報を確認</v-btn>
      </div>
      <div class="mt-12">
        <v-btn x-large color="error" @click="onSignOut">ログアウト</v-btn>
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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getBlancOrderData, addOrder } from "@/modules/orderModule";
import { signOut } from "@/modules/signinModule";
import InputForm from "@/components/InputForm.vue";

@Component({
  components: {
    InputForm
  }
})
export default class Home extends Vue {
  inputItemDialog: boolean = false;
  successSnackbar: boolean = false;
  currentOrder = getBlancOrderData();

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
