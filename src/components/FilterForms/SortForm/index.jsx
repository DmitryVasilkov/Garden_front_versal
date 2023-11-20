import React from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsAction } from '../../../store/reducers/productsReducer'
import s from './index.module.css'

export default function SortForm() {

    const dispatch = useDispatch()

    const order = e => dispatch(sortProductsAction(e.target.value))

  return (
    <div >
        <label className={s.sort}>
            <p>Sorted:</p>
            <select onInput={order} defaultValue='default' className={s.select}>
                <option value='default'>By default</option>
                <option value='title'>By alphabet A-Z</option>
                <option value='price_asc'>By price incr</option>
                <option value='price_desc'>By price decr</option>
            </select>
        </label>
    </div>
  )
}

