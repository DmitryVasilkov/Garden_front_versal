import React from 'react'
import img from './page_not_found.jpg'
import Wrapper from '../UI/Wrapper'
import s from './index.module.css'


export default function Eror() {
  return (
    <Wrapper style={{ display: "flex", justifyContent: "center" }}>
        <img className={s.error_img} src={img} alt="error_image" />
    </Wrapper>
  )
}


