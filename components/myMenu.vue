<template>
  <section>
    <section class="px-4 pt-4 pb-8">我可能是个log</section>
    <a-menu
      v-model:selectedKeys="activekey"
      class="a-menu-demo"
      style="border: 0"
      @select="handleSelect"
    >
      <template v-for="item in menus" :key="item.path + 1">
        <template v-if="item.children">
          <sub-menu :model="item"></sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="item.path" :title="item.name">
            {{ item.name }}
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </section>
</template>
<script lang="ts" setup>
import { useRouterStore } from "~/store";
// import { menu, menuInterface } from "~/modules/menu";
import menusData from "~/data/menuData";
let store = useRouterStore();
const menus = menusData;
const route = useRouter();
const activekey = ref<string[]>([store.router]);
let handleSelect = ({ item, key }: any) => {
  store.setRouter(key);
  store.setName(item.title);
  route.push(`/${key}`);
};
</script>
<style lang="sass" scoped>
.a-header
  padding: 0
</style>