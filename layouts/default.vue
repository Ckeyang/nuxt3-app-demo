<template>
  <a-layout>
    <menu-header></menu-header>
    <a-layout-content> <slot /></a-layout-content>
  </a-layout>
</template>
<style lang="sass" scoped>
.ant-layout-header,
.ant-layout-footer,
.ant-layout-content
  background: #ffffff

.ant-layout-header
  padding: 0
.ant-layout-content
  padding: 1rem
</style>