import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0, list: [] },
  mutations: {
    increment(state) {
      state.counter++;
    },
    add(state, text) {
      state.list.push({
        text,
        done: false,
      });
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1);
    },
    toggle(state, todo) {
      todo.done = !todo.done;
    },
  },
  actions: {},
  modules: {},
});
