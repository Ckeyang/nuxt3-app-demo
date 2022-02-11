<script setup lang='ts'>
import { reactive } from "vue";
interface person {
  name: string;
  age: number;
}
let user: person = {
  name: "test",
  age: 28,
};
defineProps({
  msg: String,
});
const state = reactive({ user });
</script>

<template>
  <section class="flex justify-center font-mono">
    <article class="tracking-wide leading-loose text-left">
      <h1>Hello,World!</h1>
      <article class="mt-8">
        <h3>NUXT3 demo简介</h3>
        <article class="mt-4">
          <p>
            UI 框架:
            <a
              class="text-blue-400"
              href="https://element-plus.gitee.io/zh-CN/"
            >
              element-plus
            </a>
          </p>
          <p>
            预编译css:
            <a class="text-blue-400" href="https://www.sass.hk/">sass</a>
          </p>
          <p>
            基础css库:
            <a class="text-blue-400" href="https://www.tailwindcss.cn/">
              tailwindcss
            </a>
          </p>
        </article>
      </article>
    </article>
  </section>
</template>

<style lang='scss' scoped>
$color: red;
.red-test {
  color: $color;
}
</style>
