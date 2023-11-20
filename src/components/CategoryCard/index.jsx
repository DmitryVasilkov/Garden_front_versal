import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { LINK } from '../../requests/link'


export default function CategoryCard({ id, title, image }) {
  return (
    <Link to={`/categories/${id}`}>
        <div className={s.categoryCard}>
            <img src={`${LINK}/${image}`} alt="" />
            <h2>{title}</h2>
        </div>
    </Link>
  )
}
