import { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <button onClick={() => setCuenta((count) => count + 1)}>
        Cuenta: {cuenta}
      </button>
    </div>
  );
}

export default Contador;
