import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import Card from "../components/Card";
import CompareCards from "../components/CompareCards";


export default function HomePage() {

    const { products, setProducts } = useContext(GlobalContext);
    // console.log(products);

    return (
        <>
            <div>
                {/* <h1>HomePage</h1> */}
                <CompareCards />
                <main>
                    {products && products.map((el) => (
                        <Card key={el.id} {...el} />
                    ))
                    }
                </main>
            </div>
        </>
    );
}