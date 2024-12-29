import React from "react";

export const ItemsContext = React.createContext({
  recepies: [],
  setRecepies: () => void 0,
  favorites: [],
  setFavorites: () => void 0,
  myRecepies: [],
  setMyRecepies: () => void 0,
});

export function useRecepies() {
  const {
    recepies,
    setRecepies,
    favorites,
    setFavorites,
    myRecepies,
    setMyRecepies,
  } = React.useContext(ItemsContext);

  return {
    recepies,
    setRecepies,
    favorites,
    setFavorites,
    myRecepies,
    setMyRecepies,
  };
}
