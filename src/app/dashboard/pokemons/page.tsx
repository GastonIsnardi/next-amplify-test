import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons/index";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const data: PokemonsResponse = await fetch(url).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Esto es un error");

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small className="text-blue-500">estatico</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
