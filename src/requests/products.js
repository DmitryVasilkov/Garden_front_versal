import { getAllProductsAction } from "../store/reducers/productsReducer"
import { LINK } from "./link"

const URL = `${LINK}/products/all`

export const getAllProducts = async(dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(getAllProductsAction(data));
}

