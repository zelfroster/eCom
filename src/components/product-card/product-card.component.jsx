import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES_CLASSES } from "../buttons/button.component";

import { ProductCardContainer, Footer } from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  function addProductToCart() {
    dispatch(addItemToCart(cartItems, product));
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
