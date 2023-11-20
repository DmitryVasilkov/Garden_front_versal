import React from 'react'
import s from './index.module.css'

export default function Wrapper({children, className}) {
  return (
    <div className={[s.wrapper, className].join(' ')}>
        {children}
    </div>
  )
}
