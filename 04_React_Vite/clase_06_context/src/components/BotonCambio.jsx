import React, { useContext } from "react";
import { infoContext } from "../context/InfoContext";

function BotonCambio() {
  const { toggleInfo } = useContext(infoContext);

  return (
    <div>
      
      <button onClick={toggleInfo}>CAMBIO</button>
    </div>
  );
}

export default BotonCambio;
