import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registro exitoso con: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={passsword}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Register;
