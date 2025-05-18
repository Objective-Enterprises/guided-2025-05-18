import { START_PRODUCTS, STOP_PRODUCTS, START_PRODUCT, STOP_PRODUCT, QUANTITY } from "../constants/productActionConstants"

export const listProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case START_PRODUCTS: {
      return { ...state, loading: true }
    }
    case STOP_PRODUCTS: {
      const json = JSON.stringify(action.payload)
      localStorage.setItem('products', json)
      return { ...state, loading: false, products: action.payload }
    }
    default: {
      return state
    }
  }
}

export const fetchProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case START_PRODUCT: {
      return { ...state, loading: true }
    }
    case STOP_PRODUCT: {
      return { ...state, loading: false, product: action.payload }
    }
    case QUANTITY: {
      return { ...state, quantity: action.payload }
    }
    default: {
      return state
    }
  }
}