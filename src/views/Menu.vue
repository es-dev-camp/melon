<template>
  <v-container>
    <v-col align="center">
      <div class="my-5">
        <v-btn x-large>注文内容を入力</v-btn>
      </div>
      <div class="my-5">
        <v-btn x-large>過去の情報を確認</v-btn>
      </div>
      <div class="mt-12">
        <v-btn x-large color="error">ログアウト</v-btn>
      </div>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  @Prop({ type: String, default: "undefined" }) msg!: string;
}
</script>
