import { useEffect, useState } from "react";
import fetchStoreData from "../data/fetchStoreData";
import Item from "./Item"
const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchProducts = await fetchStoreData();
      setProducts(fetchProducts);
    };
    fetchData();
  }, []);

  return products.map((product) => <Item {...product} key={product.id}/>);
};

export default Items;
