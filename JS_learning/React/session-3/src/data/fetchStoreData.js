import { useEffect } from "react";

const fetchStoreData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json()
    return data
  } catch (e) {
    return [];
  }
};

export default fetchStoreData;