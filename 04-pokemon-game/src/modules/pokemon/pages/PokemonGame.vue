<template>
  <section v-if="isLoading || randonPokemon.id === null" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quien es ese pokemon?</h1>
    <div class="h-20">
      <button
        v-if="gameStatus!==GameStatus.Playing"
        class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all"
        @click="getNextRound(4)"
      >Jugar de Nuevo
      </button>
    </div>

    <!--  Pokemon Picture  -->
    <PokemonPicture
      :pokemon-id="randonPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />



    <!--  Pokemon Options  -->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus != GameStatus.Playing"
      :correct-answer="randonPokemon.id"
      @selected-option="checkAnswer"
    />

  </section>


</template>

<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { GameStatus } from '@/modules/pokemon/interfaces';

const { randonPokemon, isLoading, gameStatus, pokemonsoptions:options, checkAnswer, getNextRound } = usePokemonGame();

const onSelectedOption = (value:number) => {
  console.log(value);
}

</script>