<template>
  <el-container>
    <el-header>
      <menu-header></menu-header>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>
<style lang="sass" scoped>
.el-header
  padding: 0
</style>