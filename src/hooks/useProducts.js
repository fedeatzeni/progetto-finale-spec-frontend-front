import { useEffect, useState } from "react"

export default function useProducts() {

    // products list
    const url = import.meta.env.VITE_APP_URL_API;

    const [products, setProducts] = useState(null)

    async function fetchData() {
        const res = await fetch(`${url}/products`)
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() => { fetchData() }, [])

    //details
    const [firstItem, setFirstItem] = useState(null)
    const [secondItem, setSecondItem] = useState(null)

    async function fetchItem(id) {
        try {
            const res = await fetch(`${url}/products/${id}`)
            const data = await res.json()
            if (firstItem === null) setFirstItem(data.product)
            else setSecondItem(data.product)
        }
        catch (error) {
            console.error("Errore nel fetch:", error);
        }
    }

    function resetItems() {
        setFirstItem(null);
        setSecondItem(null);
    }

    return { products, setProducts, fetchItem, firstItem, secondItem, setFirstItem, setSecondItem, resetItems }
}