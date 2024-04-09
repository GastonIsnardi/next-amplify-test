import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction, Action } from "@reduxjs/toolkit";
import { addOne } from "@/store/counter/counterSlice";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   const data = localStorage.getItem("favorite-pokemons");
//   const favorites = JSON.parse(data ?? "{}");
//   return favorites;
// };
const initialState: PokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = pokemon;
    },
    setFavoritesPokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
