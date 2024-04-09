"use client";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "..";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
          <Image
            className="h-28 w-28"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            height={120}
            alt={name}
            priority={false}
            width={120}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
          <div className="mt-1">
            <Link href={`/dashboard/pokemons/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" onClick={onToggle}>
            <div className="text-red-600 text-sm">{isFavorite ? <IoHeart /> : <IoHeartOutline />}</div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">{isFavorite ? "Es favorito" : "No es favorito"}</p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
