/* ------------- CONDICIONALES ------------- */

// let edad = Number(prompt("Decime tu edad"));

// if (edad < 18) {
//   alert("No podes ingresar a la web");
// }

/* ----------------------- OPERADORES ----------------------- */

/* =========> Operadores de Asignacion <========= */

let nn = "Hola";
nn = "Chau";

/* =========> Operadores de Comparacion <========= */

/* ----> De igualdad <---- */

/* Simple */
12 == 12; // devuelve ---> true
"Hola" == "Hola"; // devuelve ---> true
"Hola" == "hola"; // devuelve ---> false
"45" == 45; // devuelve ---> true

/* Estricta (Compara el valor y el tipo de dato ingresado) */
56 === 56; // devuelve ---> true
"Hola" === "hola"; // devuelve ---> false
"45" === 45; // devuelve ---> false

/* ----> De desigualdad <---- */

/* Simple */
67 != 67; // devuelve ---> false
"Hola" != "hola"; // devuelve ---> true
45 != 67; // devuelve ---> true

/* Estricta */
45 !== 67; // devuelve ---> true
"Hola" !== "Hola"; // devuelve ---> false
67 !== "67"; // devuelve ---> true
67 !== 67; // devuelve ---> false

/* =========> Operadores Logicos <========= */

/* "O" */
true || true; // devuelve ---> true
true || false; // devuelve ---> true
false || true; // devuelve ---> true
false || false; // devuelve ---> false

/* "Y" */
true && false; // devuelve ---> false
false && true; // devuelve ---> false
false && false; // devuelve ---> false
true && true; // devuelve ---> true

/* =========> Operadores de Negacion <========= */

!true; // devuelve ---> false
!false; // devuelve ---> true
!"Hola"; // devuelve ---> false
!23; // devuelve ---> false
!""; // devuelve ---> true
!0; // devuelve ---> true

/* ----------- if / else ----------- */

// let porcionesDeTorta = 150;
// let invitados = 50;
// let cantidadDePorcionesPorInvitado = porcionesDeTorta / invitados;

// if (cantidadDePorcionesPorInvitado >= 1) {
//   alert("Hay suficientes porciones por invitado");
// } else {
//   alert("No hay suficientes porciones de torta para todos los invitados");
// }

/* ----------- if / else if / else ----------- */

if (false) {
  console.log("Aqui no entro");
} else if (false) {
  console.log("Aqui no entro");
} else if (true) {
  console.log("Aqui si entro");
} else {
  console.log("Aqui no entro");
}

/* EJERCICIOS */

// let grados = prompt("Cuántos grados hace en tu ciudad?");

// if (grados >= 30) {
//   alert("Hace mucho calor!!!");
// }

// if (grados >= 30) {
//   alert("Hace mucho calor!!!");
// } else if (grados < 10) {
//   alert("Que frio hace!");
// } else {
//   alert("Lindo clima :)");
// }

/* let px = Number(prompt("Ingresa un numero de pixeles"));

if (px < 576) {
  console.log(`${px} equivales al tamaño de pantalla XS`);
} else if (px >= 992) {
  console.log(`${px} equivales al tamaño de pantalla LG`);
} else if (px >= 768) {
  console.log(`${px} equivales al tamaño de pantalla MD`);
} else if (px >= 576) {
  console.log(`${px} equivales al tamaño de pantalla SM`);
} else {
  console.log("Ingresa un numero valido");
} */

let user = prompt("Decime tu usuario");
let password = Number(prompt("Decime tu contraseña"));

if (user === "admin" && password === 1234) {
  console.log("Acceso cocedido");
} else if (user === "admin" && password !== 1234) {
  console.log("Contraseña Incorrecta");
} else {
  console.log("Usuario Incorrecto");
}
