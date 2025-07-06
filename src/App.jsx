import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//layout
import Defaultlayout from "./layout/Defaultlayout";

//pages
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  // const { products, setProducts } = useContext(GlobalContext);

  // console.log(products);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Defaultlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
