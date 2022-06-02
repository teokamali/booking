import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getProducts } from "../../services/api";
export const ProductsContext = createContext();
function ProductsContextProvider({ children }) {
  const categories = [
    { id: 1, label: "electronics", value:"electronics", products: 71 },
    { id: 2, label: "jewelery", value:"jewelery", products: 42 },
    { id: 3, label: "men's clothing", value:"men's clothing", products: 10 },
    { id: 4, label: "women's clothing", value:"women's clothing", products: 30 },
  ];
  const tags = [
    { id: 1, label: "خرید جواهر",value:"خرید جواهر", products: 71 },
    { id: 2, label: "جواهر",value:"جواهر", products: 42 },
    { id: 3, label: "لباس مردانه",value:"لباس مردانه", products: 10 },
    { id: 4, label: "لباس زنانه", value:"لباس زنانه",products: 30 },
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      (async function productFetch() {
        const { data } = await axios.get(`${getProducts}`);
        setProducts(data);
      })();
    } catch (e) {
      // console.log(e);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products,setProducts, categories, tags }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
