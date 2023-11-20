import React from 'react'
import banner from "./banner2.jpg";
import s from './index.module.css'
import { Link } from 'react-router-dom';



export default function Banner() {
  return (
    <div className={s.wrapper} style={{ backgroundImage: `url(${banner})` }}>
        <div className={s.info}>
            <h2>SALE</h2>
            <h3>New season</h3>
            <Link to='/sales'>
            <button className={s.sale} style={{ backgroundImage: `url(${banner})` }}>Sale</button>
            </Link>
        </div>
    </div>
  )
}
