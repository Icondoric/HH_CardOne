import React from 'react'
import './styles/Bar.css'
function Bar() {
    return (
        <div className='bar'>
            <div className='rectangulo-azul'>
            <div className='casita-container'>
                    <img src='/Vectorhome2.svg' alt='Casitaext' />
                    <img src='/Vectorhome1.svg' alt='Casitaint' className='Vectorhome1' />
            </div>
                <img src='/Vectorheart.svg' alt='Corazon' />
                <img src='/Vectormensaje.svg' alt='Mensaje' />
            <div className='engranaje-container'>
                <img src='/Vectorengext.svg' alt='Engranajeext' />
                <img src='/Vectorengint.svg' alt='Engranajeint' className='Vectoreng1'/>
            
            </div>
            
            </div>
        </div>
    );

}
export default Bar