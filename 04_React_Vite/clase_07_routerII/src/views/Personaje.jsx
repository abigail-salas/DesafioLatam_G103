import React from "react";
import { useParams } from "react-router-dom";

function Personaje() {
  const { id } = useParams();

  return <div>Personaje {id}</div>;
}

export default Personaje;
