import React, { useEffect, useState } from "react";

function ConsumoApi() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    consultaDeAPI();
  }, []);

  const consultaDeAPI = async () => {
    const url = "https://randomuser.me/api";
    const response = await fetch(url);
    const data = await response.json();
    const random = data.results[0];
    setInfo(`${random.name.title} ${random.name.first} ${random.name.last}`);
  };

  return (
    <div className="card">
      <h2>Consumo de API</h2>
      <p className="api-result">{info}</p>
      <button onClick={consultaDeAPI}>Nuevo usuario</button>
    </div>
  );
}

export default ConsumoApi;
