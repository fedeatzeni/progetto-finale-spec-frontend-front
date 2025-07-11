import { useCallback, useContext, useMemo, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

import Card from "../components/Card";
import CompareCards from "../components/CompareCards";

// debounce
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

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

    // category
    const [selectedCategory, setSelectedCategory] = useState("");

    const categoriesList = [];
    products && products.forEach(el => {
        if (!categoriesList.includes(el.category)) {
            categoriesList.push(el.category);
        }
    });


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

        if (selectedCategory !== "") {
            processedProducts = processedProducts.filter((el) => el.category === selectedCategory);
        }


        return processedProducts;

    }, [products, search, sortBy, sortOrder, selectedCategory]);

    // debounce search
    const debounceSearch = useCallback(debounce(setSearch, 500), [])

    // controllo dei prodotti
    if (!Array.isArray(products)) {
        return <p>Caricamento prodotti...</p>;
    }

    return (
        <>
            <div className="home-page">
                {/* <h1>HomePage</h1> */}
                <CompareCards />

                <input type="text" placeholder="Cerca..." onChange={(e) => debounceSearch(e.target.value)} />

                <span className="sort">
                    <span onClick={() => handleSort("title")}>Nome</span>
                    <span onClick={() => handleSort("category")}>Categoria</span>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Categoria</option>
                        {categoriesList.map((categoria, index) => (
                            <option key={index} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                </span>

                <main>

                    {/* {cards} */}
                    {filteredProducts.length > 0 ? filteredProducts.map((el) => (
                        < Card key={el.id} {...el} />
                    )) :
                        <p>Nessun prodotto trovato</p>
                    }
                </main>
            </div>
        </>
    );
}