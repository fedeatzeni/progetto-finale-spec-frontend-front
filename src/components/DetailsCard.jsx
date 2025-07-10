import { Link } from "react-router-dom";

export default function DetailsCard({ item }) {
  if (!item) return null; // render condizionale

  return (
    <Link to={`/product/${item.id}`} className="details-card">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div>{item.title}</div>
      <div>{item.brand}</div>
      <div>{item.price + "€"}</div>
      <div>{item.category}</div>
    </Link>
  );
}
