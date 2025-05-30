import { getPokemon } from "./generics/get-pokemon";
import { Pokemon } from './decorators/pokemon-class'


// GENERICS 

getPokemon(4)
  .then ( pokemon => console.info('pokemon.sprites.front_default: ', pokemon.sprites.front_default))
  .catch( error => console.error('error: ', error))
  .finally(() => console.info ('End of getPokemon'))


// DECORATORS
const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'
charmander.savePokemonToDB(-50)
