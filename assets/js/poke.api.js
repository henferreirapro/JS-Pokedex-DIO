const pokeApi = {};

pokeApi.getDetalhesPokemons = (pokemon) => {
  return fetch(pokemon.url).then((respose) => respose.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(url) 
    .then((res) => res.json())
    .then((jsonBody) => jsonBody.results)
    .then((listaPokemonsUrl) => listaPokemonsUrl.map(pokeApi.getDetalhesPokemons))
    .then((resquestDetalhes) => Promise.all(resquestDetalhes))
    .then((pokemonDetalhes) => pokemonDetalhes)

    .catch((error) => console.error(error))
    
}