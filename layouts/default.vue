<template>
  <a-layout>
    <a-layout-sider class="h-screen border-r" style="background-color: #fff">
      <my-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header> <my-header /> </a-layout-header>
      <a-layout-content>
        <slot />
      </a-layout-content>
    </a-layout>
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