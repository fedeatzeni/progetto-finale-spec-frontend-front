import React from "react";

const Card = React.memo((product) => {
    return (
        <div className="card">
            <div>{product.title}</div>
            <div>{product.category}</div>
        </div>
    );
});

export default Card;
