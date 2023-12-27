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
    for (let i = 0; i < query.length; i++) {
      if (query[i] !== product.category[i].toLowerCase()) {
        return null;
      }
    }
    return <Item {...product} key={product.id} />;
  });
};

export default Items;
