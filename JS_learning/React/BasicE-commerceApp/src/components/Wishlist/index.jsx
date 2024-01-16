import { useEffect, useState } from "react";
import getWishlistProducts from "./util/wishlistAPI";
import Product from "../../ui/Product/Product";

// wishlist main component
const WishlistIndex = () => {
  // products
  const [products, setProducts] = useState([]);

  // getting data
  useEffect(() => {
    const getProducts = async () => {
      const data = await getWishlistProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  // all products
  const productsList = products.map((product) => {
    return <Product key={product.id} {...product} />;
  });

  return products.length === 0 ? (
    <div className="text-center w-full">Nothing In Your Wishlist</div>
  ) : (
    <div className="flex gap-[40px] flex-col">{productsList}</div>
  );
};
export default WishlistIndex;
