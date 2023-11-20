import React from 'react'
import ProductsContainer from '../../components/ProductsContainer';
import { useSelector } from 'react-redux';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';
import FilterForm from '../../components/FilterForms/FilterForm';
import SortForm from '../../components/FilterForms/SortForm';
import s from './index.module.css'





export default function AllSalesPage() {


  const products = useSelector(state => state.products);

  const products_with_discount = products.filter((el) => el.discont_price !== null)


  return (
    <Wrapper>
      <Title>Products with sale</Title>
      <div className={s.filter_sort}>
        <FilterForm/>
        <SortForm/>
      </div>
      <ProductsContainer products={products_with_discount}/>
    </Wrapper>
  )
}
