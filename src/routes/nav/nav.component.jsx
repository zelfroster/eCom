import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutStart } from "../../store/user/user.action";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import {
  LogoContainer,
  NavContainer,
  NavLink,
  NavLinksContainer,
} from "./nav.styles";

function Nav() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  // function signOutUser() {
  //   return dispatch(signOutStart());
  // }

  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </>
  );
}

export default Nav;
