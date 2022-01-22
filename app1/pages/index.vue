<template>
  <div>
    <SharedComponentA></SharedComponentA>
    <SharedComponentB></SharedComponentB>
    <Tutorial />
  </div>
</template>

<script>
import SharedComponentA from "@bas/test-component-a/lib/SharedComponentA.vue";
import SharedComponentB from "@bas/test-component-b/lib/SharedComponentB.vue";

export default {
  components: { SharedComponentA, SharedComponentB },
  name: "IndexPage",
};
</script>
