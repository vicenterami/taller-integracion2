import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

function Home() {
  const [userData, setUserData] = useState(""); // Estado para almacenar los datos del usuario
  const location = useLocation();
  const rut = location.state.rut;
  ////
  const [selectedPage, setSelectedPage] = useState('inicio');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  /////
  useEffect(() => {
    axios
      .get(`http://45.236.129.38:3000/api/User/${rut}`)
      .then((response) => {
        // Almacena los datos del usuario en el estado
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [rut]);

  return (
    <><div className="container mt-5" style={{ width: '100%', backgroundColor: '#007bff', color: 'white' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
        <h1>Cefam</h1>
        <h1>|||</h1>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li><a  onClick={() => handlePageChange('inicio')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Inicio</a></li>
            <li><a  onClick={() => handlePageChange('Horas medicas')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Horas Medicas</a></li>
            <li><a  onClick={() => handlePageChange('Medicamentos')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Medicamentos</a></li>
            <li><a  onClick={() => handlePageChange('Evolucion medica')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Evolucion medica</a></li>
          </ul>
        </nav>
      </header>

    </div>
    <div id="contenidoHome" margin="20px" font-size="18px">

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


        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'inicio' && <p>Contenido de Inicio</p>}
        {selectedPage === 'Horas medicas' && <p>Contenido de Horas medicas</p>}
        {selectedPage === 'Medicamentos' && <p>Contenido de Medicamentos</p>}
        {selectedPage === 'Evolucion medica' && <p>Contenido de Evolucion medica</p>}
        
      </div></>
  );
}

export default Home;
