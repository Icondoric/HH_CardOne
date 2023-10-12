import React from 'react';
import Iphone from './codigo/Iphone'; // Importa el componente Iphone
import BarraEstado from './codigo/BarraEstado'; // Importa el componente BarraEstado

function App() {
  return (
    <div className="App">
      <Iphone /> {/* Usa el componente Iphone que ya incluye la BarraEstado */}
    </div>
  );
}

export default App;
