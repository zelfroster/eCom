import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./nav.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

function Nav() {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <nav className="nav">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
