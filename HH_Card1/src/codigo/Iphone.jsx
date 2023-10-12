import React from 'react';
import BarraEstado from './BarraEstado'; // Importa el componente BarraEstado
import Imagenes from '../components/Imagenes';
import Bar from '../components/Bar';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
function Iphone() {
  const estiloIphone = {
    width: '375px',
    height: '812px',
    backgroundColor: 'white',
    margin: '0 auto', // Centra horizontalmente
    borderRadius: '30px', // Agrega bordes redondeados
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #000',
    position: 'relative', // Establece la posición en "relative"
  };
  const estiloContenido = {
    flex: 1,
    overflow: 'auto',
  };

  const estiloBar = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  };

  return (
    <div style={estiloIphone}>
      <BarraEstado />
      <SearchBar/>
      <Navbar/>
      <div style={estiloContenido}>
        <Imagenes />
      </div>
      <Bar style={estiloBar} />
    </div>
  );
}

export default Iphone;
