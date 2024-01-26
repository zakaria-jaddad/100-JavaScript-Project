async function updateProduct(productInformations) {
  try {
    const response = await fetch(
      `http://localhost:9000/products/${productInformations.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(productInformations),
      }
    );
    if (!response.ok) {
      throw new Error("Network Error.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function addProduct(productInformations) {
  try {
    const response = await fetch(`http://localhost:9000/wishlist/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productInformations),
    });
    if (!response.ok) {
      throw new Error("Network Error While Adding Product.");
    }
    return 0;
  } catch (error) {
    throw new Error(error);
  }
}

async function removeProduct(productInformations) {
  try {
    const response = await fetch(
      `http://localhost:9000/wishlist/${productInformations.id}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      }
    );
    if (!response.ok) {
      return 1;
    }
  } catch (error) {
    return 1;
  }

  return 0;
}

async function addProductToWishlist(productInformations) {
  // update product infomrations
  const newProductInformations = await updateProduct({
    ...productInformations,
    isWishList: true,
  });

  // Add Product to wishlist
  const addProductResponse = await addProduct(newProductInformations);

  if (addProductResponse !== 0) return 1;

  return newProductInformations.isWishList;
}

async function removeProductFromWishlist(productInformations) {
  // update product infomrations
  const newProductInformations = await updateProduct({
    ...productInformations,
    isWishList: false,
  });

  // Remove Product from json-server
  const removeProductResponse = await removeProduct(newProductInformations);

  // error
  if (removeProductResponse !== 0) {
    alert("error happend Try again.");
  }

  return newProductInformations.isWishList;
}

export { addProductToWishlist, removeProductFromWishlist };
