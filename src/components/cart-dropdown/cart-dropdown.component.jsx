import Button from "../buttons/button.component";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go To Cart</Button>
    </div>
  );
}

export default CartDropdown;
