import { useSelector } from "react-redux";

export function useCart(){

    const cart = useSelector(state => state.cart)
    
    const products = useSelector(state => state.products)

    const result = cart.map(el => {
        const product = products.find(({id}) => id === el.id);
        return {...el, ...product}
    })

    return result 
}