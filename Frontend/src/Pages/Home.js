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
    localStorage.removeItem("userData");
    navigate("/");
  };


  return (
    <div>
      <div>
        <header className="navbar navbar-dark bg-primary">
          <h1 style={{ padding: "10px" }}>Cefan</h1>

          <nav className="nav nav-tabs" id="nav-tab" role="tablist">
            <ul className="nav justify-content-end">
              <li className={`nav-item ${selectedPage === 'inicio' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('inicio')} className={`nav-link ${selectedPage === 'inicio' ? 'text-white' : 'text-black'}`}>Inicio</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Horas medicas' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Horas medicas')} className={`nav-link ${selectedPage === 'Horas medicas' ? 'text-white' : 'text-black'}`}>Horas Disponibles</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Mis horas' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Mis horas')} className={`nav-link ${selectedPage === 'Mis horas' ? 'text-white' : 'text-black'}`}>Mis Horas</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Seguimiento' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Seguimiento')} className={`nav-link ${selectedPage === 'Seguimiento' ? 'text-white' : 'text-black'}`}>Seguimiento</p>
              </li>
              <li className="nav-item">
                <button onClick={handleIrAPerfil} className="btn btn-secondary btn-lg fs-4">Ir a Perfil</button>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-danger btn-lg fs-4">Cerrar Sesión</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="tab-content" id="nav-tabContent" style={{ margin: "20px", fontSize: "80%" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'inicio' && <div><Inicio/></div>}
        {selectedPage === 'Horas medicas' && <div><Citas/></div>}
        {selectedPage === 'Mis horas' && <div><MisHoras/></div>}
        {selectedPage === 'Seguimiento' && <div><Seguimiento/></div>}
      
      </div>
    </div>
  );
}

export default Home;
