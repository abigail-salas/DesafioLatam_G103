const descripcionInput = document.querySelector("#descripcion");
const montoInput = document.querySelector("#monto");
const categoriaSelect = document.querySelector("#categoria");
const pagadoCheck = document.querySelector("#pagado");
const btnAgregar = document.querySelector("#agregar");
const listaPendiente = document.querySelector("#lista-pendientes");
const totalPendientes = document.querySelector("#total-pendientes");
const listaPagados = document.querySelector("#lista-pagados");
const totalPagados = document.querySelector("#total-pagados");

let gastos = [
  {
    id: 1,
    descripcion: "Alquiler",
    monto: 150000,
    pagado: false,
    categoria: "Hogar",
  },
  {
    id: 2,
    descripcion: "Netflix",
    monto: 2500,
    pagado: true,
    categoria: "Entretenimiento",
  },
  {
    id: 3,
    descripcion: "Gas",
    monto: 9000,
    pagado: false,
    categoria: "Hogar",
  },
  {
    id: 4,
    descripcion: "Supermercado",
    monto: 23000,
    pagado: true,
    categoria: "Comida",
  },
];

btnAgregar.addEventListener("click", () => {
  const descripcion = descripcionInput.value;
  const monto = montoInput.value;

  /* Error encontrado, se cambio el .value por .checked */
  const pagado = pagadoCheck.checked;
  const categoria = categoriaSelect.value;

  if (!descripcion || !monto || !categoria) {
    return alert("Completa todos los campos");
  }

  const nuevoId = gastos.length ? gastos[gastos.length - 1].id + 1 : 1;

  const nuevoGasto = {
    id: nuevoId,
    descripcion,
    monto,
    pagado,
    categoria,
  };

  gastos.push(nuevoGasto);

  descripcionInput.value = "";
  montoInput.value = "";
  categoriaSelect.value = "";
  pagadoCheck.checked = false;

  renderFiltro();
});

function renderLista(lista, contenedor, pagado) {
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = `<li>No hay gastos registrados</li>`;
  }

  lista.forEach((element) => {
    const li = document.createElement("li");

    li.classList.add(pagado ? "pagado" : "pendientes");

    /* Se agrego la logica para que se vean los checkbox tildados*/
    li.innerHTML = `
    <h4>${element.descripcion}</h4>
    <p>${element.monto}</p>
    <p>${element.categoria}</p>
    <label class="switch-label">
      <input ${
        element.pagado ? "checked" : ""
      } type="checkbox" onchange="togglePagado(${element.id})" />
      <span class="switch"></span>
    </label>
    `;

    contenedor.appendChild(li);
  });
}

const togglePagado = (id) => {
  let gasto = gastos.find((e) => e.id === id);
  gasto.pagado = !gasto.pagado;

  renderFiltro();
};

function renderFiltro() {
  const pendientes = gastos.filter((e) => !e.pagado);
  const pagados = gastos.filter((e) => e.pagado);

  renderLista(pendientes, listaPendiente, false);
  renderLista(pagados, listaPagados, true);

  const sumaGastos = (filtro) => {
    return filtro.reduce((acumulador, actual) => {
      return acumulador + actual.monto;
    }, 0);
  };

  totalPagados.textContent = `Total Pagados: ${sumaGastos(pagados)}`;
  totalPendientes.textContent = `Total Pendiente: ${sumaGastos(pendientes)}`;
}

renderFiltro();
