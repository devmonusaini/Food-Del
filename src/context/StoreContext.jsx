import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartitem] = useState({});
  const addToCart = (itemId) => {
    console.log(itemId);
    if (!cartItem[itemId]) {
      setCartitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartitem,
    addToCart,
    removeFromCart,
     getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
