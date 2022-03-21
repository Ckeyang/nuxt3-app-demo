<template>
  <section>
    <section
      class="
        grid grid-cols-1
        sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8
        md:py-16
      "
    >
      <section class="shadow bg-white rounded-lg h-18 p-4 m-4">
        <a-form :model="data.form" @finish="dologin">
          <a-form-item>
            <a-input
              v-model:value="data.form.userAccount"
              placeholder="userAccount"
            >
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="data.form.password"
              type="password"
              placeholder="Password"
            >
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit"> 登录 </a-button>
            <a-button type="danger" v-hasBtn="['add']"> 我是权限按钮 </a-button>
          </a-form-item>
        </a-form>
      </section>
      <section class="shadow bg-white rounded-lg h-18 p-4 m-4">
        信息：
        <p>
          {{ data.user }}
        </p>
        userStore信息：
        {{ store.userInfo }}
      </section>
    </section>
    <section
      class="
        grid grid-cols-1
        sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8
        md:py-16
      "
    >
      <section class="shadow bg-white rounded-lg h-18 p-4 m-4">
        <a-form :model="data.formTest" @finish="doTest">
          <a-form-item>
            <a-input v-model:value="data.formTest.url" placeholder="url">
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-select
              ref="select"
              v-model:value="data.formTest.method"
              placeholder="method"
            >
              <a-select-option value="GET">GET</a-select-option>
              <a-select-option value="POST">POST</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="data.formTest.params" placeholder="参数">
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit"> 测试 </a-button>
          </a-form-item>
        </a-form>
      </section>
      <section class="shadow bg-white rounded-lg h-18 p-4 m-4">
        信息：
        <p>
          {{ data.test }}
        </p>
      </section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { useUserStore, useRouterStore } from "~/store";
let store = useUserStore();
let routerStore = useRouterStore();
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
import { loginForm } from "~/modules/form";
import { userModel } from "~/modules/user";
defineComponent({ components: { UserOutlined, LockOutlined } });
let loginF: loginForm = {
  userAccount: "",
  password: "",
};
let data = reactive({
  user: new userModel(),
  form: loginF,
  formTest: {
    url: "",
    method: "GET",
    params: null,
  },
  test: null,
});
// let form = reactive(loginF);
const { $service } = useNuxtApp();
const dologin = () => {
  $service.loginApi.login(data.form).then((res) => {
    if (res.data.code == 200) {
      data.user = { ...res.data.data };
      store.setUserInfo(res.data.data);
      routerStore.setToken(res.data.data.token);
    }
  });
};
const doTest = () => {
  $service.loginApi
    .test(data.formTest.url, data.formTest.method, data.formTest.params)
    ?.then((res) => {
      if (res.data.code == 200) {
        data.test = { ...res.data };
      }
    });
};
</script>