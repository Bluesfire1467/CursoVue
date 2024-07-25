// Logica componsables
import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '@/modules/pokemon/interfaces';
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {

  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsoptions = ref<Pokemon[]>([]);

  const randonPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsoptions.value.length);
    return pokemonsoptions.value[randomIndex];
  });
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map(pokemon => {

      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0;

      return {
        name: pokemon.name,
        id: +id,
      };
    });
    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonsoptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randonPokemon.value.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
      return
    }

    gameStatus.value = GameStatus.Lost
  };


  onMounted(async () => {
    // Espera unos segundos
    await new Promise(r => setTimeout(r, 100));

    pokemons.value = await getPokemons();
    getNextRound();

  });

  return {
    gameStatus,
    isLoading,
    pokemonsoptions,
    randonPokemon,

    // Methods
    getNextRound,
    checkAnswer,
  };
};