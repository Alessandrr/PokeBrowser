import axios from "axios";
import { AxiosError } from "axios";
import { Pokemon } from "./pokemon";

export async function getPokemon(name: string): Promise<Pokemon> {
    try {
        const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonData = response.data;

        return pokemonData;
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

function isPokemon(entity: unknown): entity is Pokemon {
    return (
        isObject(entity) &&
        typeof entity.name === "string" &&
        typeof entity.base_experience === "number" &&
        typeof entity.height === "number" &&
        typeof entity.weight === "number"
    );
}

function isObject(entity: unknown): entity is Record<string, unknown> {
    return typeof entity === 'object' && entity != null;
}

