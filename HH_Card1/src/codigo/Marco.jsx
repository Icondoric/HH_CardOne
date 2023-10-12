import React from 'react';

function Marco() {
  const estiloMarco = {
    width: '375px',
    height: '812px',
    backgroundColor: 'white',
    margin: '0 auto', // Centra horizontalmente
    borderRadius: '10px', // Agrega bordes redondeados
    display: 'flex',
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra verticalmente
  };

  return (
    <div style={estiloMarco}></div>
  );
}

export default Marco;
