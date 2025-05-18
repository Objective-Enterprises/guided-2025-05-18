import { START_PRODUCT, STOP_PRODUCT, START_PRODUCTS, STOP_PRODUCTS } from "../constants/productActionConstants"
import { GET_ALL_PRODUCTS_API } from "../constants/backend"
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  dispatch({ type: START_PRODUCTS })

  const response = await axios.get(GET_ALL_PRODUCTS_API)

  dispatch({ type: STOP_PRODUCTS, payload: response.data.data })
}

export const fetchProductDetails = (productId) => async (dispatch) => {
  dispatch({ type: START_PRODUCT })

  const url = `${GET_ALL_PRODUCTS_API}/${productId}`
  const response = await axios.get(url)
  
  dispatch({ type: STOP_PRODUCT, payload: response.data.data })
}
