import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

function Home() {
  const [userData, setUserData] = useState(""); // Estado para almacenar los datos del usuario
  const location = useLocation();
  const rut = location.state.rut;

  useEffect(() => {
    axios
      .get(`http://192.168.4.22:3000/api/User/${rut}`)
      .then((response) => {
        // Almacena los datos del usuario en el estado
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [rut]);

  return (
    <div className="container mt-5">
      {userData ? (
        <p>
          Nombre: {userData.nombre}, rut: {userData.rut}, correo:{" "}
          {userData.correo}, telefono: {userData.telefono}
        </p>
      ) : (
        <p>Cargando...</p>
      )}
      <h2>Bienvenido a la Página de Usuario</h2>
      <p>Este es el contenido principal de tu aplicación.</p>
    </div>
  );
}

export default Home;
