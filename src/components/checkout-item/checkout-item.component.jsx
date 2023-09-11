import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton,
  Arrow,
} from "./checkout-item.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  function clearCartItemHandler() {
    dispatch(clearItemFromCart(cartItems, cartItem));
  }
  function addItemHandler() {
    dispatch(addItemToCart(cartItems, cartItem));
  }
  function removeItemHandler() {
    dispatch(removeItemFromCart(cartItems, cartItem));
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
