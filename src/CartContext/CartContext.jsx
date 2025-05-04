import { createContext, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (count = 1) => {
    setCartCount((prev) => prev + count);
  };
  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
