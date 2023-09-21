import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./cartList.module.css";

const CartList = ({
  cart,
  removeItem,
  clear,
  handleDecrement,
  handleIncrement,
  total,
}) => {
  if (cart.length === 0) {
    return <h2 className="text-center mt-5">El Carrito está vacío...</h2>;
  }

  return (
    <div className={`mt-4 ${styles.cartContainer}`}>
      {cart.map((item) => (
        <div key={item.id} className={styles.cartList}>
          <div>
            <h5 className="mb-3 ms-2">Producto</h5>
            <img
              className={styles.cartImg}
              src={`../../../src/assets/imgProducts/${item.imagesId.imgA}`}
              alt={item.description}
            />
            <img
              className={styles.cartImg}
              src={`../../../src/assets/imgProducts/${item.imagesId.imgB}`}
              alt={item.description}
            />
            <h5 className="mt-3 ms-2">{item.name}</h5>
          </div>
          <div className="me-4 text-center w-50">
            <h5 className="mb-3">Precio</h5>
            <p className={`mt-4 ${styles.customP}`}>
              <strong>$ {item.price}</strong>
            </p>
          </div>
          <div className="me-4 text-center w-50">
            <h5 className="mb-3">Cantidad</h5>
            <div className={styles.countContainer}>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    handleDecrement(item);
                  }
                }}
                className="btn btn-dark"
              >
                <i className="bi bi-dash-circle"></i>
              </button>
              <p className={`mt-2 ${styles.customP}`}>
                <strong>{item.quantity}</strong>
              </p>
              <button
                onClick={() => {
                  if (item.quantity < item.stock) {
                    handleIncrement(item);
                  }
                }}
                className="btn btn-dark"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
          <div className="me-4 text-center w-50">
            <h5 className="mb-3">Stock</h5>
            <p className={`mt-4 ${styles.customP}`}>
              <strong>{item.stock}</strong>
            </p>
          </div>
          <div className="me-4 text-center w-50">
            <h5 className="mb-3">Subtotal</h5>
            <p className={`mt-4 ${styles.customP}`}>
              <strong>$ {item.quantity * item.price}</strong>
            </p>
          </div>
          <div className={styles.btnDeleteItem}>
            <button
              onClick={() => removeItem(item.id)}
              className="btn btn-outline-danger"
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        </div>
      ))}
      <div className={styles.cartTotal}>
        <h3>Total: ${total}</h3>
      </div>
      <div className={styles.btnBuyClearContainer}>
        <button
          onClick={() => clear()}
          className={`btn btn-outline-danger ${styles.btnClear}`}
        >
          Vaciar carrito
        </button>
        <Link to="/checkout">
          <button className={`btn btn-outline-dark ${styles.btnBuy}`}>
            Ir a comprar
          </button>
        </Link>
      </div>
    </div>
  );
};

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartList;
