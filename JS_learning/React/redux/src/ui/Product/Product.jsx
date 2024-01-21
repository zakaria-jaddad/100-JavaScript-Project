import fixDescription from "./util/description";

export default function Product({ image, title, description }) {
  return (
    <div className="flex flex-col gap-[15px] w-full sm:w-[18rem] sm:transition-all duration rounded-lg border border-[#ddd] p-[20px]">
      <img className="object-contain h-[180px]" src={image} alt="" />
      <div className=" flex flex-col gap-[16px]">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className=" break-words">{fixDescription(description)}</p>
      </div>
        <button
          className="
            py-[6px] px-[12px]
            text-white font-semibold
            bg-[#007bff] border-[#007bff] 
            rounded-[4px]
            w-fit
            mt-auto
          "
        >
          Press Me Dady
        </button>
    </div>
  );
}
