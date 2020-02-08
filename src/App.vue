<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        class="pa-0 neutral_light"
        style="height:100vh; max-height:calc(100vh - 64px);"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
