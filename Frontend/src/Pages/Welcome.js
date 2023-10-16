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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '12px',
  };
  const box = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '5px',
    color: 'white',
  };

  const botonbox = {
    border: '1px solid black',
    backgroundColor: '',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '10px 10px 5px black',
  };
  const boton = {
    backgroundColor: '#2050e0',
    borderRadius: '10px',
    border:'none',
    color: 'white',
  };
  
  const carouselIMG = {
    width: '100%',
    maxHeight: '400px'
  };
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item style={carouselIMG}>
            <img className="d-block w-100" src={img1} alt="Imagen 1"/>
          </Carousel.Item>
          <Carousel.Item style={carouselIMG}>
            <img className="d-block w-100" src={img2} alt="Imagen 2"/>
          </Carousel.Item>
        </Carousel>
        <div style={logotext}>
            <img src={logo} alt="Logo" style={{logoStyle}}/>
          <div>
            <h2 style={estiloBienvenida}>Bienvenido a Cefan</h2>
            <p style={estiloBienvenida}>Un lugar donde nos preocupamos de tu salud.</p>
            <div style={box}>
              <div style={botonbox}>
                <p>¿Tienes una cuenta?</p>
                <Link to="/IniciarSesion">
                  <button style={boton}>Inicia Sesión</button>
                </Link>
              </div>
              <div style={botonbox}>
                <p>¿Primera vez en CeFan?</p>
                <Link to="/registrarse">
                  <button style={boton}>Registrate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
