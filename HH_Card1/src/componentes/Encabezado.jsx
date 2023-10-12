import React from 'react'
import './App.css'

function Encabezado() {
  return (
    <article>
      <div className='Encabezado'>
        <h2>
          You are here
        </h2>
        <p>
          Indonesia
        </p>
        <img src="http://www.w3.org/2000/svg" alt="Icono pa bajar" />
      </div>
      <div className='imagen'>
        <img src="http://www.w3.org/2000/svg" alt="Imagen" />
      </div>
    </article>
  )
}

export default Encabezado