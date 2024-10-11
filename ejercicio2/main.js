const randomPokemonId = Math.floor(Math.random() * 151) + 1;
const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
const pokemonImage = document.getElementById("pokemon-image");

fetch(pokemonAPI)
  .then((response) => response.json())
  .then((data) => {
    const imageUrl =
      data.sprites.other["official-artwork"].front_default ||
      data.sprites.front_default;
    if (imageUrl) {
      pokemonImage.src = imageUrl;
    } else {
      pokemonImage.alt = "No image available";
    }
  })
  .catch((error) => console.error("Error", error));
