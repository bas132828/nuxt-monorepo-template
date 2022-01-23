// Импорт vue компонента
import SharedComponentB from "./lib/SharedComponentB.vue";
import SharedComponentC from "./lib/SharedComponentC.vue";

// Объявление функции установки, выполняемой Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("SharedComponentB", SharedComponentB);
}
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("SharedComponentC", SharedComponentC);
}

// Создание значения модуля для Vue.use()
const plugin = {
  install,
};

// Автоматическая установка, когда vue найден (например в браузере с помощью тега <script>)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Экспорт компонента, для использования в качестве модуля (npm/webpack/etc.)
export { SharedComponentB, SharedComponentC };
