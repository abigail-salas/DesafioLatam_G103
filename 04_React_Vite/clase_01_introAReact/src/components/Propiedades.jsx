import React from "react";

function Propiedades({ title, price, data }) {
  /* Ejemplo de DESESTRUCTURE */

  //   let usuario = { id: 3, nombre: "Javier", apellido: "Avedaño", pais: "Chile" };
  //   console.log(usuario.nombre, "<----- info del usuario");

  //   let { id, apellido } = usuario;
  //   console.log(id, "<---- id con desestructure");
  //   console.log(apellido, "<---- apellido con desestructure");

  return (
    <div className="cards-props">
      <h2>Titulo: {title}</h2>
      <h4>Precio: {price}</h4>
      <p>Descripcion: {data}</p>
    </div>
  );
}

/* function Propiedades(props) {
  return (
    <div className="cards-props">
      <h2>Titulo: {props.title}</h2>
      <h4>Precio: {props.price}</h4>
      <p>Descripcion: {props.data}</p>
    </div>
  );
} */

export default Propiedades;
