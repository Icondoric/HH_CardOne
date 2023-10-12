import React from 'react';
import BarraEstado from './BarraEstado'; // Importa el componente BarraEstado
import Imagenes from '../components/Imagenes';
import Bar from '../components/Bar';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Encabezado from '../componentes/Encabezado';
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



  return (
    <div style={estiloIphone}>
      <BarraEstado />
      <Encabezado/>
      <SearchBar/>
      <Navbar/>
      <div style={estiloContenido}>
        <Imagenes />
      </div>
      <Bar  />
    </div>
  );
}

export default Iphone;
