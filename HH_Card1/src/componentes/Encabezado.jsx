import React from 'react'
import '../App.css'

function Encabezado() {
  return (
    <article>
      <div className='Encabezado'>
        <p><b>You are here</b></p>
        <p>
          Indonesia
        </p>
        <img src="./Arrow.jpg" alt="Icono pa bajar" />
      </div>
      <div className='imagen'>
        <img src="./User.jpg" alt="Imagen" />
      </div>
    </article>
  )
}

export default Encabezado