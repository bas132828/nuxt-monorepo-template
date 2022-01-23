export const state = () => ({
  counter: 0,
  list: [],
});

export const mutations = {
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
};
