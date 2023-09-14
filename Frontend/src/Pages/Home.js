import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [userData, setUserData] = useState(""); // Estado para almacenar los datos del usuario

  useEffect(() => {
    axios
      .get(`http://192.168.4.22:3000/api/User/Aa`)
      .then((response) => {
        // Almacena los datos del usuario en el estado
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
