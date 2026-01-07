import React, { useState } from "react";

function Tareas() {
  const arrayTareas = ["Estudiar", "Trabajar", "Cocinar", "Limpiar"];
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTarea, setListaTarea] = useState(arrayTareas);

  const colores = ["red", "green", "blue", "white", "black", "purple"];

  let mapeoColores = colores.map((t) => (
    <li key={t} style={{ color: t }}>
      {t}
    </li>
  ));

  function handleSubmit(e) {
    e.preventDefault();

    /* Agregamos una tarea */
    setListaTarea([...listaTarea, nombreTarea]);

    /* Limpiamos el input */
    setNombreTarea("");
  }

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  return (
    <div>
      <ol>{mapeoColores}</ol>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreTarea"
          value={nombreTarea}
          onChange={mostrarInput}
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>
        {listaTarea.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
