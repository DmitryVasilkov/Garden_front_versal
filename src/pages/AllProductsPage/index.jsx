import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { useSelector } from 'react-redux'
import FilterForm from '../../components/FilterForms/FilterForm'
import DiscountForm from '../../components/FilterForms/DiscountForm'
import SortForm from '../../components/FilterForms/SortForm'
import s from './index.module.css'
import Wrapper from '../../components/UI/Wrapper'
import { useParams } from 'react-router-dom'
import Title from '../../components/UI/Title'



export default function AllProductsPage() {

    const { id } = useParams();

    const products = useSelector(state => state.products)

  return (
    <Wrapper>
      <Title>All products</Title>
      <div className={s.filter_sort}>
        <FilterForm/>
        <DiscountForm/>
        <SortForm/>
      </div>
        <ProductsContainer products={products} category={id}/>
    </Wrapper>
  )
}
