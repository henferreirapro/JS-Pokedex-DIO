function converterListaPokemons(pokemon) {
  return `
      <span class="number">#${pokemon.numero}</span>
      <span class="name">${pokemon.name}</span>
      
      <div class="detail">
        <ol class="types">
          ${pokemon.tipos.map((type) => `<li class="type">${type}</li>`).join("")}
        </ol>
        
        <img src="${pokemon.imgPokemon}" alt="${pokemon.nome}">
      </div>
    </li >`
    
}

const listaPokemon = document.getElementById('pokemon-list');

// SIMPLIFICANDO A REQUISIÇÃO COM MAP
pokeApi.getPokemons().then((lista = []) => {
  listaPokemon.innerHTML += lista.map(converterListaPokemons).join("")
})


/**CRIANDO A REQUISIÇÃO COM MAP DETALHADO
  pokeApi.getPokemons().then((lista = []) => {
    const novaLista = lista.map((pokemon) => converterListaPokemons(pokemon))
    const newpokemonsHtml = novaLista.join("");
    listaPokemon.innerHTML += newpokemonsHtml;
})
*/

/**CRIANDO A REQUISIÇÃO  COM FOR
pokeApi.getPokemons().then((lista) => {
  for(let i = 0; i < lista.length; i++)  {
    const pokemon = lista[i];
    listaPokemon.innerHTML += converterListaPokemons(pokemon);
  }  
})
*/


