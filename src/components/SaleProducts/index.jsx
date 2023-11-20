import React from 'react'
import ProductsContainer from '../ProductsContainer';
import { useSelector } from 'react-redux';

export default function SaleProducts() {

    const products = useSelector(state => state.products);


    const products_with_discount = products.filter((el) => el.discont_price !== null);



  return (
    <div>
        {
            <ProductsContainer products_with_discount={products_with_discount}/>
        }
    </div>
  )
}
