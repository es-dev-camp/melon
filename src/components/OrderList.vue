<template>
  <v-data-table
    :headers="headers"
    :items="orders"
    item-key="createdAt.seconds"
    class="elevation-1"
    sort-by="deadline"
    :sort-desc="false"
    :search="search"
  >
    <template v-slot:item.item="{ item }">
      {{ getItemName(item.item) }}
    </template>
    <template v-slot:item.isBusiness="{ item }">
      <v-icon>{{ item.isBusiness ? 'business_center' : 'person' }}</v-icon>
    </template>
    <template v-slot:item.createdAt="{ item }">
      {{ item.createdAt | displayDateTime }}
    </template>
    <template v-slot:item.deadline="{ item }">
      {{ item.deadline | displayDate }}
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { productTypesMap, product, order } from "@/types/order";

@Component
export default class InputForm extends Vue {
  @Prop({ type: Object, default: {} }) orders!: order[]; 

  get headers() {
    return [
      { text: "発送期限", value: "deadline" },
      { text: "品目", value: "item" },
      { text: "数量", align: "end", value: "count" },
      { text: "卸売", value: "isBusiness" },
      { text: "追加者", value: "creatorAccount" },
      { text: "追加日時", value: "createdAt" }
    ];
  }

  getItemName(item: product) {
    return productTypesMap.get(item);
  }
}
</script>
