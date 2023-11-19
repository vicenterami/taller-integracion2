import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../Images/Logocircular.png"
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import UsuarioDoctor from "./utilidades/Evolucionmed";
import Crearhoras from "./utilidades/Crearhoras";

function HomeDoc() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [selectedPage, setSelectedPage] = useState("Doctor");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  const handleIrAPerfil = () => {
    navigate("/perfil");
  };
  //logout
  const handleLogout = () => {
    localStorage.removeItem(userData);
    navigate("/");
  };
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div>
      <div>
      <header className="navbar navbar-dark bg-primary">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo de Cefan" style={{ height: '60px', margin: '10px', marginLeft: '40px' }} />
            <h1 style={{ color: 'white', margin: 0 }}>Cefan</h1>
          </div>
          <nav className="nav nav-tabs" id="nav-tab" role="tablist" style={{ borderBottom: 'none' }}>
            <ul className="nav justify-content-end">
            <li style={hoveredItem === 'seguimiento' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('seguimiento')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('seguimiento')} className="nav-link text-white" style={{border: 'none' }}>seguimiento</p>
            </li>
              <li style={hoveredItem === 'Crear horas' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Crear horas')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Crear horas')} className={"nav-link text-white"} style={{border: 'none' }}>Crear hora</p>
              </li>
              <li style={hoveredItem === 'Pacientes' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Pacientes')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Pacientes')} className={"nav-link text-white"} style={{border: 'none' }}>Pacientes</p>
              </li>
              <li className="nav-item d-flex align-items-center">
                <FaUserCircle onClick={handleIrAPerfil} style={{ fontSize: '40px', marginRight: '20px' }}/>
              </li>
              <li className="nav-item d-flex align-items-center">
                <IoIosLogOut onClick={handleLogout} style={{ fontSize: '40px' }}/>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div class="tab-content" id="nav-tabContent" style={{ fontSize: "80%" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === "seguimiento" && (<div><UsuarioDoctor /></div>)}
        {selectedPage === "Crear horas" && <div> <Crearhoras/></div>}
        {selectedPage === "Pacientes" && <div></div>}
      </div>
    </div>
  );
}

export default HomeDoc;
