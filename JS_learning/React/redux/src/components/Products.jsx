import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../redux-tool-kit/slices/productsSlice";
// import { addProduct, fetchProducts } from "../store/actions/products-actions";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // local States
  const [title, setTitle] = useState("");

  // lists
  const productsList = products.map((product) => (
    <h2 key={product.id}>{product.title}</h2> 
  ));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <div>
      {productsList}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addProduct({ id: "this is an ID", title: title }));
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Add Product</button>
      </form>
    </div>
  );
};
export default Products;
