import React, { useContext } from "react";
import { infoContext } from "../context/InfoContext";
import BotonCambio from "./BotonCambio";

function Component1() {
  const { info } = useContext(infoContext);

  return (
    <div>
      Component1
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        nulla.
      </p>
      <h4>{info.join(", ")} </h4>
      <BotonCambio />
    </div>
  );
}

export default Component1;
