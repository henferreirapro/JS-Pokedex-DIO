const listaPokemon = document.getElementById('pokemon-list');
const botaoCarregamento = document.getElementById('botaoCarregamento');
const qtdMaximoPokemons = 51;
const limit = 5;
let offset = 0;

function converterListaPokemons(pokemon) {
  return `
  <li class="pokemon ${pokemon.tipoPrincipal}">
    <span class="number">#${pokemon.numero}</span>
    <span class="name">${pokemon.nome}</span>
    
    <div class="detail">
      <ol class="types">
        ${pokemon.tipos.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
      </ol>
      
      <img src="${pokemon.imgPokemon}" alt="${pokemon.nome}">
    </div>
  </li >`
}

function carregarPokemon(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((lista = []) => {
    listaPokemon.innerHTML += lista.map(converterListaPokemons).join("")
  })
} 

carregarPokemon(offset, limit)

botaoCarregamento.addEventListener('click', () => {
  offset += limit
  
  const qtdProximaPagina = offset + limit ;
  
  if(qtdProximaPagina >= qtdMaximoPokemons) {
    const novoLimit = qtdMaximoPokemons - offset;
    
    carregarPokemon(offset, novoLimit)
    botaoCarregamento.parentElement.removeChild(botaoCarregamento)
    
  } else {
    carregarPokemon(offset, limit)

  }

  
}) 


/**SIMPLIFICANDO A REQUISIÇÃO COM MAP*/
// pokeApi.getPokemons().then((lista = []) => {
//   listaPokemon.innerHTML += lista.map(converterListaPokemons).join("")
// })



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


