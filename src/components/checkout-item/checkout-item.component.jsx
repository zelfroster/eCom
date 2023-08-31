import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton,
  Arrow,
} from "./checkout-item.styles";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  function clearCartItemHandler() {
    clearItemFromCart(cartItem);
  }
  function addItemHandler() {
    addItemToCart(cartItem);
  }
  function removeItemHandler() {
    removeItemFromCart(cartItem);
  }
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <span className="value">{quantity}</span>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
export default CheckoutItem;
