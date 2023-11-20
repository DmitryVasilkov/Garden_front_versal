import React from 'react'
import img from './page_not_found.jpg'
import Wrapper from '../UI/Wrapper'


export default function Eror() {
  return (
    <Wrapper style={{ display: "flex", justifyContent: "center" }}>
        <img src={img} alt="error_image" />
    </Wrapper>
  )
}
