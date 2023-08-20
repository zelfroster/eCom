import { useContext } from "react";

import Button from "../buttons/button.component";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
}

export default CartDropdown;
