import React from "react"
import Carousel from "./Carousel/Carousel";
import Categories from "./Category/Categories";

const Body = () => {
    return (
        <>
            <Carousel />
            <main className="container mx-auto">
                <Categories />
            </main>
        </>        
    )
}

export default Body;  