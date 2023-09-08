import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const estiloBienvenida = {
    fontSize: "24px",
    color: "#0000FF",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={estiloBienvenida}>Bienvenido a nuestro proyecto</h1>
      <Link to="/iniciar-sesion">
        <button>Iniciar Sesión</button>
      </Link>
      <Link to="/registrarse">
        <button>Registrarse</button>
      </Link>
    </div>
  );
}

export default Welcome;
