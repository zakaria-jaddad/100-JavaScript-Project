export default async function getCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
      {
        method: "GET",
      }
    );

    // response handelling 
    if (!response.ok) {
      return new Error("Error in Network.")
    }

    const data = await response.json();
    return data;
  }
  catch(error) {
      throw new Error(error);
  }
}
