import Checkout from "./Checkout";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { totalInCart, getCartToOrderItems } from "../../utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../services";

const CheckoutContainer = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    buyerPhone: "",
    buyerEmail: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  const total = totalInCart(cart);

  const handleCheckout = () => {
    if (
      formData.buyerName.trim() === "" ||
      formData.buyerEmail.trim() === "" ||
      formData.buyerPhone.trim() === ""
    ) {
      alert("Por favor, ingrese todos los datos para confirmar su compra.");
      return;
    }

    const order = {
      buyer: { ...formData },
      items: getCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      setFormData({
        buyerName: "",
        buyerEmail: "",
        buyerPhone: "",
      });
      clear();
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Checkout
      formData={formData}
      orderId={orderId}
      isLoading={isLoading}
      cart={cart}
      total={total}
      handleCheckout={handleCheckout}
      handleChange={handleChange}
    />
  );
};

export default CheckoutContainer;
