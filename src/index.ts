import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then ( res => console.info('res: ', res))
  .catch( error => console.error('error: ', error))
  .finally(() => console.info ('End of getPokemon'))