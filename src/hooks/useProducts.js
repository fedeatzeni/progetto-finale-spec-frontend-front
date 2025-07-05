import { useEffect, useState } from "react"

export default function useProducts() {

    const url = import.meta.env.VITE_APP_URL_API;

    const [products, setProducts] = useState(null)

    async function fetchData() {
        const res = await fetch(`${url}/products`)
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() => { fetchData() }, [])

    return { products, setProducts }
}
