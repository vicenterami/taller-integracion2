import React from 'react'
import { Carousel } from "react-bootstrap";
import img1 from "../../Images/inicio1.jpg";
import img2 from "../../Images/inicio2.jpg";
import img3 from "../../Images/inicio3.jpg";

const Inicio = () => {

return (
    <div className="container">
    <header className="text-center mt-5">
      <h1>Bienvenido a Cefam!</h1>
    </header>

    <div className="row mt-5">
      <div className="col-md-6">
        <h2 className='text-center'>Nuestros servicios</h2>
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
      <div className="col-md-6">
        <h2>Sobre nosotros</h2>
        <ul>
          <li>solicitar horas</li>
          <li>consultar con su doctor</li>
          <li>seguimiento de sus medicamentos</li>
        </ul>
      </div>
    </div>

    
    <div className="row mt-5">
      <div className="col-md-12">
        <h2>Contacto</h2>
        <p>Ponte en contacto con nosotros:</p>
        <p>Email: cefam@consultas.cfn.cl</p>
        <p>Teléfono: +123-456-7890</p>
      </div>
    </div>
  </div>
);
}

export default Inicio