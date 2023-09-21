import PropTypes from "prop-types";
import styles from "./checkout.module.css";

const Checkout = ({
  formData,
  orderId,
  isLoading,
  cart,
  total,
  handleChange,
  handleCheckout,
}) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center vw-75 vh-100">
        <div
          className={`spinner-border text-dark ${styles.loading}`}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {orderId && (
        <div className={`${styles.buyConfirmContainer}`}>
          <h1 className="text-center mt-5 mb-5">¡Gracias por elegirnos!</h1>
          <h3 className="text-center mt-5">
            El ID de la orden de compra es: <br />
            <strong>{orderId}</strong>
          </h3>
        </div>
      )}

      {!orderId && (
        <>
          <div>
            <h2 className="text-center mt-5">Resumen de la compra</h2>
          </div>
          <div className={styles.checkoutContainer}>
            {cart.map((item) => (
              <div key={item.id} className={styles.checkoutList}>
                <img
                  className={styles.checkoutImg}
                  src={`../../../src/assets/imgProducts/${item.imagesId.imgA}`}
                  alt={item.description}
                />
                <img
                  className={styles.checkoutImg}
                  src={`../../../src/assets/imgProducts/${item.imagesId.imgB}`}
                  alt={item.description}
                />
                <h5 className="ms-2 w-25">{item.name}</h5>
                <div className="me-4 text-center w-25">
                  <h5 className="mb-3">Precio</h5>
                  <p className={`mt-4`}>
                    <strong>$ {item.price}</strong>
                  </p>
                </div>
                <div className="me-4 text-center w-25">
                  <h5 className="mb-3">Cantidad</h5>
                  <p className={`mt-4`}>
                    <strong>{item.quantity}</strong>
                  </p>
                </div>
                <div className="me-4 text-center w-25">
                  <h5 className="mb-3">Subtotal</h5>
                  <p className={`mt-4`}>
                    <strong>$ {item.quantity * item.price}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buyTotal}>
            <h3>Total: ${total}</h3>
          </div>
          <hr />
          <div>
            <h2 className="text-center mt-3 mb-5">Ingrese sus datos</h2>
          </div>
          <div className={styles.formContainer}>
            <form className={`row g-3 w-75 ${styles.formBg}`}>
              <div className="col-md-6">
                <label htmlFor="buyerName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="buyerName"
                  id="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="buyerPhone" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="buyerPhone"
                  id="buyerPhone"
                  value={formData.buyerPhone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-12 mb-4">
                <label htmlFor="buyerEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="buyerEmail"
                  id="buyerEmail"
                  value={formData.buyerEmail}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className={styles.btnConfirmContainer}>
            <button
              type="submit"
              onClick={handleCheckout}
              className={`btn btn-outline-dark ${styles.btnConfirm}`}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

Checkout.propTypes = {
  formData: PropTypes.object.isRequired,
  orderId: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};

export default Checkout;
