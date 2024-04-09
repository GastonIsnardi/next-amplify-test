"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { useState, useEffect } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const Favpokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));
  return <>{Favpokemons.length ? <PokemonGrid pokemons={Favpokemons} /> : <NoFavorites />}</>;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"></IoHeartOutline>
      <span>No hay Pokemon</span>
    </div>
  );
};
