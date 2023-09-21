import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./context/CartProvider";
import CartListContainer from "./components/CartListContainer/CartListContainer";
import CheckoutContainer from "./components/Checkout/CheckoutContainer";

function App() {
  return (
    <CartProvider>
      <div className="container">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartListContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
