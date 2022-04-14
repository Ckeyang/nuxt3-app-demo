<template>
  <a-sub-menu :key="model.path">
    <template #title>{{ model.name }}</template>
    <template v-for="item in model.children" :key="item.path + 1">
      <template v-if="item.children">
        <sub-menu :model="item"></sub-menu>
      </template>
      <template v-else>
        <a-menu-item :key="item.path" :title="item.name">
          {{ item.name }}
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts">
// const model = props.model;
// console.log(model);
export default defineNuxtComponent({
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const model = props.model;
    return model;
  },
});
</script>