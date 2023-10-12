import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Citas from "./utilidades/Citas"
import Seguimiento from "./utilidades/Seguimiento";
import Inicio from "./utilidades/Inicio";
import Medicamento from "./utilidades/Medicamento";

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
    //logout
  const handleLogout = () => {
    localStorage.removeItem( userData);
    navigate("/");
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
          <button onClick={handleIrAPerfil}>Perfil</button>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
              <li><a onClick={() => handlePageChange('inicio')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Inicio</a></li>
              <li><a onClick={() => handlePageChange('Horas medicas')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Horas Medicas</a></li>
              <li><a onClick={() => handlePageChange('Medicamentos')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Medicamentos</a></li>
              <li><a onClick={() => handlePageChange('Seguimiento')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Seguimiento</a></li>
              <li><button onClick={handleLogout} className="btn btn-danger btn-lg fs-4">Cerrar Sesión</button></li>
            </ul>
          </nav>
        </header>
      </div>

      <div id="contenidoHome" style={{ margin: "20px", fontSize: "18px" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'inicio' && <div><Inicio/></div>}
        {selectedPage === 'Horas medicas' && <div><Citas/></div>}
        {selectedPage === 'Medicamentos' && <div><Medicamento/></div>}
        {selectedPage === 'Seguimiento' && <div><Seguimiento/></div>}
      
      </div>
    </>
  );
}

export default Home;
