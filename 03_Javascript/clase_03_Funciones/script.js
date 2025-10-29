/*  ------------------------ VARIABLES ------------------------ */

/* VAR */

var prueba = "aqui se declara var";
console.log(prueba);
var prueba = "aqui tambien se declara";
console.log(prueba);

/* LET */

let intento = "declaracion con let"; // <---- variable global
console.log(intento);
// let intento = "algoo"
intento = "modificando let";
console.log(intento);

if (true) {
  let dentroDelBloque = "soy una variable local";
  console.log(dentroDelBloque, "<---- Dentro de su bloque de codigo");

  //   console.log(intento, "<---- Dentro de un bloque de codigo");

  let intento = "intento pero dentro de un bloque de codigo";
  console.log(intento, "<---- nueva variable");
}

// console.log(dentroDelBloque, "<---- Fuera de su bloque de codigo");

/* CONST */

const fija = "no se puede modificar";
/* fija = "algo";
console.log(fija); */

/* ------------------------ FUNCIONES ------------------------ */

function pintarFondo() {
  let elemento = document.querySelector("body");
  elemento.style.backgroundColor = "#0D160B";
}

function pintarLetras() {
  let elemento = document.querySelector("body");
  elemento.style.color = "#BB8A89";
}

/* Utilizando Parametros */

function pintarParrafo(color) {
  let elemento = document.querySelector("#parrafo");
  elemento.style.backgroundColor = color;
}

// function pintar(color, tag) {
//   let elemento = document.querySelector(tag);
//   elemento.style.backgroundColor = color;
// }

/* valores por default a los parametros */

function pintar(color = "red", tag = "body") {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
}

/* Orden de los parametros */

function presentacion(nombre, edad, ciudad, vocacion) {
  console.log(
    `Mi nombre es ${nombre} y tengo ${edad} años. Vivo en ${ciudad} y me dedico a ${vocacion}.`
  );
}

presentacion("Max", 34, "salta", "Pintar");
// Mi nombre es Max y tengo 34 años. Vivo en salta y me dedico a Pintar.

presentacion(34, "Salta", "Pintar", "Max");
// Mi nombre es 34 y tengo Salta años. Vivo en Pintar y me dedico a Max.

/* Retorno de las funciones */

function suma(a, b) {
  /* Todo el codigo accesible dentro de su propio bloque de codigo */
  // console.log(a + b);

  return a + b;

  /* Codigo inaccesible dentro de su propio bloque de codigo */

  console.log("object");
}

suma(10, 20);

let guardar = suma(10, 20);

console.log(`Soy la funcion suma y devuelvo ${guardar}`);

console.log(`Soy la funcion suma y devuelvo ${suma(10, 20)}`);

console.log(guardar, "<--- funcion en una variable");

/* ------------------------ ARROW FUNCTION ------------------------ */

// const resta = (a, b) => {
//   return a - b;
// };

/* Si esta en LA MISMA LINEA DE CODIGO, tanto el return como las llaves, estan implicitos en la funcion */
const resta = (a, b) => a - b;

console.log(resta(200, 20));
