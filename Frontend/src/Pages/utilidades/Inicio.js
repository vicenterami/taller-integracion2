import React from 'react'
import { Carousel } from "react-bootstrap";
import img1 from "../../Images/inicio1.jpg";
import img2 from "../../Images/inicio2.jpg";
import img3 from "../../Images/inicio3.jpg";

const Inicio = () => {

return (
  <div className="container">
    <header className="text-center mt-5">
      <h1>Bienvenido a Cefan!</h1>
    </header>

    <div className="row mt-5">
      <div className="col-md-6">
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
        <div className='row'>
        <h2 className='text-center' style={{backgroundColor: '#0765FB', borderRadius: '5px'}}>Sobre nosotros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nulla enim. Ut erat dui, tincidunt vel varius nec, blandit nec est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu congue velit. Praesent sit amet lobortis neque, et laoreet dolor. Quisque accumsan porta dui mattis imperdiet. Quisque dapibus hendrerit purus, in consequat urna fringilla id. Pellentesque vehicula metus enim, in lacinia risus porttitor viverra.</p>
        </div>

        
      </div>
    </div>

    
  </div>
);
}

export default Inicio