/* -------------------------- METODOS DE ARREGLOS -------------------------- */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* ============= AGREGAR ELEMENTOS ============= */

/* METODO array.push(parametro) ===> Agrega un elemento AL FINAL del array */
num.push("metodo push"); // queda en ----> [1, 2, 3, 4, 5, 6, 'metodo push']

/* METODO array.unshift(parametro) ===> Agrega un elemento AL INICIO del array */
num.unshift("metodo unshift"); // queda en ----> ['metodo unshift', 1, 2, 3, 4, 5, 6, 'metodo push']

/* ============= ELIMINAR UN ELEMENTO ============= */

/* METODO array.pop() ===> Quita un elemento AL FINAL del array (Podemos guardar el elemento eliminado en una variable) */
let eliminadoPop = num.pop();
console.log(eliminadoPop);

/* METODO array.shift() ===> Quita un elemento AL INICIO del array (Podemos guardar el elemento eliminado en una variable) */
let eliminadoShift = num.shift();
console.log(eliminadoShift);

/* METODO array.splice(posicion, cantidadDeElementosABorrar) ===> Remueve diferentes elementos del array */
let eliminadoSplice = num.splice(3, 2);
console.log(eliminadoSplice);

/* ============= BUSCAR SU POSICION ============= */

/* METODO array.findIndex(function) ===> Verifica la posicion de un elemento en base a una funcion dada */
let fIndex = num.findIndex((e) => e === 8);
console.log(fIndex, "<--- posicion elemento 8"); // devuelve ---> 5

/* METODO array.indexOf(parametro) ===> Si no encuentra el elemento, devuelve -1 */
num.indexOf("hola"); // devuleve ---> -1
num.indexOf(9); // devuleve ---> 6

/* ============= FILTRAR ELEMENTOS ============= */

/* METODO array.filter(function) ===> Filtra y crea un nuevo arreglo con los elementos que cumplan la condicion dada */
let mayores = num.filter((e) => e >= 7);
console.log(mayores);

/* ============= MODIFICAR EL ARRREGLO ============= */

/* METODO array.join(parametro) ===> Une los elementos del arreglo en base al parametro dado */
let textoJoin = num.join("-");
console.log(textoJoin); // devuelve ---> 1-2-3-6-7-8-9

/* ------------- DOM + METODOS ------------- */

const listaDeInvitados = document.getElementById("invitados");
const invitadosInput = document.querySelector("#nuevo-invitado");
const btnInvitado = document.getElementById("agregar-invitado");

const invitados = [];

btnInvitado.addEventListener("click", () => {
  const nuevoInvitado = invitadosInput.value;
  invitados.push(nuevoInvitado);

  invitadosInput.value = "";

  let html = "";

  for (const element of invitados) {
    html += `<li>${element}</li>`;
  }

  listaDeInvitados.innerHTML = html;
});

/* Optimizando el código anterior */

const listaDeActores = document.getElementById("actores");
const actoresInput = document.querySelector("#nuevo-actor");
const edadActoresInput = document.getElementById("edad-actor");
const btnActores = document.getElementById("agregar-actor");

const actores = [
  { id: 100, nombre: "Brad Pitt", edad: 60 },
  { id: 200, nombre: "Leonardo DiCaprio", edad: 49 },
  { id: 300, nombre: "Morgan Freeman", edad: 88 },
  { id: 400, nombre: "Emma Stone", edad: 36 },
];

btnActores.addEventListener("click", () => {
  const nuevoId = actores[actores.length - 1].id + 100;
  const nuevoNombre = actoresInput.value;
  const nuevaEdad = edadActoresInput.value;

  if (!nuevoNombre || !nuevaEdad || !nuevoId) {
    return alert("Completa todos los campos");
  }

  const nuevoActor = {
    id: nuevoId,
    nombre: nuevoNombre,
    edad: nuevaEdad,
  };

  actores.push(nuevoActor);

  actoresInput.value = "";
  edadActoresInput.value = "";

  render();
});

function render() {
  let html = "";

  for (const element of actores) {
    html += `
    <li id="${element.id}">
        <h3>${element.nombre}</h3>
        <p>Edad: ${element.edad}</p>
        <button class="delete" onclick="borrar(${element.id})">Borrar</button>
      </li>
      `;
  }

  listaDeActores.innerHTML = html;
}

function borrar(id) {
  const index = actores.findIndex((e) => e.id === id);
  actores.splice(index, 1);
  render();
}
