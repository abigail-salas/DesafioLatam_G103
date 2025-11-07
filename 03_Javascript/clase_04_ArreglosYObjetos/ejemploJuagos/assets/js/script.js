function mostrarJuegos(juegos, contenedorId, limite) {
  const contenedor = document.getElementById(contenedorId);

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

mostrarJuegos(juegos_pc, "contenedor_pc", 3);
mostrarJuegos(juegos_consolas, "contenedor_consolas", 3);

/* LOGICA DE CONTENEDORES */

const htmlPC = document.getElementById("html-pc");
console.log(htmlPC, "<---- htmlpc");
if (htmlPC) {
  mostrarJuegos(juegos_pc, "html-pc");
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

btnOferta.addEventListener("click", () => filtrarJuegos("oferta"));
btnMultijugador.addEventListener("click", () => filtrarJuegos("multijugador"));
btnTodos.addEventListener("click", () => filtrarJuegos("todos"));
