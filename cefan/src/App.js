import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/Welcome";
import IniciarSesion from "./Pages/IniciarSesion";
import Registrarse from "./Pages/Register";
import Home from "./Pages/Home"; // Importa el componente Home

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/home" element={<Home />} />{" "}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
