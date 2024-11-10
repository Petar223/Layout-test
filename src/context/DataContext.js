import React, { createContext, useState } from "react";
import initialData from "../data/data.json";

const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [isQuantityEditorVisible, setQuantityEditorVisible] = useState(true);

  const addToCart = ({ price, quantity }) => {
    setData((prevData) => ({
      ...prevData,
      cart: {
        ...prevData.cart,
        items: prevData.cart.items + quantity,
        total_costs: prevData.cart.total_costs + price * quantity,
      },
    }));
  };

  const contextValue = {
    data,
    addToCart,
    isQuantityEditorVisible,
    setQuantityEditorVisible,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;
