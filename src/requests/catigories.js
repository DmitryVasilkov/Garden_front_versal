import { loadAllCategoriesAction } from "../store/reducers/categoriesReducer"
import { LINK } from "./link"

const URL = `${LINK}/categories/all`

export const getAllCategories = async(dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(loadAllCategoriesAction(data))

}