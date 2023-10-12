import React from 'react';
import BarraEstado from './BarraEstado'; // Importa el componente BarraEstado

function Iphone() {
  const estiloIphone = {
    width: '375px',
    height: '812px',
    backgroundColor: 'white',
    margin: '0 auto', // Centra horizontalmente
    borderRadius: '10px', // Agrega bordes redondeados
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={estiloIphone}>
      <BarraEstado /> {/* Agrega la barra de estado con la hora */}
    </div>
  );
}

export default Iphone;
