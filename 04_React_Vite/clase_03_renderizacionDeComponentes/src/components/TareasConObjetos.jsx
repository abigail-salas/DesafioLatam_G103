import React, { useState } from "react";
import { tareasConObjetos } from "../utils/TareasIniciales";

function TareasConObjetos() {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTarea, setListaTarea] = useState(tareasConObjetos);
  const [idTarea, setIdTarea] = useState(
    tareasConObjetos[tareasConObjetos.length - 1].id
  );

  function handleSubmit(e) {
    e.preventDefault();

    const nuevoId = idTarea + 1;

    setListaTarea([
      ...listaTarea,
      { id: nuevoId, nombre: nombreTarea, completada: false },
    ]);

    setIdTarea(nuevoId);

    setNombreTarea("");
  }

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  function completarTarea(tarea) {
    const nuevasTareas = [...listaTarea];
    let encontrado = nuevasTareas.findIndex((obj) => obj.id === tarea.id);
    nuevasTareas[encontrado].completada = true;
    setListaTarea(nuevasTareas);
  }

  function eliminarTarea(tarea) {
    const filtro = listaTarea.filter((obj) => obj.id !== tarea.id);
    setListaTarea(filtro);
  }

  let mapeaoTareas = listaTarea.map((t) => (
    <li
      key={t.id}
      style={t.completada === true ? { textDecoration: "line-through" } : {}}
    >
      {t.nombre}
      {t.completada === false ? (
        <button onClick={() => completarTarea(t)}>Completar</button>
      ) : (
        ""
      )}
      <button onClick={() => eliminarTarea(t)}>Borrar</button>
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombreTarea"
          value={nombreTarea}
          onChange={mostrarInput}
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>{mapeaoTareas}</ul>
    </div>
  );
}

export default TareasConObjetos;
