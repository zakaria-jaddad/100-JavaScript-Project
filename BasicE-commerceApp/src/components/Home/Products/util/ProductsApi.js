
export default async function getProducts() {
  try {
    const request = await fetch("http://localhost:9000/products", {
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
