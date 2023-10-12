import React from 'react'
import '../App.css'
import './styles/Encabezado.css'
function Encabezado() {
  return (
    <article className='Encabezado'>
      <div>
        <p>You are here</p>
        <p1><b>Indonesia</b></p1>

        <img src="./Arrow.jpg" alt="Icono pa bajar" />
      </div>
      <div className='imagen'>
        <img src="./User.jpg" alt="Imagen" />
      </div>
    </article>
  )
}

export default Encabezado