<template>
  <section class="px-4">
    <!-- 标题 -->
    <section>{{ store.name }}</section>
  </section>
</template>
<script lang="ts" setup>
import { useRouterStore } from "~/store";
let store = useRouterStore();
</script>