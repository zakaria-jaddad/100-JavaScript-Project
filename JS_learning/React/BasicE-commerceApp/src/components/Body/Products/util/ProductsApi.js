
export default async function getProducts() {
  try {
    const request = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });

      // error handeling 
      if (!request.ok) { throw new Error("Network Error.") }
      
      const data = await request.json();
        return data;
  }
  catch (error) {
    throw new Error("Unable to Fetch Data From Server.");
  }
}
