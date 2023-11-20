import React from 'react'
// import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoriesContainer({categories}) {

  

  return (
    <div className={s.wrapper}>
        {
            categories.map((el) => (<CategoryCard key={el.id} {...el}/>))
        }
    </div>
  )
}
