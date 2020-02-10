<template>
<v-container>
  <v-col align="center">
    <h1>注文入力履歴</h1>
    <v-col cols="12">
      <orderList :orders="orders.dataSet" />
    </v-col>
    <v-col cols="12" class="mt-10">
      <v-btn x-large dark color="primary secondary--text" to="/">メニュー画面へ戻る</v-btn>
    </v-col>
  </v-col>
  </v-container>
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