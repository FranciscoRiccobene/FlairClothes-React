export const cartQuantity = (cart) => {
  const newQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return newQuantity;
};

export const totalInCart = (cart) => {
  const total = cart.reduce((acc, total) => acc + (total.price * total.quantity), 0);

  return total;
};

export const getCartToOrderItems = (cart) => {
  return cart.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    price: item.price,
    name: item.name,
  }));
};
