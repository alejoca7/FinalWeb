import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tarjeta from './components/Tarjeta';

function App() {
  const [datos, setDatos] = useState(null);

  const mostrarTarjeta = (nuevosDatos) => {
    setDatos(nuevosDatos);
  };

  const volverAlFormulario = () => {
    setDatos(null); // Restablece los datos para generar una nueva tarjeta
  };

  return (
    <div className="container">
      {datos ? (
        <Tarjeta datos={datos} volverAlFormulario={volverAlFormulario} />
      ) : (
        <>
          <h1 className="display-4 text-center">App de Tarjeta de Presentación</h1>
          <Formulario mostrarTarjeta={mostrarTarjeta} />
        </>
      )}
    </div>
  );
}

export default App;