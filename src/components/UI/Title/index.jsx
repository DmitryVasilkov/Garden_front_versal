import React from 'react'
import s from "./index.module.css";

export default function Title({children, className}) {
  return (
    <div className={[s.title_wrapper, className].join(' ')}>{children}</div>
  )
}