import axios from "axios";
import { AxiosError } from "axios";
import { Pokemon, pokemonSchema } from "./pokemon";

export async function getPokemon(name: string): Promise<Pokemon> {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const parseResult = pokemonSchema.safeParse(response.data);

        if (!parseResult.success) {
            return Promise.reject(parseResult.error);
        } else {
            return parseResult.data;
        }
    } catch (error: unknown) {
        if (!axios.isAxiosError(error)) {
            return Promise.reject(error);
        }

        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 404) {
            return Promise.reject("Pokemon could not be found");
        } else {
            return Promise.reject(axiosError.message);
        }
    }
}
