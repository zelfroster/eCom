import "./product-card.styles.scss";

import Button from "../buttons/button.component";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;
