import { useDispatch, useSelector } from "react-redux";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  function toggleIsCartOpen() {
    dispatch(setIsCartOpen(!isCartOpen));
  }
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
