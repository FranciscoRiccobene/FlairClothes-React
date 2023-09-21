import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { cartQuantity } from "../../utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = cartQuantity(cart);

  if (quantity > 0) {
    return (
      <Link to="/cart">
        <button className="btn btn-outline-dark position-relative me-2">
          <i className="bi bi-cart-fill"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger me-2">
            {quantity}
            <span className="visually-hidden">productos en cart</span>
          </span>
        </button>
      </Link>
    );
  }

  return (
    <Link to="/cart">
      <button className="btn btn-outline-dark position-relative me-2">
        <i className="bi bi-cart-fill"></i>
      </button>
    </Link>
  );
};

export default CartWidget;
