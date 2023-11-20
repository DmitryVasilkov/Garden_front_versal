import React from 'react'
import Banner from '../../components/Banner'
import Catalog from '../../components/Catalog'
import Wrapper from '../../components/UI/Wrapper'
import SaleMain from '../../components/SaleMain'
import DiscountForm from '../../components/DiscountForm'



export default function MainPage() {
  return (
    <Wrapper>
        <Banner/>
        <Catalog/>
        <DiscountForm/>
        <SaleMain/>
    </Wrapper>
  )
}
