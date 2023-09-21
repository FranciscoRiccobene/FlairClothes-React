import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";
import ItemDetail from "./ItemDetail";
import CartContext from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext); 

  useEffect(() => {
    getProduct(itemId)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.log(error);
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return <ItemDetail item={item} isLoading={isLoading} addItem={addItem} />;
};

export default ItemDetailContainer;
