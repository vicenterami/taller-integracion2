import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

function IniciarSesion({ navigation }) {
  const navigate = useNavigate();
  const [rut, setRut] = useState("");
  const [contrasena, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://192.168.1.12:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rut, contrasena }),
      });

      if (response.status === 200) {
        const data = await response.json(); // Parsea la respuesta JSON
        const rutUsuario = data.rut;
        navigate("/home", { state: { rut: rutUsuario } });
        console.log(data);
      } else {
        console.error("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };
  return (
    <div>
      <div className="bg-primary" style={{ width: "100%" }}>
        {/* Aquí va el nabvar    */}
      </div>

      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center ">
        <div
          className=" bg-primary position-absolute "
          style={{
            minWidth: "59%",
            minHeight: "62%",
            marginBottom: "3%",
            marginLeft: "2.6%",
            WebkitBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            MozBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
          }}
        ></div>
        <div
          className=" bg-primary position-absolute "
          style={{
            minWidth: "59%",
            minHeight: "62%",
            marginTop: "3%",
            marginRight: "2.6%",
            WebkitBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            MozBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
          }}
        ></div>
        <div
          className="bg-primary border p-5 position-absolute"
          style={{
            WebkitBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            MozBoxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
            boxShadow: "0px 0px 35px -10px rgba(0,0,0,1)",
          }}
        >
          <div className="row  ">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center position-relative">
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
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="rut" className="form-label fs-4">
                    Rut
                  </label>
                  <input
                    type="rut"
                    className="form-control form-control-lg p-3"
                    id="rut"
                    placeholder="12123123-1"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contrasena" className="form-label fs-4">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg p-3"
                    id="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setPassword(e.target.value)}
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
