import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCategories } from '../../requests/catigories';
import ProductsContainer from '../../components/ProductsContainer';
import FilterForm from '../../components/FilterForms/FilterForm';
import s from './index.module.css'
import SortForm from '../../components/FilterForms/SortForm';
import DiscountForm from '../../components/FilterForms/DiscountForm';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';


export default function ProductsFromTheCategoryPage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllCategories), []);

    const products_by_category_state = useSelector(state => state.categories.find(el => el.id === +id));

    const allProducts = useSelector(state => state.products)

    
  return (
    <Wrapper>
    <div>
      <Title>{products_by_category_state?.title}</Title>
      <div className={s.filter_sort}>
      <FilterForm/>
      <DiscountForm/>
      <SortForm/>
      </div>
        <ProductsContainer products={allProducts} paramsId={id}/>
    </div>
    </Wrapper>
  )
}
