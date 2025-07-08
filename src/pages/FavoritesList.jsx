import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function FavoritesList() {

    const { favorites, handleFavorites } = useContext(GlobalContext);
    return (
        <div className="favorites-list">
            <h1>Lista dei Preferiti</h1>
            {favorites.length > 0 ? (
                favorites.map((product) => (
                    <div key={product.id} className="favorite-item">
                        <div className="image-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h2>{product.title}</h2>
                        <button onClick={() => handleFavorites(product)}>Rimuovi dai preferiti</button>
                    </div>
                ))
            ) : (
                <p>Nessun prodotto preferito trovato.</p>
            )}
        </div>
    )
}