import React from 'react'
import style from '../styles/exito.module.css'

const Exito = ({exito}) => {
    
  return (
    <div className={exito ? style.on : style.off}>
        <p>El usuario fue registrado exitosamente!!!</p>
    </div>
  )
}

export default Exito