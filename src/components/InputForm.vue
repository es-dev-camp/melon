<template>
  <v-card>
    <v-card-title>注文内容入力</v-card-title>

    <v-card-text>
      <v-row>
        品目
      </v-row>
      <v-row>
        <v-select v-model="currentOrder.item" :items="productTypes" />
      </v-row>
      <template v-if="currentOrder.item === 99">
        <v-row>
          品目 その他
        </v-row>
        <v-row>
          <v-text-field v-model="currentOrder.otherItemText" solo />
        </v-row>
      </template>
      <v-row>
        数量
      </v-row>
      <v-row>
        <v-text-field v-model="currentOrder.count" solo type="number" />
      </v-row>
      <v-row>
        発送期限
      </v-row>
      <v-row justify="center">
        <v-dialog
          ref="dialog"
          v-model="deadlineDialog"
          :return-value.sync="deadline"
          persistent
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="deadline"
              label="日付を選択"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="deadline" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="deadlineDialog = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(deadline)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-row>
      <v-row>
        <v-switch v-model="currentOrder.isBusiness" inset label="卸売" />
      </v-row>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="onCancel">やめる</v-btn>
      <v-btn color="blue darken-1" text @click="onSave">追加</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { productTypesMap, order } from "@/types/order";

function yyyymmdd(date: Date) {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [date.getFullYear(),
          (mm > 9 ? '' : '0') + mm,
          (dd > 9 ? '' : '0') + dd
         ].join('-');
};

@Component
export default class InputForm extends Vue {
  deadlineDialog: boolean = false;
  @Prop({ type: Object, default: {} }) currentOrder!: order;

  get productTypes() {
    return Array.from(productTypesMap).map(([value, text]: any) => {
      return { text, value };
    });
  }
  get deadline() {
    return this.currentOrder.deadline instanceof Date
      ? yyyymmdd(this.currentOrder.deadline)
      : yyyymmdd(new Date());
  }
  set deadline(value: string) {
    this.currentOrder.deadline = new Date(value);
  }

  onCancel() {
    this.$emit("onCancel");
  }
  onSave() {
    this.$emit("onSave");
  }
}
</script>
