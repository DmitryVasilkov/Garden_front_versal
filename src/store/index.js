import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';
import { searchReducer } from './reducers/searchReducer';


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));