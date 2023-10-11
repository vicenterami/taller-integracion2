import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import logo from "../Images/logo.png";
import img1 from "../Images/imagen1.jpg";
import img2 from "../Images/imagen2.jpg";

function Welcome() {
  const estiloBienvenida = {
    fontSize: "auto",
    color: "black",
    textAlign: "center",
  };
  const logoStyle = {
    width: '200px',
    heigth: '200px',
  };
  const logotext = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };
  const box = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '5px',
    color: 'black',
  };

  const botonbox = {
    border: '1px solid gray',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
  };
  return (
    <div style={{backgroundColor: 'white'}}>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Imagen 1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Imagen 2"/>
          </Carousel.Item>
        </Carousel>
        <div style={logotext}>
            <img src={logo} alt="Logo" style={{logoStyle}}/>
          <div>
            <h2 style={estiloBienvenida}>Bienvenido a Cefan</h2>
            <p style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla.</p>
          </div>
        </div>
        <div style={box}>
          <div style={botonbox}>
            <p>¿Tienes una cuenta?</p>
          <Link to="/iniciar-sesion">
            <button style={{borderRadius: '10px', border:'none'}}>Inicia Sesión</button>
          </Link>
          </div>
          <div style={botonbox}>
            <p>¿Deseas registrarte?</p>
          <Link to="/registrarse">
            <button style={{borderRadius: '10px', border:'none'}}>Registrarse</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
