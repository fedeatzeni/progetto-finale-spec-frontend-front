export default function DetailsCard({ item }) {
  if (!item) return null; // render condizionale

  return (
    <div className="details-card">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div>{item.title}</div>
    </div>
  );
}
