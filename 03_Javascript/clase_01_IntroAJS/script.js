/* ------------------ VALORES PRIMITIVOS ------------------ */

/* Números */
(2 + 2) * 3 + 8; // devuelve ---> 20
2 + 2 * 3 + 8; // devuelve ---> 16

/* String (TODO lo que vaya entre comillas "") */
("Hola, cómo estás?");
("564");

/* Booleans */
true;
false;

/* Funcion para saber el tipo de dato ingresado (SIEMPRE lo devuelve como un String) */
typeof 12; // devuelve ---> 'number'
typeof true; // devuelve ---> 'boolean'
typeof "hola"; // devuelve ---> 'string'
typeof "12"; // devuelve ---> 'string'
typeof "true"; // devuelve ---> 'string'

/* Funcion para saber la fecha y hora */
Date(); // devuelve ---> 'Tue Oct 14 2025 22:09:49 GMT-0300 (hora estándar de Argentina)'

/* ------------------ MENSAJE DE CONSOLA ------------------ */
console.log("Probando un mensaje");
console.log(123);

/* ------------------ ALERTAS ------------------ */
/* alert("Soy una alerta");
confirm("Acepta los terminos y condiciones?");
prompt("Decime tu nombre"); */

/* ------------------ VARIABLES ------------------ */
let numero = 123;
console.log(numero, "<---- esto es la variable numero");

let nombre = "Juan Alberto"; // Declarando una variable
console.log(nombre, "<--- variable nombre original");

nombre = "Juan Cruz"; // Modificando la variable creada
console.log(nombre, "<--- variable modificada");

/* ------------------ CONCATENACION + PROMPT ------------------ */

// let nombreCompleto = prompt("Decime tu nombre completo");
// let edad = prompt("Decime tu edad");

// alert("Hola " + nombreCompleto);

/* El prompt SIEMPRE DEVUELVE UN TIPO DE DATO STRING */

// let primerNum = prompt("Decime un numero");
// let segNum = prompt("Decime un segundo número y te digo la suma de ellos");
// alert(primerNum + segNum);

/* Transformar el tipo de dato ingresado ↓↓↓↓ */

// let primerNum = Number(prompt("Decime un numero"));
// let segNum = Number(
//   prompt("Decime un segundo número y te digo la suma de ellos")
// );
// let resultado = primerNum + segNum;
// alert("La suma de tus numeros es: " + resultado);

/* ------------------ TEMPLATE LITERALS ------------------ */

let edad = 25;
let apellido = "Salas";
let primerNombre = "Abigail";

// Concatenacion ↓↓↓↓

console.log(
  "Hola, mi nombre es " +
    primerNombre +
    " y mi apellido es " +
    apellido +
    ". Tengo " +
    edad +
    " años de edad."
);

// Template Literal ↓↓↓↓

console.log(
  `Hola, mi nombre es ${primerNombre} y mi apellido es ${apellido}. Tengo ${edad} años de edad.`
);

/* ------------------ DOM (Document Object Model) ------------------ */

let parrafo = document.querySelector("p");
let menu = document.querySelector(".navbar");
let cardSection = document.querySelector("#card-section");
let footer = document.querySelector("footer");
let cuerpo = document.querySelector("body");

console.log(parrafo);

/* ------------------ MANIPULAR EL DOM ------------------ */

/* Cambiar los estilos css */

cuerpo.style.backgroundColor = "#595457";
parrafo.style.backgroundColor = "#710627";
menu.style.fontFamily = "Fantasy";
footer.style.fontSize = "30px";

/* Cambiar o agregar texto */

menu.innerHTML = "Texto cambiado desde JAVASCRIPT";
cardSection.innerText = "Agregando texto con JS";

/* -------------- Ejercicios -------------- */

let imgElem = document.querySelector("img");

imgElem.style.width = "400px";
imgElem.style.height = "300px";

let radius = prompt(
  "Decime cuanto % de radio queres que tenga la imagen. Ej: 20"
);

imgElem.style.borderRadius = radius + "%";

/* let radius = prompt(
  "Decime cuanto px queres que tenga la imagen. Ej: 20"
);

imgElem.style.borderRadius = radius + "px"; */
