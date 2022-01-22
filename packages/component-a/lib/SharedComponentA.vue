<!-- Please remove this file from your project -->
<template>
  <h1>echo from component a</h1>
</template>

<script>
export default {
  name: "SharedComponentA",
  mounted() {
    console.log("from my component A");
  },
};
</script>
