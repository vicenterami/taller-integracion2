import React from 'react'
import { Carousel } from "react-bootstrap";
import logo from "../../Images/Logocircular.png";
import img1 from "../../Images/inicio1.png";
import img2 from "../../Images/inicio2.png";
import img3 from "../../Images/inicio3.png";


const Inicio = () => {

return (
  <div className="container">
    <header className="text-center mt-5">
      <h1>Bienvenido a Cefan!</h1>
    </header>

    <div className="row mt-5">
      <div>
        <Carousel>
        <Carousel.Item >
            <img className="d-block w-100" src={img1} alt="Imagen 1"/>
          </Carousel.Item>
          <Carousel.Item >
            <img className="d-block w-100" src={img2} alt="Imagen 1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Imagen 1"/>
          </Carousel.Item>
        </Carousel>
      </div> 
    </div> 

    <div>
        <footer className="footer mt-5 py-3 bg-dark text-white text-center">
          <img src={logo} alt="Logo" style={{ width: '100px' }} />
          <p className="mb-0">Cefan© 2023</p>
          <p className="mb-0">Email: cefan@consultas.cfn.cl | Teléfono: +123-456-7890</p>
        </footer>
      </div>  
  </div>
);
}

export default Inicio