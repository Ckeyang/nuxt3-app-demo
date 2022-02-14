<template>
  <hello-world></hello-world>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
const config = useRuntimeConfig();
console.log(config);
</script>