import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartList from "./CartList";
import { totalInCart } from "../../utils";

const CartListContainer = () => {
  const { cart, removeItem, clear, handleIncrement, handleDecrement } =
    useContext(CartContext);
  const total = totalInCart(cart);

  return (
    <CartList
      cart={cart}
      removeItem={removeItem}
      clear={clear}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      total={total}
    />
  );
};

export default CartListContainer;
