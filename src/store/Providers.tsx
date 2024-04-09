"use client";
import { RootState } from "@reduxjs/toolkit/query";
import React, { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { FavoritePokemons } from "../pokemons/components/FavoritePokemons";
import { Dispatch } from "@reduxjs/toolkit";
import { setFavoritesPokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const FavoritePokemons = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
    store.dispatch(setFavoritesPokemons(FavoritePokemons));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
