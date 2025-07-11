import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function DetailPage() {

	// id dall'url
	const { id } = useParams();

	const url = import.meta.env.VITE_APP_URL_API;

	const [productDetails, setProductDetails] = useState(null)

	async function fetchData(id) {
		try {
			const res = await fetch(`${url}/products/${id}`)
			const data = await res.json()
			setProductDetails(data.product)
		}
		catch (error) {
			console.error("Errore nel fetch:", error);
		}
	}

	useEffect(() => {
		fetchData(id)
	}, [])

	// console.log(productDetails);

	const { favorites, handleFavorites } = useContext(GlobalContext)

	return (
		<>
			{productDetails &&
				<div className="detail-page">
					<div className="image-container">
						<img src={productDetails.image} alt="" />
					</div>
					<div className="details-card">
						<div>{productDetails.title}</div>
						<div>{productDetails.brand}</div>
						<div>{productDetails.price + "€"}</div>
						<div>{productDetails.category}</div>
						<div>{productDetails.type}</div>

						<button onClick={() => handleFavorites(productDetails)}>Aggiungi ai preferiti</button>
					</div>
				</div>
			}
		</>
	)
}