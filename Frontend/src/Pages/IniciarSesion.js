import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "../Images/logo.png";

function IniciarSesion() {
  return (
    <div>
      <div className="bg-info" style={{ width: "100%" }}>
        {/* Aquí va el nabvar */}
      </div>

      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div
          className="bg-info p-5"
          style={{
            borderRadius: "20px",
            WebkitBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            MozBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
          }}
        >
          <div className="row">
            <div className="col-lg-6   d-flex flex-column justify-content-center align-items-center position-relative">
              <div>
                <img
                  src={logo}
                  className="img-thumbnail"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    WebkitBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
                    MozBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
                    boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
                  }}
                  alt="Logo Cefan"
                />
              </div>
            </div>
            <div className="col-lg-6  d-flex flex-column justify-content-center align-items-center position-relative">
              <h2 className="display-4">Iniciar Sesión</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="correo" className="form-label fs-4">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg p-3"
                    id="correo"
                    placeholder="nombre@ejemplo.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contraseña" className="form-label fs-4">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg p-3"
                    id="contraseña"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="recordarme"
                  />
                  <label className="form-check-label fs-4" htmlFor="recordarme">
                    Recordarme
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg fs-4">
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;
