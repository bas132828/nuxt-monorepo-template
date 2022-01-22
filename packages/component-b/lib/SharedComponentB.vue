<!-- Please remove this file from your project -->
<template>
  <div>
    <button @click="sendAlert">Click me, I am component b!</button>
  </div>
</template>

<script>
export default {
  name: "SharedComponentB",
  methods:{
sendAlert(){
  alert('alert from component b!')
}
  },
  mounted() {
    console.log("from my component B");
  },
};
</script>
