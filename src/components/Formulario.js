// Formulario.js
import React, { useState } from 'react';

function Formulario({ mostrarTarjeta }) {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía los datos al componente padre (App.js) para mostrar la tarjeta
    mostrarTarjeta(datos);
  };

  return (
    <div className="container mx-auto my-4">
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={datos.apellido}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Edad:</label>
        <input
          type="text"
          name="edad"
          value={datos.edad}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Estado Civil:</label>
        <input
          type="text"
          name="estadocivil"
          value={datos.estadocivil}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo:</label>
        <input
          type="text"
          name="correo"
          value={datos.correo}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Crear Tarjeta</button>
    </form>
    </div>
  );
}

export default Formulario;
