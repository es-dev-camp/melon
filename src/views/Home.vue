<template>
  <v-container>
    <v-row justify="center">
      <v-img alt="farms form logo" src="@/assets/logo.png" />
    </v-row>
    <v-col align="center">
      <div class="my-5">
        <v-btn x-large>注文内容を入力</v-btn>
      </div>
      <div class="my-5">
        <v-btn x-large to="/archive">過去の情報を確認</v-btn>
      </div>
      <div class="mt-12">
        <v-btn x-large color="error" @click="onSignOut">ログアウト</v-btn>
      </div>
    </v-col>
    <v-row justify="center">
      <v-btn @click="onClick">注文データ追加</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getBlancOrderData, addOrder } from "@/modules/orderModule";
import { signOut } from "@/modules/signinModule";

@Component
export default class Home extends Vue {
  async onClick() {
    const order = getBlancOrderData();

    await addOrder(order);
    console.log("クリックされました", order);
  }

  async onSignOut() {
    await signOut();
  }
}
</script>
