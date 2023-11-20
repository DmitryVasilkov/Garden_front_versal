import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './index.module.css'
import { addAction } from '../../store/reducers/cartReducer';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';

export default function ProductPage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const singleProduct = useSelector(state => state.products.find(el => el.id === +id));

    const { title, price, discont_price, image, description} = singleProduct

    const difference = discont_price === null ? " " : Math.ceil(((price - discont_price) / price) * 100) + "%";

   

  return (
    <Wrapper>
        <div className={s.mainWrap}>
                <Title>{title}</Title>
                <div className={s.productWrap}>
                    <img src={`https://garden-server.onrender.com/${image}`} alt="" />
                    <div className={s.inform}>
                        <div className={s.priceBlock}>
                            <p className={s.price}>{discont_price ?? price}<span>$</span>{" "}</p>
                            <p className={s.oldPrice}>{discont_price !== null ? `${price}$` : ""}</p>
                            <p className={s.sale}>{difference}</p>
                        </div>
                        <button onClick={() => dispatch(addAction({id: +id, title, price, image}))} className={s.addBtn}>
                            To Cart
                        </button>
                        <p className={s.description}> 
                            <p>Description</p>
                            <p>{description}</p>
                        </p>
                    </div>
                </div>
        </div>
    </Wrapper>
  )
}
