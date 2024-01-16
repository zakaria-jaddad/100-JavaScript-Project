import { useState, useEffect } from "react";
import getCategories from "./util/CategoryApi";
import Category from "./Category";

const Categories = ({onCategoryClick}) => {
  const [categories, setCategories] = useState([]);

  // getting data
  useEffect(() => {
    const data = async () => {
      setCategories(await getCategories());
    };

    // clearout
    data();
  }, []);

  const categoriesBar = categories.map((category, index) => (
    <Category category={category} key={index} onCategoryClick={onCategoryClick} />
  ));

  return (
    <div
      className="
        flex
        justify-center
        items-center
        flex-wrap
        gap-[25px]
        my-[15px]
      "
    >{categoriesBar}</div>
  )
};

export default Categories;
