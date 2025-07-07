import { useContext, useMemo, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

import Card from "../components/Card";
import CompareCards from "../components/CompareCards";


export default function HomePage() {

    const { products, setProducts } = useContext(GlobalContext);
    // console.log(products);

    const [search, setSearch] = useState("")

    // sort
    const [sortBy, setSortBy] = useState("")
    const [sortOrder, setSortOrder] = useState(1)

    function handleSort(value) {
        if (sortBy === value) setSortOrder(sortOrder * -1)
        else setSortBy(value)
    }

    const filteredProducts = useMemo(() => {
        if (!Array.isArray(products)) return [];
        
        let processedProducts = [...products];

        if (search !== "") {
            processedProducts = processedProducts.filter((el) =>
                el.title.toLowerCase().includes(search.toLowerCase()) ||
                el.category.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (sortBy !== "") {
            processedProducts.sort((a, b) => {
                if (sortBy === "title") {
                    return a.title.localeCompare(b.title) * sortOrder;
                }
                if (sortBy === "category") {
                    return a.category.localeCompare(b.category) * sortOrder;
                }

                return 0;
            });
        }

        return processedProducts;

    }, [products, search, sortBy, sortOrder]);

    return (
        <>
            <div className="home-page">
                {/* <h1>HomePage</h1> */}
                <CompareCards />

                <input type="text" placeholder="Cerca..." value={search} onChange={(e) => setSearch(e.target.value)} />

                <span className="sort">
                    <span onClick={() => handleSort("title")}>Nome</span>
                    <span onClick={() => handleSort("category")}>Categoria</span>
                </span>

                <main>

                    {/* {cards} */}
                    {filteredProducts && filteredProducts.map((el) => (
                        < Card key={el.id} {...el} />
                    ))
                    }
                </main>
            </div>
        </>
    );
}