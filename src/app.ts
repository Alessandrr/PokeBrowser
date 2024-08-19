import { getPokemon } from "./pokemon/service";

getPokemon("bulbasaur")
    .then(pokemon => console.log(pokemon))
    .catch(err => console.log(err));