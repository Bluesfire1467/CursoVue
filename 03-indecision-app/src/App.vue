<template>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <hr>

<!-- Comunicacion entre componente pre a hijo  -->
  <MyCounter :value="1"></MyCounter>
  <MyCounterScript :value="2"></MyCounterScript>
  <MyCounterScript2 :value="3"></MyCounterScript2>

</template>

<script setup lang="ts">
import MyCounter from "@/components/MyCounter.vue";
import MyCounterScript from "@/components/MyCounterScript.vue";
import MyCounterScript2 from "@/components/MyCounterScript/MyCounterScript2.vue";
</script>