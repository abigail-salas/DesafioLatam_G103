import React, { useState } from "react";

function FormError() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || edad === "" || email === "") {
      setError(true);
      return;
    }

    setError(false);
    setNombre("");
    setApellido("");
    setEdad("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Apellido:
            <input
              type="text"
              name="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Edad:
            <input
              type="text"
              name="Edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <h1>Datos Ingresados:</h1>
      {nombre} - {apellido} - {edad} - {email}
    </div>
  );
}

export default FormError;
