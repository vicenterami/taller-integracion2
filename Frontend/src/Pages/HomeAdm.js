import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/Logocircular.png"
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import Crearhoras from "./utilidades/Crearhoras";
import Listadoc from "./utilidades/Listadoc";
import Creardoc from "./utilidades/Creardoctor";

function HomeAdm() {
  const navigate = useNavigate();
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
    localStorage.removeItem("userData");
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
            <li style={hoveredItem === 'Crear Doctor' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Crear Doctor')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Crear Doctor')} className="nav-link text-white" style={{border: 'none' }}>Crear Doctor</p>
            </li>
              <li style={hoveredItem === 'Doctores' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Doctores')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Doctores')} className={"nav-link text-white"} style={{border: 'none' }}>Doctores</p>
              </li>
              <li style={hoveredItem === 'Horas' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Horas')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Horas')} className={"nav-link text-white"} style={{border: 'none' }}>Crear Horas</p>
              </li>
              <li className="nav-item d-flex align-items-center">
                <FaUserCircle onClick={handleIrAPerfil} style={{ fontSize: '40px', marginRight: '20px' }}/>
              </li>
              <li className="nav-item d-flex align-items-center">
                <IoIosLogOut onClick={handleLogout} style={{ fontSize: '40px',  marginRight: '20px'}}/>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div class="tab-content" id="nav-tabContent" style={{ margin: "20px", fontSize: "80%" }}>
        {/* Mostrar contenido según la página seleccionada */}
        {selectedPage === 'Crear Doctor' && <div><Creardoc/></div>}
        {selectedPage === 'Doctores' && <div><Listadoc/></div>}
        {selectedPage === 'Horas' && <div> <Crearhoras/></div>}
      
      </div>
    </div>
  );
}

export default HomeAdm;