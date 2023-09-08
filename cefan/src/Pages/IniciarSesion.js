import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function IniciarSesion() {
  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            placeholder="nombre@ejemplo.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contraseña"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="recordarme" />
          <label className="form-check-label" htmlFor="recordarme">
            Recordarme
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default IniciarSesion;
