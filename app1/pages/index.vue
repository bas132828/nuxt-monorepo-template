<template>
  <div>
    <SharedComponentA></SharedComponentA>
    <SharedComponentB></SharedComponentB>
    <SharedComponentC></SharedComponentC>
    <Tutorial />
  </div>
</template>

<script>
import SharedComponentA from "@bas/test-component-a/lib/SharedComponentA.vue";
import SharedComponentB from "@bas/test-component-b/lib/SharedComponentB.vue";
import SharedComponentC from "@bas/test-component-b/lib/SharedComponentC.vue";

export default {
  components: { SharedComponentA, SharedComponentB, SharedComponentC },
  name: "IndexPage",
};
</script>
