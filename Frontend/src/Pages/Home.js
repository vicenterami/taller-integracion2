import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Citas from "./utilidades/Citas"
import Seguimiento from "./utilidades/Seguimiento"

function Home() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [selectedPage, setSelectedPage] = useState('inicio');
  const [data, setData] = useState("");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  const handleIrAPerfil = () => {
    // Cambia la ruta a "/perfil" cuando se hace clic en el botón
    navigate("/perfil");
  };
  const handleIrReservar = () => {
    // Cambia la ruta a "/perfil" cuando se hace clic en el botón
    navigate("/reservar");
  };

      //logout
  const handleLogout = () => {
    localStorage.removeItem( userData);
    navigate("/IniciarSesion");
  };

  useEffect(() => {
    
    // Realizas una solicitud a la API para obtener datos del usuario
    axios.get(`http://45.236.129.38:3000/api/User/${userData.rut}`)
      .then((response) => {
        // Almacena los datos del usuario en el estado
        setData(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // El array de dependencias está vacío, por lo que se ejecuta solo una vez al montar el componente

  return (
    <>
      <div className="container mt-5" style={{ width: '100%', backgroundColor: '#007bff', color: 'white' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          <h1>Cefam</h1>
          <h1>|||</h1>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
              <li><a onClick={() => handlePageChange('inicio')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Inicio</a></li>
              <li><a onClick={() => handlePageChange('Horas medicas')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Horas Medicas</a></li>
              <li><a onClick={() => handlePageChange('Medicamentos')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Medicamentos</a></li>
              <li><a onClick={() => handlePageChange('Evolucion medica')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Evolucion medica</a></li>
              <li><button onClick={handleLogout} className="btn btn-danger btn-lg fs-4">Cerrar Sesión</button></li>
            </ul>
          </nav>
        </header>
      </div>
      <button onClick={handleIrAPerfil}>
      Ir a Perfil
    </button>
    <button onClick={handleIrReservar}>
      Ir a reservar
    </button>
      <div id="contenidoHome" style={{ margin: "20px", fontSize: "18px" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'inicio' && 
        <div>
          {data ? (
          <p>
            Nombre: {data.nombre}, rut: {data.rut}, correo:{" "}
            {data.correo}, telefono: {data.telefono}
          </p>
        ) : (
          <p>Cargando...</p>
        )}
        <h2>Bienvenido a la Página de Usuario</h2>
        <p>Este es el contenido principal de tu aplicación.</p></div>}
        {selectedPage === 'Horas medicas' && 
          <div>
            <p>Contenido de Horas medicas</p>
            <Citas/>
          </div>
        }
        {selectedPage === 'Medicamentos' && <p>Contenido de Medicamentos</p>}
        {selectedPage === 'Evolucion medica' && 
        <p>
          Contenido de Evolucion medica
          <Seguimiento/>
        </p>}
      
      </div>
    </>
  );
}

export default Home;
