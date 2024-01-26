export default async function getWishlistProducts() {
  try {
    const response = await fetch("http://localhost:9000/wishlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network Error");
    }

    const data = response.json();
    return data;
  } catch (error) {
    throw new Error("Error Getting Data");
  }
}
