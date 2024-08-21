import z from 'zod';

export type Pokemon = z.infer<typeof pokemonSchema>;

const pokeApiNamedResourceSchema = z.object({
    name: z.string(),
    url: z.string(),
});

const abilitySchema = z.object({
    ability: pokeApiNamedResourceSchema,
    is_hidden: z.boolean(),
    slot: z.number(),
});

export const pokemonSchema = z.object({
    name: z.string(),
    base_experience: z.number(),
    height: z.number(),
    weight: z.number(),
    abilities: abilitySchema.array(),
});
