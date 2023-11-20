import React from 'react'
import ProductCard from '../ProductCard'
import s from './index.module.css'


export default function ProductsContainer({category, products, paramsId}) {

    // console.log('id', paramsId);

  
    // const allProducts = category ? products.filter(el => el.categoryId === +category) : products

    
   
  return (
    <div className={s.productsContainer}>
        {/* {
            allProducts?.filter(el => el.show_product && el.show_product_by_sale)
                        .map(el => <ProductCard key={el.id} {...el} />)  
        } */}
        {paramsId       ?
      products?.filter(el => el.categoryId === +paramsId)
               .filter((el) => el.show_product && el.show_product_by_sale)
               .map((el) => (
        <ProductCard key={el.id} {...el}/>
      ))      : 
      products?.filter((el) => el.show_product && el.show_product_by_sale)
               .map((el) => (
        <ProductCard key={el.id} {...el}/>
      ))
    }
    </div>
  )
}









