import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import { useSelector } from 'react-redux';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';

export default function CategoriesPage() {

    const categories = useSelector(state => state.categories);

  return (
    <Wrapper>
        <Title>Categories</Title>
        <CategoriesContainer categories={categories}/>
    </Wrapper>
  )
}
