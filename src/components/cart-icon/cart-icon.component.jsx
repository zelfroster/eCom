import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const { cartCount, setIsCartOpen } = useContext(CartContext);
  function toggleIsCartOpen() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
