function mostrarJuegos(juegos, contenedorId, limite) {
  const contenedor = document.getElementById(contenedorId);

  // Si no existe el contenedor, salimos sin intentar manipularlo. Esto causaba error a la hora de renderizar
  if (!contenedor) {
    console.warn(
      `mostrarJuegos: contenedor "${contenedorId}" no existe en esta página.`
    );
    return;
  }

  console.log(contenedor, "<---- soy el contenedor");

  const cantidad = limite ? Math.min(juegos.length, limite) : juegos.length;

  let html = "";

  for (let i = 0; i < cantidad; i++) {
    const juego = juegos[i];

    const oferta = juego.oferta ? "En oferta" : "Precio original";
    const multijugador = juego.multijugador
      ? "Multijugador disponible"
      : "Un solo jugador";

    html += `
    <div class="juego">
      <img src="${juego.imagen}" alt="${juego.nombre}" />
      <h3>${juego.nombre}</h3>
      <p>${juego.descripcion}</p>
      <p>Precio:${juego.precio}</p>
      <p>${oferta}</p>
      <p>${multijugador}</p>
    </div>
      `;
  }

  console.log(html);

  contenedor.innerHTML = html;
}

/* mostrarJuegos(juegos_pc, "contenedor-pc", 3);
mostrarJuegos(juegos_consolas, "contenedor-consolas", 3);

mostrarJuegos(juegos_pc, "html-pc");
mostrarJuegos(juegos_consolas, "html-consola"); */

// comprobación simple antes de renderizar para que no salga el console.warn en cada renderizacion de consola
if (
  document.getElementById("contenedor-pc") ||
  document.getElementById("contenedor-consolas")
) {
  mostrarJuegos(juegos_pc, "contenedor-pc", 3);
  mostrarJuegos(juegos_consolas, "contenedor-consolas", 3);
} else if (document.getElementById("html-pc")) {
  mostrarJuegos(juegos_pc, "html-pc");
} else if (document.getElementById("html-consola")) {
  mostrarJuegos(juegos_consolas, "html-consola");
}

/* LOGICA FILTROS */
const contenedorFiltrado = document.getElementById("contenedor-filtrado");

function filtrarJuegos(tipoDeFiltro) {
  let listaFiltrada = [];

  const todos = [...juegos_pc, ...juegos_consolas];

  console.log(todos);

  if (tipoDeFiltro === "oferta") {
    for (const element of todos) {
      if (element.oferta) listaFiltrada.push(element);
    }
  } else if (tipoDeFiltro === "multijugador") {
    for (const element of todos) {
      if (element.multijugador) listaFiltrada.push(element);
    }
  } else {
    listaFiltrada = todos;
  }

  mostrarJuegos(listaFiltrada, "contenedor-filtrado");
}

const btnOferta = document.getElementById("btn-oferta");
const btnMultijugador = document.getElementById("btn-multijugador");
const btnTodos = document.getElementById("btn-todos");

if (btnOferta) {
  btnOferta.addEventListener("click", () => filtrarJuegos("oferta"));
}
if (btnMultijugador) {
  btnMultijugador.addEventListener("click", () =>
    filtrarJuegos("multijugador")
  );
}
if (btnTodos) btnTodos.addEventListener("click", () => filtrarJuegos("todos"));
