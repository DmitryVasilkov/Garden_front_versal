import React, { useState } from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { decrementAction, deleteAction, incrementAction, setCountAction } from '../../store/reducers/cartReducer';
import { CiCircleRemove, CiTrash } from "react-icons/ci";
import { LINK } from '../../requests/link';

export default function Cart({id, title, price, discont_price, image, count}) {

  const currentPrice = (discont_price ?? price) * 1;

  const dispatch = useDispatch();

  const [confirmDeleting, setConfirmDeleting] = useState(false);

  

  const deleteItem = () => {
      if (!confirmDeleting) {
          setConfirmDeleting(true);
          setTimeout(() => {
              setConfirmDeleting(false);
          }, 3000);
      } else {
          dispatch(deleteAction(id));
          setConfirmDeleting(false);
      }
  };


  return (
    <div className={s.cartItemWrap}>
            <img src={`${LINK}/${image}`} alt="" />
            <div className={s.titleCountBlock}>
                <p>{title}</p>
                <div>
                    <p onClick={() => dispatch(decrementAction(id))}>-</p>
                    <input type="number" value={count} onChange={(e) => dispatch(setCountAction({ id, count: +e.target.value }))} />
                    <p onClick={() => dispatch(incrementAction(id))}>+</p>
                </div>
            </div>

            <div className={s.priceBlock}>
                <p>
                    Price: <span>{currentPrice.toFixed(2)}</span>
                </p>
                <p>
                    Amount: <span>{(currentPrice * count).toFixed(2)}</span>
                </p>
            </div>

            <p className={s.delFromCart} onClick={deleteItem}>
                {confirmDeleting ? <CiTrash /> : <CiCircleRemove />}
            </p>
        </div>
  )
}
