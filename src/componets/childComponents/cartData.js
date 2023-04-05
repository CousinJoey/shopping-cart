const CART_DATA_KEY = "cartData";

export const addToCart = (productData) => {
  const cartData = getCartData();
  cartData.push(productData);
  localStorage.setItem(CART_DATA_KEY, JSON.stringify(cartData));
};

export const getCartData = () => {
  const cartDataJson = localStorage.getItem(CART_DATA_KEY);
  return cartDataJson ? JSON.parse(cartDataJson) : [];
};

export const cartCost = () => {
  const cartData = getCartData();
  const totalCost = cartData.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  return totalCost;
};
