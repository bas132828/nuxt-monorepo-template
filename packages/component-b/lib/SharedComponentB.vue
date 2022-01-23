<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input @keyup.enter="addTodo" placeholder="Component b" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SharedComponentB",
  computed: {
    todos() {
      return this.$store.state.list;
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit("add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "toggle",
    }),
  },
  mounted() {
    console.log("from my component B");
  },
};
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
