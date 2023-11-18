import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import logo from "../Images/Logocircular.png";
import img1 from "../Images/imagen1.jpg";
import img2 from "../Images/imagen2.jpg";

function Welcome() {
  const estiloBienvenida = {
    fontSize: "auto",
    color: "white",
    textAlign: "center",
  };
  const logoStyle = {
    width: '200px',
    heigth: '200px',
  };
  const logotext = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  };
  const boton = {
    backgroundColor: '#2050e0',
    borderRadius: '10px',
    border:'none',
    color: 'white',
    margin: '5px',
    padding: '5px 10px', 
  };
  const botonPequeno ={
    ...boton,
    padding: '5px 10px',
    fontSize: '0.8em',
  };
  const carouselIMG = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  };
  const overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  };
  return (
    
    <div style={{ position: 'relative' }}>
      <Carousel>
        <Carousel.Item>
          <img style={carouselIMG} className="d-block w-100" src={img1} alt="Imagen 1"/>
        </Carousel.Item>
        <Carousel.Item>
          <img style={carouselIMG} className="d-block w-100" src={img2} alt="Imagen 2"/>
        </Carousel.Item>
      </Carousel>
      <div style={overlay}></div>
      <div style={logotext}>
        <img src={logo} alt="Logo" style={{logoStyle}}/>
        <h2 style={{...estiloBienvenida, marginTop: '20px'}}>Bienvenido a Cefan</h2>
        <p style={estiloBienvenida}>Un lugar donde nos preocupamos de tu salud.</p>
        <Link to="/IniciarSesion">
        <button style={boton}>Iniciar Sesión</button>
        </Link>
        <p style={{...estiloBienvenida, margin:'0'}}>o</p>
        <Link to="/registrarse">
        <button style={botonPequeno}>Registrarse</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
