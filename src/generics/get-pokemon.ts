import axios from 'axios'


export const getPokemon = async( pokemonId: number ) => {

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  console.info('res: ', res)

  return 1
}