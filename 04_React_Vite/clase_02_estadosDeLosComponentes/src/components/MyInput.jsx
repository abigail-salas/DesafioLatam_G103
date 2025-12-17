import { useState } from "react";

function MyInput() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <p>Entrada: {nombre}</p>
    </div>
  );
}

export default MyInput;
