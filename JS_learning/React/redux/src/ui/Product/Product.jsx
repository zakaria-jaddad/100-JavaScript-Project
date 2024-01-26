import { useDispatch } from "react-redux";
import fixDescription from "./util/description";
import { addToCart, deleteFromCart } from "../../app/slices/cartSlice";

export default function Product({ isInCart = false, ...product }) {
  const dispatch = useDispatch();
  const productButton =
    isInCart === false ? (
      <button
        className="
          py-[6px] px-[12px]
          text-white font-semibold
          bg-[#007bff] border-[#007bff] 
          rounded-[4px]
          w-fit
          mt-auto
        "
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add To Cart
      </button>
    ) : (
      <button
        className="
          py-[6px] px-[12px]
          text-white font-semibold
          bg-[#007bff] border-[#007bff] 
          rounded-[4px]
          w-fit
          mt-auto
        "
        onClick={() => {
          dispatch(deleteFromCart(product));
        }}
      >
        Remove From Cart
      </button>
    );
  
  
  return (
    <div className="flex flex-col gap-[15px] w-full sm:w-[18rem] sm:transition-all duration rounded-lg border border-[#ddd] p-[20px]">
      <img className="object-contain h-[180px]" src={product.image} alt="" />
      <div className=" flex flex-col gap-[16px]">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className=" break-words">{fixDescription(product.description)}</p>
      </div>
      {productButton}
    </div>
  );
}
