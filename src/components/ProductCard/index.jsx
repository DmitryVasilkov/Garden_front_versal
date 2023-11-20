import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { addAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import { useCart } from '../hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { LINK } from '../../requests/link';

export default function ProductCard({id, image, title, price, discont_price}) {

    const dispatch = useDispatch();
    const basketProducts = useCart();
    const productInBasket = basketProducts.find((el) => el.id === id);
    const countInBasket = productInBasket ? productInBasket.count : '';

    const discount = discont_price === null ? "" : Math.ceil(((price - discont_price) / price) * 100) + "%";

  return (
    <div className={s.wrapper}>
        <Link className={s.product} to={`/products/${id}`}>
        <img src={`${LINK}/${image}`} alt="" />
        <div>
            <div className={s.prices}>
                <p className={s.price}>{discont_price ?? price}<span>$</span>{" "}</p>
                <p className={s.oldPrice}>{discont_price !== null ? `${price}$` : " "}</p>
                <p className={s.discount}>{discount}</p>
            </div>
            <p className={s.title}>{title}</p>
        </div>
        </Link>
        <button onClick={() => dispatch(addAction({id, title, price, discont_price, image}))} className={s.addToCartBtn}>
           {countInBasket ? (<p>{countInBasket}</p>) : <FontAwesomeIcon icon={faBasketShopping} beat style={{color: "#00ff2a",}} />}
        </button>
    </div>
  )
}
