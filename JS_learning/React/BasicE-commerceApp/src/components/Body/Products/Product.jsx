// 

const Product = ({title, price, category, description, image}) => {
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
        <form className="flex-1 p-6">
          <div className="flex items-center gap-[30px]">
            <h2 className="flex-auto text-xl font-semibold text-gray-900">
                {title}
            </h2>
            <div className="text-lg font-semibold text-black-500">{`$${price}`}</div>
          </div>

            <div className="w-full flex-none  font-medium text-black-700 mt-2">
                {`category: ${category}`}
            </div>
            <br />
            <div className="w-full flex-none  font-medium text-black-700 mt-2">
                {description}
            </div>
            <div className="w-full flex-none  font-medium text-black-700 my-3">
            <button
              className="min-w-[140px] px-[17px] transition-all duration-300 text-white border-[2px] border-solid border-black"
            >Add To Card</button>
            </div>
        </form>
      </div>
    </div>
  );
};
export default Product;


