<template>
  <v-col cols="12" align="center">
    <v-row>
      <h1>注文入力履歴</h1>
    </v-row>
    <v-row>
      <orderList :orders="orders.dataSet" />
    </v-row>
    <v-row class="mt-10">
      <v-btn x-large to="/">メニュー画面へ戻る</v-btn>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { productTypesMap, order } from "@/types/order";
import { orderCollection } from "@/modules/orderModule";
import OrderList from "@/components/OrderList.vue";

@Component({
  components: {
    OrderList
  }
})
export default class Archive extends Vue {
  orders: orderCollection = new orderCollection();

  async mounted() {
    await this.orders.atouch();
  }
}
</script>