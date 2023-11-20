import React from 'react'
import { useSelector } from 'react-redux'
import CategoriesContainer from '../CategoriesContainer';
import { Link } from 'react-router-dom';
import s from './index.module.css'
import Wrapper from '../UI/Wrapper';

export default function Catalog() {

    const categories = useSelector((state) => state.categories);

    const catalog = categories.slice(0, 4);

  return (
    <Wrapper>
      <div className={s.wrapper}>
          <div className={s.titleButton}>
              <h2>Catalog</h2>
              <Link to="/categories">
                  <button className={s.button}>All categories</button>
              </Link>
          </div>
          <CategoriesContainer className={s.catalog_categories} categories={catalog}/>
      </div>
    </Wrapper>
  )
}
    