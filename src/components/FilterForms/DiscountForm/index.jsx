import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDiscountProductsAction } from '../../../store/reducers/productsReducer';
import s from './index.module.css'

export default function DiscountForm() {

    const dispatch = useDispatch();

    const [ checkboxChecked, setCheckboxChecked ] = useState(false);

    const handleChange = () => setCheckboxChecked(!checkboxChecked);

    const get_products = e => dispatch(getDiscountProductsAction(e.target.checked));

  return (
    <div>
      <label className={s.discount}>
        <p>Discounted items</p>
        <input type='checkbox' checked={checkboxChecked} onChange={handleChange} onClick={get_products} />
      </label>
    </div>
  )
}


