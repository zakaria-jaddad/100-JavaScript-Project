import { useSelector } from "react-redux";
import Product from "../ui/Product/Product";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  const cartProductsList = cartProducts.map((product) => (
      <Product key={product.id} {...product} isInCart={true} />
  ));
  return (
    <section className="container mx-auto px-[20px] grid grid-cols-[repeat(auto-fit,_minmax(275px,_1fr))] justify-center gap-[20px] mt-[30px]">
      {cartProductsList}
    </section>
  );
}
