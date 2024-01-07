import React from "react"
import Carousel from "./Carousel/Carousel";
import Categories from "./Category/Categories";
import Products from "./Products/Products";

const Body = () => {
    return (
        <>
            <Carousel />
            <main className="container mx-auto">
                <Categories />
                <Products />
            </main>
        </>        
    )
}

export default Body;  