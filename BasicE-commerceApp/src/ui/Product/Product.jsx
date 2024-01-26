import { useEffect, useState } from "react";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "./util/productWishList";

const Product = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
  isWishList,
}) => {
  const [isProductInWishList, setIsProductInWishList] = useState(isWishList);
  const productInformations = {
    id,
    title,
    price,
    category,
    description,
    image,
    rating,
    isWishList,
  };

  return (
    <div className="flex items-center justify-center bg-white w-[80%] mx-auto">
      <div className="font-sans gap-[30px] flex flex-col lg:flex-row">
        <div className="  h-[353px] w-full lg:w-[50%]">
          <img
            className=" h-full mx-auto w-full object-contain"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
        <form className="flex-1 p-6 text-center md:text-left">
          <div className="flex items-center gap-[15px] flex-wrap justify-center">
            <h2 className="flex-auto text-xl font-semibold text-gray-900">
              {title}
            </h2>
            <div className="text-lg font-semibold text-black-500">{`$${price}`}</div>
          </div>

          <div className="w-full flex-none  font-medium text-black-700 my-3">
            {`category: ${category}`}
          </div>
          <div className="w-full flex-none  font-medium text-black-700 my-3">
            {description}
          </div>
          <div className="w-full flex justify-center md:justify-start font-medium text-black-700 my-3">
            <button
              className={` 
                min-w-[140px] h-[48px] px-[17px] transition-all duration-30 border-[2px] border-solid ${
                  isProductInWishList === true
                    ? "border-[#06f] text-[#06f]"
                    : "border-black text-black"
                } 
                hover:border-[#06f] hover:text-[#06f] hover:fill-[#06f]
              `}
              onClick={async (event) => {
                event.preventDefault();
                isProductInWishList === true
                  ? setIsProductInWishList(
                      await removeProductFromWishlist(productInformations)
                    )
                  : setIsProductInWishList(
                      await addProductToWishlist(productInformations)
                    );
              }}
            >
              Add To Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Product;
