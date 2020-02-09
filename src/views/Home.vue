<template>
  <v-container>
    <v-row justify="center">
      <v-img alt="farms form logo" src="@/assets/logo.png" />
    </v-row>
    <v-row justify="center">
      <v-btn @click="onClick">注文データ追加</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getBlancOrderData, addOrder } from "@/modules/orderModule";

@Component
export default class Home extends Vue {
  async onClick() {
    const order = getBlancOrderData();

    await addOrder(order);
    console.log("クリックされました", order);
  }
}
</script>
