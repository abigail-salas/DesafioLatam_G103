import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Clickeaste ${count} ${name} veces`;
  }, [count]);

  return (
    <div className="card">
      <h2>Ejemplo useEffect</h2>

      <p className="counter-text">Clickeaste {count} veces</p>

      <button onClick={() => setCount(count + 1)}>Click</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Example;
