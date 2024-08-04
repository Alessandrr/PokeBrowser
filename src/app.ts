import { getPokemon } from "./pokemonService";

getPokemon("bulbasaur")
    .then(pokemon => console.log(pokemon))
    .catch(err => console.log(err));

