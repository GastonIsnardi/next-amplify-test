import { FavoritePokemons } from "@/pokemons";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "lorem",
};

export default async function PokemonPage() {
  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons Favoritos<small className="text-blue-500">Global State</small>
        <FavoritePokemons />
      </span>
    </div>
  );
}
