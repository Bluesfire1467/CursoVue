<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Squeare: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">>-1</button>
    </div>

  </section>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
  value: { type: Number, required: true }
});

const counter = ref( props.value )
const squareCounter = computed( () => counter.value * counter.value)

</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}

</style>