import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then ( pokemon => console.info('pokemon.sprites.front_default: ', pokemon.sprites.front_default))
  .catch( error => console.error('error: ', error))
  .finally(() => console.info ('End of getPokemon'))