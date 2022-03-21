<template>
  <a-layout-header>
    <a-menu
      v-model:selectedKeys="activekey"
      class="a-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <a-menu-item key=""> 首页 </a-menu-item>
      <a-menu-item key="about">关于</a-menu-item>
      <a-sub-menu key="2-4">
        <template #title>组件API</template>
        <a-menu-item key="api/tailApi">tailwind css</a-menu-item>
        <a-menu-item key="api/adminApi">后台api</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts" setup>
import { useRouterStore } from "~/store";
let store = useRouterStore();
const route = useRouter();
const activekey = ref<string[]>([store.router]);
let handleSelect = ({ key }: any) => {
  //   console.log(router);
  //   console.log(key, keyPath);
  store.setRouter(key);
  route.push(`/${key}`);
};
</script>
<style lang="sass" scoped>
.a-header
  padding: 0
</style>