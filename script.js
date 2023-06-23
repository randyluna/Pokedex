const poke_container= document.getElementById('poke-container')
const pokemon_count=150;

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };

const main_types= Object.keys(colors);
console.log(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
      // console.log(i)
      await getPokemon(i);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    //   console.log(data);
    createPokemonCard(data);
  };
  
  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
  
    //pokemon types
    const poke_types = pokemon.types.map((type) => type.type.name);
    //   console.log(poke_types)
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  //   console.log(type)
    const color = colors[type];
  //   console.log(color);
    pokemonEl.style.backgroundColor = color;
    //card
    const pokemonInnerHTML = `
      <div class="image-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
      </div>
  
      <div class="info">
          <span class="number">#${pokemon.id}</span>
          <h3 class="name">${pokemon.name} </h3>
          <small class="type">Type <span>${type}</span></small>
      </div>
      `;
  
    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);
  };


fetchPokemons();