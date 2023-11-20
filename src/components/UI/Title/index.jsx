import React from 'react'
import s from "./index.module.css";

export default function Title({children}) {
  return (
    <div className={s.title_wrapper}>{children}</div>
  )
}