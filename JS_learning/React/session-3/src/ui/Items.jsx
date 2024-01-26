import { useEffect, useState } from "react";
import fetchStoreData from "../data/fetchStoreData";
import Item from "./Item";

const Items = ({ query }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchProducts = await fetchStoreData();
      setProducts(fetchProducts);
    };
    fetchData();
  }, []);

  return products.map((product) => {
    const productTitle = product.category;

    if (productTitle.includes(query)) {
      return <Item {...product} key={product.id} />;
    }
    else {
      return null
    }
  });
};

export default Items;
