import React from "react";
import Banner from "./Banner";

let nombre = "Desafio Latam";

function Titulo() {
  return (
    <div>
      <h3>Soy el componente Titulo</h3>

      <Banner />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum
        repudiandae minima nihil eos cumque magni, mollitia fugiat sed ab earum
        accusamus rem deserunt accusantium debitis aut, ex enim perspiciatis.
      </p>

      {/* Utilizando variables dentro de los tags */}
      <h5>La web es de: {nombre}</h5>
    </div>
  );
}

export default Titulo;
