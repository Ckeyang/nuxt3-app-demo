<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index=""> 首页 </el-menu-item>
    <el-menu-item index="about">关于</el-menu-item>
    <el-sub-menu index="2-4">
      <template #title>组件API</template>
      <el-menu-item index="api/tailApi">tailwind css</el-menu-item>
      <el-menu-item index="api/elementApi">element plus</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
const route = useRouter();
const activeIndex = ref("");
let handleSelect = (key: string, keyPath: string[]) => {
  //   console.log(router);
  //   console.log(key, keyPath);
  route.push(`/${key}`);
};
</script>
<style lang="sass" scoped>
.el-header
    padding: 0
</style>