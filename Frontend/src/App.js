// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/Welcome";
import IniciarSesion from "./Pages/IniciarSesion";
import Registrarse from "./Pages/Register";
import Home from "./Pages/Home"; // Importa el componente Home
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
import HomeAdm from "./Pages/HomeAdm"; 
import HomeDoc from "./Pages/HomeDoc"; 
>>>>>>> Stashed changes
import Perfil from "./Pages/Perfil";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservar from "./Pages/Reservar";
import UsuarioAdministrador from "./Pages/UsuarioAdministrador"; 
import UsuarioDoctor from "./Pages/UsuarioDoctor"; 
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/IniciarSesion" element={<IniciarSesion />} />
            <Route path="/registrarse" element={<Registrarse />} />
<<<<<<< Updated upstream
            <Route path="/home" element={<Home />} />
=======
<<<<<<< Updated upstream
            <Route path="/home" element={<Home />} />{" "}
=======
            <Route path="/home" element={<Home />} />
            <Route path="/homeAdm" element={<HomeAdm />} />
            <Route path="/homeDoc" element={<HomeDoc />} />
>>>>>>> Stashed changes
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="/UsuarioDoctor" element={<UsuarioDoctor />} />
            <Route path="/UsuarioAdministrador" element={<UsuarioAdministrador />} />
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
