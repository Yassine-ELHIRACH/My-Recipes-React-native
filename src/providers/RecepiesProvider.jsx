import React from "react";

import { ItemsContext } from "./ItemsProvider";

export default function RecepiesProvider({ children, recepies }) {
  return (
    <ItemsContext.Provider value={recepies}>{children}</ItemsContext.Provider>
  );
}
