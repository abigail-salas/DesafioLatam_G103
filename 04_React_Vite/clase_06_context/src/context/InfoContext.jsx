import { createContext, useState } from "react";

/* CREAMOS EL CONTEXTO */
export const infoContext = createContext();

/* PROVEEMOS EL CONTEXTO */

const infoMasculino = ["Carlos", "Fernando", "Jose", "Marcos", "Ignacio"];
const infoFemenino = ["Bianca", "Catalina", "Sofia", "Maria", "Gabriela"];

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState(infoFemenino);

  const toggleInfo = () => {
    setInfo((cambio) =>
      cambio === infoFemenino ? infoMasculino : infoFemenino,
    );
  };

  return (
    <infoContext.Provider value={{ info, toggleInfo }}>
      {children}
    </infoContext.Provider>
  );
};

export default InfoProvider;
