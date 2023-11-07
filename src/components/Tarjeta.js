function Tarjeta({ datos, volverAlFormulario }) {
    return (
      <div className="card tarjeta">
        <div className="card-body">
        <h1 className="display-1  text-center">Tarjeta de Presentación</h1>
        <br></br>
        <br></br>
        <p className="card-text display-6 text-center">Nombre: {datos.nombre}</p>
        <p className="card-text display-6 text-center">Apellido: {datos.apellido}</p>
        <p className="card-text display-6 text-center">Edad: {datos.edad}</p>
        <p className="card-text display-6 text-center">Edad: {datos.estadocivil}</p>
        <p className="card-text display-6 text-center">Correo: {datos.correo}</p>

        <br></br>
        <div className="d-flex justify-content-center">
          <button onClick={volverAlFormulario} className="btn btn-primary">Volver al Formulario</button>
          <br></br>
        </div>
        </div>
      </div>
    );
  }
  
  
export default Tarjeta;
