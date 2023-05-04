const pokeApi = {};

function converterDetalhesPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  
  const tipos = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [tipoPrincipal] = tipos

  pokemon.numero = pokeDetail.id
  pokemon.nome = pokeDetail.name
  pokemon.tipoPrincipal = tipoPrincipal
  pokemon.tipos = tipos
  pokemon.imgPokemon = pokeDetail.sprites.other.dream_world.front_default

  return pokemon;

}

pokeApi.getDetalhesPokemons = (pokemon) => {
  return fetch(pokemon.url)
    .then((respose) => respose.json())
    .then(converterDetalhesPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url) 
    .then((res) => res.json())
    .then((jsonBody) => jsonBody.results)
    .then((listaPokemonsUrl) => listaPokemonsUrl.map(pokeApi.getDetalhesPokemons))
    .then((resquestDetalhes) => Promise.all(resquestDetalhes))
    .then((pokemonDetalhes) => pokemonDetalhes)

    .catch((error) => console.error(error))

}