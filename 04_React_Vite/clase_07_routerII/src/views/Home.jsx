import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h3>HOME</h3>

      <input
        type="text"
        value={id}
        placeholder="Buscar Personaje"
        onChange={({ target }) => setId(target.value)}
      />

      <button onClick={() => navigate(`/personaje/${id}`)}>Buscar</button>
    </div>
  );
}

export default Home;
