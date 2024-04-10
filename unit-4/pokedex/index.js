User
/* 
    ? Instructions
    * connect your files (index, style, app)
    * create a pokedex card in index: (div)
    * it should have name (h3), weight (p), and picture (img)
    * above it, there should be a form with an input field and a Go button
    * access all elements within app.js using DOM
    * create an event listener that listens for the button click
    * when the button is clicked, it should grab the input value (aka pokemon name)
    * it should then trigger a fetch to the pokemon api with that pokemon name
    * it should then display the values of that pokemon's name, weight, and picture

*/

// Function to fetch Pokémon data
async function fetchPokemon(name) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url);
        const data = await response.json();

        // Display Pokémon data
        document.getElementById('pok-name').textContent = data.name;
        document.getElementById('pok-weight').textContent = `Weight: ${data.weight}`;
        document.getElementById('pok-picture').src = data.sprites.front_default;
    } catch (error) {
        console.log(`Failed to fetch Pokémon`, error);
    }
}

// Event listener for form submission
document.getElementById('pokemon-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const pokemonName = document.getElementById('pokemon-name').value.trim().toLowerCase();
    fetchPokemon(pokemonName);
});
