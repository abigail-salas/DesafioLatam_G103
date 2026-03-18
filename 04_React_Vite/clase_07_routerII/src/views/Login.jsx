import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login exitoso con: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Iniciar Sesion</h2>
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

export default Login;
