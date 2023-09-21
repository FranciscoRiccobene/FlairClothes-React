import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./itemList.module.css";

const ItemList = ({ items, isLoading }) => {
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
    <div className="row m-5">
      {items.map((item) => (
        <div className="col-4 col-md-4 col-lg-4" key={item.id}>
          <Link
            className={`card mb-4 box-shadow rounded ${styles.customCard}`}
            to={`/item/${item.id}`}
          >
            <img
              src={`../../../src/assets/imgProducts/${item.imagesId.imgA}`}
              className="card-img-top rounded"
              alt={item.description}
            />
            <div className="card-body">
              <h5 className={styles.textBold}>{item.name}</h5>
              <p className={styles.textParagraph}>{item.description}</p>
              <h6 className={styles.textBold}>$ {item.price}</h6>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default ItemList;
