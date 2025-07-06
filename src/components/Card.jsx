import React from "react";
import { Link } from "react-router-dom";

const Card = React.memo((product) => {
    return (
        <Link to={`product/${product.id}`} className="card">
            <div>{product.title}</div>
            <div>{product.category}</div>
        </Link>
    );
});

export default Card;
