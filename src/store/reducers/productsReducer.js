const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS';



export const getAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload });
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProductsAction = payload => ({ type: FILTER_PRODUCTS, payload });
export const getDiscountProductsAction = payload => ({ type: GET_DISCOUNT_PRODUCTS, payload });



export const productsReducer = (state=[], action) => {
  if(action.type === LOAD_ALL_PRODUCTS){
    return action.payload.map(el => ({...el, show_product: true, show_product_by_sale: true}))
  } else if(action.type === SORT_PRODUCTS){
    if(action.payload === 'title'){
      return [...state].sort((a, b) => a.title.localeCompare(b.title))
    } else if(action.payload === 'default'){
      return [...state].sort((a, b) => a.price - b.price)
    } else if(action.payload === 'price_desc'){
      return [...state].sort((a, b) => {
        const getPrice = (el) => (el.discont_price !== null ? el.discont_price : el.price)
        return getPrice(b) - getPrice(a);
      })
    } else if(action.payload === 'price_asc'){
      return [...state].sort((a, b) => {
        const getPrice = (el) => (el.discont_price !== null ? el.discont_price : el.price)
        return getPrice(a) - getPrice(b);
      })
    }
  } else if(action.type === FILTER_PRODUCTS) {
    const { min_value, max_value } = action.payload;
    return state.map(el => {
      let actualPrice = el.discont_price || el.price
      if(actualPrice >= min_value && actualPrice <= max_value){
        el.show_product = true
      } else {
        el.show_product = false
      }
      return el
    })
  } else if (action.type === GET_DISCOUNT_PRODUCTS) {
    if(action.payload){
      return state.map(el => {
        if(el.discont_price === null){
          el.show_product_by_sale = false
        }
        return el
      })
    } else {
      return state.map(el => {
        el.show_product_by_sale = true;
        return el
      })
    }
  } else {
    return state
  }
}



