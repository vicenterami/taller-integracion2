import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

import Citas from "./utilidades/Citas"
import Seguimiento from "./utilidades/Seguimiento";
import Inicio from "./utilidades/Inicio";
import MisHoras from "./utilidades/Mishoras";

function Home() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [selectedPage, setSelectedPage] = useState('inicio');

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


  return (
    <>
      <div>
        <header className="navbar navbar-dark bg-primary">
          <h1 style={{ padding:"10px" }}>Cefam</h1>
          
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', padding: "10px"}}>
              
              <li><p onClick={() => handlePageChange('inicio')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Inicio</p></li>
              <li><p onClick={() => handlePageChange('Horas medicas')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Horas Disponibles</p></li>
              <li><p onClick={() => handlePageChange('Mis horas')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Mis Horas</p></li>
              <li><p onClick={() => handlePageChange('Seguimiento')} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Seguimiento</p></li>
              <li><button onClick={handleIrAPerfil} className="btn btn-secondary btn-lg fs-4" >Ir a Perfil</button></li>
              <li><button onClick={handleLogout} className="btn btn-danger btn-lg fs-4">Cerrar Sesión</button></li>
            </ul>
          </nav>
        </header>
      </div>

      <div id="contenidoHome" style={{ margin: "20px", fontSize: "18px" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'inicio' && <div><Inicio/></div>}
        {selectedPage === 'Horas medicas' && <div><Citas/></div>}
        {selectedPage === 'Mis horas' && <div><MisHoras/></div>}
        {selectedPage === 'Seguimiento' && <div><Seguimiento/></div>}
      
      </div>
    </>
  );
}

export default Home;
