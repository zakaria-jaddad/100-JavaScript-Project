import { useState, useEffect } from "react";
import getCategories from "./util/CategoryApi";
import Category from "./Category";

const Categories = () => {
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
    <Category category={category} key={index} />
  ));

  return (
    <div
      className="
        flex
        justify-center
        items-center
        gap-[25px]
        my-[15px]
      "
    >{categoriesBar}</div>
  )
};

export default Categories;
