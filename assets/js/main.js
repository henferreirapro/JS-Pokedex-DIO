const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

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

fetch(url) 
.then((res) => res.json())
.then((jsonBody) => jsonBody.results)
.then((lista) => {
    for(let i = 0; i < lista.length; i++)  {
    const pokemons = lista[i];
    listaPokemon.innerHTML += converterListaPokemons(pokemons);
    }
  })
  .catch((error) => console.error(error))
  
