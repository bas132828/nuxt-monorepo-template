<template>
  <div>
    <test-component></test-component>
    <Tutorial />
  </div>
</template>

<script>
import TestComponent from "@bas/test-component/TestComponent.vue";
export default {
  components: { TestComponent },
  name: "IndexPage",
};
</script>
