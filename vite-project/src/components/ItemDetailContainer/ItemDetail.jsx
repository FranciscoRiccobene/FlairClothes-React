import PropTypes from "prop-types";
import styles from "./itemDetail.module.css";

const ItemDetail = ({ item, isLoading, addItem }) => {
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

  if (!item) {
    return <h2 className="text-center m-5 me-5">Product Not Found</h2>;
  }

  return (
    <div className={styles.customFlex}>
      <img
        src={`../../../src/assets/imgProducts/${item.imagesId.imgA}`}
        className={`shadow-sm ${styles.customImg}`}
        alt={item.description}
      />
      <img
        src={`../../../src/assets/imgProducts/${item.imagesId.imgB}`}
        className={styles.customImg}
        alt={item.description}
      />
      <div className="mt-2">
        <h2 className="ms-3">{item.name}</h2>
        <p className="ms-3">{item.description}</p>
        <h2 className="ms-3">$ {item.price}</h2>
        <h6 className="ms-3 my-3">Stock disponible: {item.stock}</h6>
        <button
          className={`ms-3 btn btn-outline-dark ${styles.customButton}`}
          onClick={() => {
            addItem(item, 1);
          }}
          disabled={item.quantity === item.stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ItemDetail;
