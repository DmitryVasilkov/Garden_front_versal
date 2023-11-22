import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './index.module.css'
import { addAction } from '../../store/reducers/cartReducer';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';
import { LINK } from '../../requests/link';

export default function ProductPage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const singleProduct = useSelector(state => state.products.find(el => el.id === +id));

    console.log(singleProduct);

    const { title, price, discount_price, image, description} = singleProduct

    const difference = discount_price === null ? " " : Math.ceil(((price - discount_price) / price) * 100) + "%";



  return (
    <>
    {
    singleProduct.status === 'ready'
    ?
    <Wrapper className={s.wrapperMob}>
        <div className={s.mainWrap}>
                <Title className={s.productTitle}>{title}</Title>
                <div className={s.productWrap}>
                    <img src={`${LINK}/${image}`} alt="" />
                    <div className={s.inform}>
                        <div className={s.priceBlock}>
                            <p className={s.price}>{discount_price ?? price}<span>$</span>{" "}</p>
                            <p className={s.oldPrice}>{discount_price !== null ? `${price}$` : ""}</p>
                            <p className={s.sale}>{difference}</p>
                        </div>
                        <button onClick={() => dispatch(addAction({id: +id, title, price, image}))} className={s.addBtn}>
                            To Cart
                        </button>
                        <div className={s.description}> 
                            <p>Description</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
        </div>
    </Wrapper>
    :
    []
    } 
    </>
    
  )
}
