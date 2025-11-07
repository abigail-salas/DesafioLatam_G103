let nombre1 = "Nicolas";
let nombre2 = "Jasmin";
let nombre3 = "Juan";
let nombre4 = "Max";
let nombre5 = "Sofia";

/* ----------------- ARREGLOS ----------------- */

let nombres = ["Nicolas", "Jasmin", "Juan", "Max", "Sofia"];


nombres.push("Karina")
/* CANTIDAD DE ELEMENTOS */

nombres.length; // devuelve ----> 5

/* ACCEDER A LOS ELEMENTOS DENTRO DEL ARREGLO */

nombres[0]; // devuelve ----> 'Nicolas'
nombres[4]; // devuelve ----> 'Sofia'
nombres[5]; // devuelve ----> undefined;

/* BUCLES */

/* for */

// for (const element of nombres) {
//   console.log(element, "<--- for of");
// }

// for (let i = 0; i < nombres.length; i++) {
//   const element = nombres[i];
//   console.log(element, "<--- for loop");
// }

/* ---------------- OPERADORES ARITMETICOS ---------------- */

let numero = 0;
/* SUMA DE A 1 */
numero++; // devuelve ----> 0
numero++; // devuelve ----> 1
numero++; // devuelve ----> 2
numero++; // devuelve ----> 3
numero; // devuelve ----> 4

/* RESTA DE A UNO */
numero--; // devuelve ----> 4
numero--; // devuelve ----> 3
numero; // devuelve ----> 2

/* SUMA, RESATA, MULTIPLICA Y DIVIDE en base a un valor dado */
numero = 100; // devuelve ----> 100
numero += 20; // devuelve ----> 120
numero += 20; // devuelve ----> 140
numero += 20; // devuelve ----> 160
numero -= 30; // devuelve ----> 130
numero *= 2; // devuelve ----> 260
numero /= 4; // devuelve ----> 65

/* BUCLES, DOM */

const dynamic = document.querySelector("#dynamic-content");

let html = "";

for (const element of nombres) {
  //   dynamic.innerHTML += `<li>${element}</li>`;

  html += `<li>${element}</li>`;
  // console.log(html, "<---- html (string acumulador)");
}
console.log(html, "<--- html fuera del loop");
dynamic.innerHTML = html;

/* ---------------------- OBJETOS ---------------------- */

let datos = [
  "Sandra Viviana",
  48,
  "Salta",
  ["Jimena", "Bianca"],
  () => {
    console.log("Hoola, soy Sandra");
  },
];

let persona = {
  nombre: "Sandra Viviana",
  edad: 48,
  residencia: "Salta",
  hijos: ["Jimena", "Bianca"],
  saludo: () => {
    console.log("Hoola, soy Sandra");
  },
};

/* =======> ACCEDER A LOS VALORES <======= */
/* BRACKET NOTATION (ACEPTA VARIABLES) */

persona["nombre"]; // devuelve ----> 'Sandra Viviana'
persona["edad"]; // devuelve ----> 48
persona["hijos"]; // devuelve ----> (2) ['Jimena', 'Bianca']
persona["hijos"][0]; // devuelve ----> 'Jimena'
persona["hijos"][1]; // devuelve ----> 'Bianca'
persona["saludo"](); // devuelve ----> Hoola, soy Sandra

/* DOT NOTATION */
persona.edad; // devuelve ----> 48
persona.hijos[1]; // devuelve ----> 'Bianca'
persona.saludo(); // devuelve ----> Hoola, soy Sandra

/* =======> AGREGAR NUEVOS VALORES <======= */
/* BRACKET NOTATION */
persona["profesion"] = "Profesora";

/* DOT NOTATION */
persona.pasatiempo = "Pintar";

/* =======> RECORRER UN OBJETO <======= */

for (const key in persona) {
  //   console.log(key, "<---- key");

  const value = persona[key];

  //   console.log(value, "<---- value");
}

/* --------------------------------------- ARREGLOS DE OBJETOS --------------------------------------- */

let productos = [
  { id: 1, nombre: "Remera", precio: 15000 },
  { id: 2, nombre: "Pantalon", precio: 25000 },
  { id: 3, nombre: "Camisa", precio: 30000 },
  { id: 4, nombre: "Zapatos", precio: 10000 },
  { id: 5, nombre: "Zapatillas", precio: 45000 },
  { id: 6, nombre: "Campera", precio: 15500 },
];

let items = "";

for (const element of productos) {
  items += `
  <div id="${element.id}">
      <h2>${element.nombre}</h2>
      <p>${element.precio}</p>
    </div>
    `;
}

const elementHTML = document.querySelector("#productos");
elementHTML.innerHTML = items;
