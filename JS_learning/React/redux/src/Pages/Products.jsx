import { useDispatch, useSelector } from "react-redux";
import Product from "../ui/Product/Product";
import { useEffect } from "react";
import { fetchProducts } from "../app/slices/productsSlice";
import { combineSlices } from "@reduxjs/toolkit";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsList = products.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <section className="container mx-auto px-[20px] grid grid-cols-[repeat(auto-fit,_minmax(275px,_1fr))] justify-center gap-[20px] mt-[30px]">
      {productsList}
    </section>
  );
}
