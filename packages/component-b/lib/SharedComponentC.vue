<template>
  <div>
    <p>
      i am component C but in component B folder, cause we pretend to share
      responsibilities
    </p>
  </div>
</template>

<script>
export default {
  name: "SharedComponentC",
  mounted() {
    console.log("from my component C");
  },
};
</script>
