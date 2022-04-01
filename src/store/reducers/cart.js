import * as constants from "../constants/cart";
const initialState = {
  loading: false,
  cartItems:
    typeof window !== "undefined"
      ? localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : { products: [] }
      : { products: [] },
  error: null,
  response: null,
};
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // adding to cart
    case constants.ADD_TO_CART_REQUEST:
      return { ...state, loading: true };
    case constants.ADD_TO_CART_SUCCESSFULL:
      return { ...state, loading: false, cartItems: payload };
    case constants.ADD_TO_CART_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default cartReducer
