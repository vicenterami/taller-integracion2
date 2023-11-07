// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/Welcome";
import IniciarSesion from "./Pages/IniciarSesion";
import Registrarse from "./Pages/Register";

import Home from "./Pages/Home"; // Importa el componente Home
import HomeAdm from "./Pages/HomeAdm"; 
import HomeDoc from "./Pages/HomeDoc"; 

import Perfil from "./Pages/Perfil";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservar from "./Pages/Reservar";
import UsuarioAdministrador from "./Pages/UsuarioAdministrador"; 
import UsuarioDoctor from "./Pages/UsuarioDoctor"; 


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/IniciarSesion" element={<IniciarSesion />} />
            <Route path="/registrarse" element={<Registrarse />} />

            <Route path="/home" element={<Home />} />
            <Route path="/homeAdm" element={<HomeAdm />} />
            <Route path="/homeDoc" element={<HomeDoc />} />

            <Route path="/perfil" element={<Perfil />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="/UsuarioDoctor" element={<UsuarioDoctor />} />
            <Route path="/UsuarioAdministrador" element={<UsuarioAdministrador />} />

          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
