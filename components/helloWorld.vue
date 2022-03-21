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
        <h3>
          主框架:
          <a class="text-blue-400" href="https://v3.nuxtjs.org/" target="black">
            NUXT3</a
          >
        </h3>
        <article class="mt-4">
          <p>
            UI 框架:
            <a
              class="text-blue-400"
              href="https://next.antdv.com/"
              target="black"
            >
              Antd-design
            </a>
          </p>
          <p>
            预编译css:
            <a class="text-blue-400" href="https://www.sass.hk/" target="black"
              >sass</a
            >
          </p>
          <p>
            基础css库:
            <a
              class="text-blue-400"
              href="https://www.tailwindcss.cn/"
              target="black"
            >
              tailwindcss
            </a>
          </p>
          <p>
            状态管理器:
            <a
              class="text-blue-400"
              href="https://pinia.vuejs.org/"
              target="black"
            >
              pinia
            </a>
          </p>
          <p>相信我，你会爱上这个框架的</p>
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
