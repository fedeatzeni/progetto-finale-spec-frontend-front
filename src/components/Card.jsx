import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

const Card = React.memo((product) => {
    const { fetchItem } = useContext(GlobalContext)

    return (
        <div className="card">
            <Link to={`product/${product.id}`} >
                <div>{product.title}</div>
                <div>{product.category}</div>
            </Link>
            <button onClick={() => fetchItem(product.id)}>Compara</button>
        </div>
    );
});

export default Card;
