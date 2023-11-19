import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../Images/Logocircular.png"
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

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
            <li style={hoveredItem === 'inicio' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('inicio')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('inicio')} className="nav-link text-white" style={{border: 'none' }}>Inicio</p>
            </li>
              <li style={hoveredItem === 'Horas medicas' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Horas medicas')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Horas medicas')} className={"nav-link text-white"} style={{border: 'none' }}>Horas Disponibles</p>
              </li>
              <li style={hoveredItem === 'Mis horas' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Mis horas')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Mis horas')} className={"nav-link text-white"} style={{border: 'none' }}>Mis Horas</p>
              </li>
              <li style={hoveredItem === 'Seguimiento' ? { backgroundColor: '#1755A6', borderRadius: '10px' } : {}} onMouseEnter={() => setHoveredItem('Seguimiento')} onMouseLeave={() => setHoveredItem(null)}>
                <p onClick={() => handlePageChange('Seguimiento')} className={"nav-link text-white"} style={{border: 'none' }}>Seguimiento</p>
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
