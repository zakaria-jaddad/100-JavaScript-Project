class API {
  constructor() {}
  // fetching all products
  async getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res) {
        throw new Error("Unable to Get Data.");
      }
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

const productsAPI = new API();

export default productsAPI;
