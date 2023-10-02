import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

function Home() {
  const [userData, setUserData] = useState(""); // Estado para almacenar los datos del usuario
  const location = useLocation();
  const rut = location.state.rut;
  const [selectedPage, setSelectedPage] = useState('inicio');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="Home" 
    list-style= "none"
    padding= "0"
    display="flex"
    justify-content= "center">
      <header>
        <nav>
          <ul id="Home">
            <li margin-right= "20px">
              <button background-color= "transparent" border= "none" color= "#fff" font-size= "16px" cursor= "pointer" padding= "10px 20px" transition= "background-color 0.3s ease" 
              onClick={() => handlePageChange('inicio')}>Inicio</button>
            </li>
            <li margin-right= "20px">
              <button background-color= "transparent" border= "none" color= "#fff" font-size= "16px" cursor= "pointer" padding= "10px 20px" transition= "background-color 0.3s ease"
              onClick={() => handlePageChange('Horas medicas')}>Horas medicas</button>
            </li>
            <li margin-right= "20px">
              <button background-color= "transparent" border= "none" color= "#fff" font-size= "16px" cursor= "pointer" padding= "10px 20px" transition= "background-color 0.3s ease"
              onClick={() => handlePageChange('Medicamentos')}>Medicamentos</button>
            </li>
            <li margin-right= "20px">
              <button background-color= "transparent" border= "none" color= "#fff" font-size= "16px" cursor= "pointer" padding= "10px 20px" transition= "background-color 0.3s ease"
              onClick={() => handlePageChange('Evolucion medica')}>Evolucion medica</button>
            </li>
          </ul>
        </nav>
      </header>

      <div id="contenidoHome" margin="20px" font-size="18px">
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'inicio' && <p>Contenido de Inicio</p>}
        {selectedPage === 'Horas medicas' && <p>Contenido de Horas medicas</p>}
        {selectedPage === 'Medicamentos' && <p>Contenido de Medicamentos</p>}
        {selectedPage === 'Evolucion medica' && <p>Contenido de Evolucion medica</p>}
      </div>
    </div>
  );

  useEffect(() => {
    axios
      .get(`http://192.168.1.12:3000/api/User/${rut}`)
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
