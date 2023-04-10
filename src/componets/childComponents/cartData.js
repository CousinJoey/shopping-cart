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
  const totalCost = cartData.reduce((acc, item) => {
    if (item.sale === "yes") {
      return acc + parseFloat(item.salePrice * item.quantity);
    } else {
      return acc + parseFloat(item.price * item.quantity);
    }
  }, 0);
  const finalCost = Math.round(totalCost * 100) / 100;
  return finalCost.toFixed(2);
};

export const cartSavings = () => {
  const cartData = getCartData();
  const totalSavings = cartData.reduce((acc, item) => {
    if (item.sale === "yes") {
      const savings =
        parseFloat(item.price * item.quantity) -
        parseFloat(item.salePrice * item.quantity);
      return acc + savings;
    } else {
      return acc;
    }
  }, 0);
  const roundedSavings = Math.round(totalSavings * 100) / 100;
  return roundedSavings.toFixed(2);
};
