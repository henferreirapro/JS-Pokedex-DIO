function converterListaPokemons(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      
      <div class="detail">
        <ol class="types">
          <li class="type">glass</li>
          <li class="type">poison</li>
        </ol>
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
      </div>
    </li >`
    
}

const listaPokemon = document.getElementById('pokemon-list');

// SIMPLIFICANDO A REQUISIÇÃO COM MAP
pokeApi.getPokemons().then((lista = []) => {
  listaPokemon.innerHTML += lista.map(converterListaPokemons).join("")
})


// CRIANDO A REQUISIÇÃO COM MAP
// pokeApi.getPokemons().then((lista = []) => {
//   const novaLista = lista.map((pokemon) => converterListaPokemons(pokemon))
//   const newpokemonsHtml = novaLista.join("");
//   listaPokemon.innerHTML += newpokemonsHtml;
// })


// CRIANDO A REQUISIÇÃO  COM FOR
// pokeApi.getPokemons().then((lista) => {
//   // for(let i = 0; i < lista.length; i++)  {
//   //   const pokemon = lista[i];
//   //   listaPokemon.innerHTML += converterListaPokemons(pokemon);
//   // }  
// })


