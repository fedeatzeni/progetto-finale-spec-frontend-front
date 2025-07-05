import { createContext, useContext } from "react";

import useProducts from "../hooks/useProducts";

// Crea il contesto
export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const { products, setProducts } = useProducts();

  return (
    <GlobalContext.Provider value={{ products, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
}