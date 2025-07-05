import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext"; // <-- CORRETTA IMPORTAZIONE

export default function App() {
  const { products, setProducts } = useContext(GlobalContext);

  console.log(products);

  return (
    <div>App</div>
  );
}
