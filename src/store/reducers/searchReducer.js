const initialState = {
  searchResults: [],
  selectedItemId: null,
  buttonClicked: false,
};


const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
const SET_SELECTED_ITEM_ID = 'SET_SELECTED_ITEM_ID';
const SET_BUTTON_CLICKED = 'SET_BUTTON_CLICKED';


export const searchProductsAction = payload => ({type: SEARCH_PRODUCTS, payload});
export const setSelectedItemId = (itemId) => ({type: SET_SELECTED_ITEM_ID, payload: itemId});
export const setButtonClicked = (value) => ({type: SET_BUTTON_CLICKED,payload: value});


export const searchReducer = (state = initialState, action) => {
  if (action.type === SEARCH_PRODUCTS) {
    return {...state,searchResults: action.payload};
  } else if (action.type === SET_SELECTED_ITEM_ID){
    return { ...state, selectedItemId: action.payload }
  } else if (action.type === SET_BUTTON_CLICKED){
    return { ...state, buttonClicked: action.payload }
  } else {
    return state;
  }
};