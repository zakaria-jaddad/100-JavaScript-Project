import { useState } from "react";
const Category = ({ category }) => {
  const [categoryStyle, setCategoryStyle] = useState({isActive: 0, classStyle: ""})
  return (
    <div
      className={`
        h-[40px]
        flex justify-center items-center
        font-semibold
        px-[20px]
        rounded-[100px]
        border-blue-500
        border
        cursor-pointer
        ${categoryStyle.classStyle}
      `}
      onClick={() => {
        categoryStyle.isActive === 1 
          ? setCategoryStyle({isActive: 0, classStyle: ""}) // inactive 
          : setCategoryStyle({isActive: 1, classStyle: "bg-blue-500 text-white"}) // active
      }}
    >{category}</div>
  );  
};

export default Category;


