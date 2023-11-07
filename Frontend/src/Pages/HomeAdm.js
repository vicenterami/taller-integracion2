import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

import UsuarioAdministrador from "./UsuarioAdministrador"

function HomeAdm() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [selectedPage, setSelectedPage] = useState('Adm');

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
    <div>
      <div>
        <header className="navbar navbar-dark bg-primary">
          <h1 style={{ padding: "10px" }}>Cefan</h1>

          <nav className="nav nav-tabs" id="nav-tab" role="tablist">
            <ul className="nav justify-content-end">
              <li className={`nav-item ${selectedPage === 'Adm' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Adm')} className={`nav-link ${selectedPage === 'Adm' ? 'text-white' : 'text-black'}`}>Adm</p>
              </li>
              <li className={`nav-item ${selectedPage === 'doctores' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('doctores')} className={`nav-link ${selectedPage === 'doctores' ? 'text-white' : 'text-black'}`}>doctores</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Crear horas' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Crear horas')} className={`nav-link ${selectedPage === 'Crear horas' ? 'text-white' : 'text-black'}`}>Crear horas</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Seguimientos' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Seguimientos')} className={`nav-link ${selectedPage === 'Seguimientos' ? 'text-white' : 'text-black'}`}>Seguimientos</p>
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

      <div class="tab-content" id="nav-tabContent" style={{ margin: "20px", fontSize: "80%" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'Adm' && <div></div>}
        {selectedPage === 'doctores' && <div></div>}
        {selectedPage === 'Crear horas' && <div><UsuarioAdministrador/></div>}
        {selectedPage === 'Seguimientos' && <div></div>}
      
      </div>
    </div>
  );
}

export default HomeAdm;
