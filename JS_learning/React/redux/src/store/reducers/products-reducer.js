import { ADD_PRODUCT, GET_PRODUCTS } from "../actions/products-actions";

export const productsReducer = (state = [{id: "1", title: "Hello, World!"}], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case GET_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};
