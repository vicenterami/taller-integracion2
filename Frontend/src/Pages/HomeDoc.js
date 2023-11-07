import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function HomeDoc() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [selectedPage, setSelectedPage] = useState('Doctor');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  const handleIrAPerfil = () => {
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
              <li className={`nav-item ${selectedPage === 'Doctor' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Doctor')} className={`nav-link ${selectedPage === 'Doctor' ? 'text-white' : 'text-black'}`}>Doctor</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Horario' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Horario')} className={`nav-link ${selectedPage === 'Horario' ? 'text-white' : 'text-black'}`}>Horario</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Crear horas' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Crear horas')} className={`nav-link ${selectedPage === 'Crear horas' ? 'text-white' : 'text-black'}`}>Crear horas</p>
              </li>
              <li className={`nav-item ${selectedPage === 'Pacientes' ? 'active' : ''}`}>
                <p onClick={() => handlePageChange('Pacientes')} className={`nav-link ${selectedPage === 'Pacientes' ? 'text-white' : 'text-black'}`}>Pacientes</p>
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
        {selectedPage === 'Doctor' && <div></div>}
        {selectedPage === 'Horario' && <div></div>}
        {selectedPage === 'Crear horas' && <div></div>}
        {selectedPage === 'Pacientes' && <div></div>}
      
      </div>
    </div>
  );
}

export default HomeDoc;
