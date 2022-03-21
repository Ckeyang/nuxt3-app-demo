
// --------------------
// Request: /Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// --------------------
const $id_588b9874 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const entry = true ? (ctx) => __vite_ssr_dynamic_import__('/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default(ctx)) : () => __vite_ssr_dynamic_import__('/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default);
if (false) {
  entry();
}
__vite_ssr_exports__.default = entry;
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs
// Parents: 
// - /Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/entry ($id_588b9874)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/css.mjs ($id_6f540e15)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs ($id_915a1a8f)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/root-component.mjs ($id_3a6061f6)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/app-component.mjs ($id_a7575725)
// --------------------
const $id_0c8a2135 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs ($id_7e146e36)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs ($id_7300255e)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_6e6387a2)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/state.mjs ($id_51a47f54)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_f86b0c99)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vueuse/head/dist/index.mjs ($id_5a82ea2d)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_ab81af82)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_cdddd68a)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_96b7c69c)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_2bf1b9cc)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/components.mjs ($id_7f6c1e93)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_23f79f05)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_5ad36080)
// Dependencies: 

// --------------------
const $id_6b9afd9f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_6e6387a2)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_f420c056)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/state.mjs ($id_51a47f54)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_f86b0c99)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_d6356408)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_760db1ba)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_ab81af82)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_2bf1b9cc)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_cdddd68a)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_23f79f05)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs ($id_7e146e36)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// --------------------
const $id_aa995717 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_377b3f6b)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs ($id_7300255e)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/hookable/dist/index.mjs ($id_5008db11)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_377b3f6b)
// --------------------
const $id_7e146e36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup, args) {
  setNuxtAppInstance(nuxt);
  const p = args ? setup(...args) : setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/hookable/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs ($id_7e146e36)
// Dependencies: 

// --------------------
const $id_5008db11 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/hookable/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/hookable/dist/index.mjs\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs ($id_7e146e36)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs ($id_cbf5903f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs ($id_7e146e36)
// --------------------
const $id_377b3f6b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_377b3f6b)
// Dependencies: 

// --------------------
const $id_cbf5903f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs ($id_7300255e)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_6e6387a2)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_f420c056)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/state.mjs ($id_51a47f54)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_9813f5e6)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_f86b0c99)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_d6356408)
// --------------------
const $id_9bc9a29f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js ($id_e3fa2543)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs ($id_7e146e36)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_6e6387a2)
// --------------------
const $id_7300255e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs ($id_7300255e)
// Dependencies: 

// --------------------
const $id_e3fa2543 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs ($id_7300255e)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_9813f5e6)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_6e6387a2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_f420c056 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_51a47f54 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs ($id_4a8cc111)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_6e6387a2)
// --------------------
const $id_9813f5e6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_9813f5e6)
// Dependencies: 

// --------------------
const $id_4a8cc111 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/cookie-es/dist/index.mjs ($id_2bb13b8d)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/h3/dist/index.mjs ($id_01afc2c1)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/destr/dist/index.mjs ($id_6953e08f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_f86b0c99 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_f86b0c99)
// Dependencies: 

// --------------------
const $id_2bb13b8d = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/cookie-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/cookie-es/dist/index.mjs\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/h3/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_f86b0c99)
// Dependencies: 

// --------------------
const $id_01afc2c1 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/h3/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/h3/dist/index.mjs\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/destr/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_f86b0c99)
// Dependencies: 

// --------------------
const $id_6953e08f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/destr/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/destr/dist/index.mjs\".") })


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs ($id_9bc9a29f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_d6356408 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/css.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// Dependencies: 

// --------------------
const $id_6f540e15 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_760db1ba)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_ab81af82)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_cdddd68a)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_64d1f8d0)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/components.mjs ($id_7f6c1e93)
// --------------------
const $id_915a1a8f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs ($id_915a1a8f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_760db1ba = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs ($id_915a1a8f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vueuse/head/dist/index.mjs ($id_5a82ea2d)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_ab81af82 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_ab81af82)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// --------------------
const $id_5a82ea2d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs ($id_915a1a8f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_96b7c69c)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_2bf1b9cc)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/meta.config.mjs ($id_803758c5)
// --------------------
const $id_cdddd68a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
      __vite_ssr_import_2__.useMeta(source);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_cdddd68a)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_2bf1b9cc)
// --------------------
const $id_96b7c69c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_96b7c69c)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_cdddd68a)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js ($id_e258ea97)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// --------------------
const $id_2bf1b9cc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_2bf1b9cc)
// Dependencies: 

// --------------------
const $id_e258ea97 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js\".") })


// --------------------
// Request: /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/meta.config.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_cdddd68a)
// Dependencies: 

// --------------------
const $id_803758c5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs ($id_915a1a8f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs ($id_b90ac252)
// --------------------
const $id_64d1f8d0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_64d1f8d0)
// Dependencies: 

// --------------------
const $id_b90ac252 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs\".") })


// --------------------
// Request: /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs ($id_915a1a8f)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// --------------------
const $id_7f6c1e93 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/root-component.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_23f79f05)
// --------------------
const $id_3a6061f6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/root-component.mjs ($id_3a6061f6)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs ($id_aa995717)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js ($id_7d350be8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_23f79f05 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
    return {
      onResolve: () => nuxtApp.callHook('app:suspense:resolve')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_23f79f05)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_5ad36080)
// Dependencies: 

// --------------------
const $id_7d350be8 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js\".") })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_23f79f05)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_5ad36080)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/app-component.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs ($id_0c8a2135)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_5ad36080)
// --------------------
const $id_a7575725 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue
// Parents: 
// - /@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/app-component.mjs ($id_a7575725)
// Dependencies: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs ($id_79f1ceb6)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js ($id_7d350be8)
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js ($id_6b9afd9f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5ad36080 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs");

const _sfc_main = ({
  computed: {
    html: () => __vite_ssr_import_0__.welcome({})
  }
})

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- eslint-disable-next-line vue/no-v-html --><div${
    __vite_ssr_import_1__.ssrRenderAttrs(_attrs)
  }>${
    $options.html
  }</div><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/nuxt3/dist/app/components/nuxt-welcome.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue"]]);
}


// --------------------
// Request: /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs
// Parents: 
// - /@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue ($id_5ad36080)
// Dependencies: 

// --------------------
const $id_79f1ceb6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs\".") })


const __modules__ = {
  "/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/entry": $id_588b9874,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/bootstrap.mjs": $id_0c8a2135,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/dist/vue.cjs.js": $id_6b9afd9f,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/index.mjs": $id_aa995717,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/nuxt.mjs": $id_7e146e36,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/hookable/dist/index.mjs": $id_5008db11,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/compat/legacy-app.mjs": $id_377b3f6b,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/unenv/runtime/mock/proxy.mjs": $id_cbf5903f,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/index.mjs": $id_9bc9a29f,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/component.mjs": $id_7300255e,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue-router/dist/vue-router.cjs.js": $id_e3fa2543,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/asyncData.mjs": $id_6e6387a2,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/hydrate.mjs": $id_f420c056,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/state.mjs": $id_51a47f54,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/fetch.mjs": $id_9813f5e6,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/murmurhash-es/dist/index.mjs": $id_4a8cc111,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/cookie.mjs": $id_f86b0c99,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/cookie-es/dist/index.mjs": $id_2bb13b8d,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/h3/dist/index.mjs": $id_01afc2c1,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/destr/dist/index.mjs": $id_6953e08f,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/composables/ssr.mjs": $id_d6356408,
  "/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/css.mjs": $id_6f540e15,
  "/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/plugins/server.mjs": $id_915a1a8f,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/plugins/preload.server.mjs": $id_760db1ba,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs": $id_ab81af82,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vueuse/head/dist/index.mjs": $id_5a82ea2d,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/plugin.mjs": $id_cdddd68a,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/components.mjs": $id_96b7c69c,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/meta/runtime/composables.mjs": $id_2bf1b9cc,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@vue/shared/dist/shared.cjs.js": $id_e258ea97,
  "/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/meta.config.mjs": $id_803758c5,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs": $id_64d1f8d0,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/ohmyfetch/dist/index.mjs": $id_b90ac252,
  "/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/components.mjs": $id_7f6c1e93,
  "/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/root-component.mjs": $id_3a6061f6,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-root.vue": $id_23f79f05,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/vue/server-renderer/index.js": $id_7d350be8,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/@id/__x00__virtual:/Users/yangwenjie/programe/nuxt3-app/:mode/.nuxt/app-component.mjs": $id_a7575725,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/components/nuxt-welcome.vue": $id_5ad36080,
  "/@fs/Users/yangwenjie/programe/nuxt3-app/node_modules/@nuxt/design/dist/index.mjs": $id_79f1ceb6
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/yangwenjie/programe/nuxt3-app/node_modules/nuxt3/dist/app/entry")