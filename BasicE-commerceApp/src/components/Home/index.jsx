import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Categories from "./Category/Categories";
import Products from "./Products/Products";
import productsFilter from "./Products/util/productsFilter";

const HomeWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  /*
    0: Active 
    1: inActive 
  */

  const handelCategoryClicked = ({ category, isActive }) => {
    if (isActive === 0) {
      setSelectedCategory([...selectedCategory, category]);
    } else {
      setSelectedCategory((prevCategories) =>
        productsFilter({ prevCategories, category })
      );
    }
  };

  return (
    <>
      <Carousel />
      <main className="container mx-auto">
        <Categories onCategoryClick={handelCategoryClicked} />
        <Products selectedCategory={selectedCategory} />
      </main>
    </>
  );
};

export default HomeWrapper; 
