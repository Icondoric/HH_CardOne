import React, { useState, useEffect } from 'react';

function BarraEstado() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const estiloBarraEstado = {
    width: '100%',
    height: '24px',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center', // Centra verticalmente
  };

  const estiloHora = {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
  };
  const horaFormateada = hora.toLocaleTimeString();
//  const horaFormateada = hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={estiloBarraEstado}>
      <div style={estiloHora}>{horaFormateada}</div>
    </div>
  );
}

export default BarraEstado;
