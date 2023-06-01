import React from 'react'
import style from '../styles/alerta.module.css'

const Alerta = ({mensaje}) => {
  return (
    <div className={style.alerta}>
        <h2>{mensaje}</h2>
    </div>
  )
}

export default Alerta