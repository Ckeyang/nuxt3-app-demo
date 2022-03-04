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
      </a-sub-menu>
    </a-menu>
  </a-layout-header>
</template>
<script lang="ts" setup>
const route = useRouter();
console.log(route);
const activekey = ref([""]);
let handleSelect = ({ item, key, keys }) => {
  console.log(item, key, keys);
  //   console.log(router);
  //   console.log(key, keyPath);
  route.push(`/${key}`);
};
</script>
<style lang="sass" scoped>
.a-header
  padding: 0
</style>