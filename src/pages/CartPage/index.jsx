import React from 'react'
import CartContainer from '../../components/CartContainer'
import Wrapper from '../../components/UI/Wrapper'
import Title from '../../components/UI/Title'
import { Link } from 'react-router-dom'
import {RiArrowGoBackFill} from 'react-icons/ri'
import s from './index.module.css'

export default function CartPage() {

    
  

  return (
    <Wrapper>
      <Title>Shopping cart</Title>
      <Link to="/products" >
        <div className={s.back}>
            Back to the store
            <RiArrowGoBackFill/>
        </div>   
      </Link>
      <CartContainer/>
    </Wrapper>
  )
}
