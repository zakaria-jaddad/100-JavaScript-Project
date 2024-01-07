import { useEffect, useState } from "react";
import getProducts from "./util/ProductsApi";
import Product from "./Product";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setProducts(await getProducts());
    };

    // clearout
    getData();
  }, []);

  const productsList = products.map((product) => {
    
    return selectedCategory.includes(product.category) === true || selectedCategory.length === 0
      ? <Product {...product} key={product.id} />
      : null;
  });

  return (
    <div
      className="
      flex gap-[40px] flex-col
      "
    >
      {productsList}
    </div>
  );
};
export default Products;
