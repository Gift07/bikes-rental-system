import * as constants from "../constants/cart";

// adding to the cart
export const addingToTravels = (cartdata) => async (dispatch) => {  
    try {
      dispatch({
        type: constants.ADD_TO_CART_REQUEST,
      });
    //   fetch the all cart items
        const { data } = await axiosInstance.post('/travels', cartdata)
        
    const cartClone =
      localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : { products: [] };

    const cartExist = cartClone.products.find(
      (cart) => cart.product._id === product._id
    );

    if (cartExist === undefined) {
      cartClone.products.push({
        product,
        quantity,
        color,
        size,
      });

      localStorage.setItem("cartItems", JSON.stringify(cartClone));

      dispatch({
        type: constants.ADD_TO_CART_SUCCESSFULL,
        payload: cartClone,
      });
    }
  } catch (error) {
    dispatch({
      type: constants.ADD_TO_CART_FAILED,
      payload: error,
    });
  }
};

export const fetchTravels = () => async (dispatch) => {
    try {
        dispatch({
            type:constants.FETCH_TRAVELS_REQUEST
        })
        const { data } = await axiosInstance.get('/travels')
        dispatch({
            type: constants.FETCH_TRAVELS_SUCCESSFUL,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: constants.FETCH_TRAVELS_FAIL,
            payload:error
        })
    }
}
