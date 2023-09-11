import { useNavigate } from "react-router-dom";

import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  function goToCheckoutHandler() {
    navigate("/checkout");
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
