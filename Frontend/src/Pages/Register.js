import React from "react";

function Register() {
  return (
    <div>
      <div>
        
      </div>

      <div>
        <h2>Registro</h2>
        <form>
        <div>
          <label> Nombre y apellido</label>
          <input type="text" placeholder="Ej: Juan Perez"></input>
        </div>
        <div>
          <label>Rut</label>
          <input type="" placeholder="1.111.111-1"></input>
        </div>
        <div>
          <label>Correo electrónico</label>
          <input type="email" placeholder="nombre@ejemplo.com"></input>
        </div>
        <div>
          <label>Telefono</label>
          <input type="" placeholder="9-12345678"></input>
        </div>
        <div>
          <label>Contraseña</label>
          <input type="" placeholder=""></input>
        </div>
        <div>
          <label>Confirmar contraseña</label>
          <input type="" placeholder=""></input>
        </div>
        <button type="submit"> Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;