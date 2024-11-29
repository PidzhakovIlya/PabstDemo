<template>
  <el-header>
    <a href="https://vite.dev" target="_blank">
      <img :src="logoUrl" class="logo" alt="IDScan logo" />
    </a>
    <h1>{{ title }}</h1>
  </el-header>
  <Idvc />
</template>

<script setup>
import { ref } from "vue";
import Idvc from "./components/Idvc.vue";

const logoUrl = ref("https://demo.idscan.net/img/IDScan-Logo.png");
const title = ref("DVS Demo Application");
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  max-width: 216px;
  width: 100%;
}
</style>
