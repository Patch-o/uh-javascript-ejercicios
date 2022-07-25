// EXPLICACIÓN CALLBACKS

// Función CALLBACK es una función que recibe como uno de sus párametros una función que luego ejecutará
// Ejemplo simple
//* ARROW FUNCTION
const saluda1 = (nombre) => {
    console.log("Hola", nombre)
}
//* FUNCTION
function saluda2 (nombre) {
    console.log("Hola", nombre)
}

const adios = (nombre) => {
    console.log("Adios", nombre);
}

const saludarUsuario = (nombre, funcion) =>  {
    funcion(nombre);
}

saludarUsuario("Pepe", saluda1);
saludarUsuario("Pepe", adios);

const sumar = (a, b) => {
    console.log("suma", a + b)
}

let num1 = 4;
let num2 = 5;
sumar(num1, num2);

//! Otro ejemplo pero con funciones normales

function sumar(a,b){
    console.log("suma", a + b);
}

function restar(a, b){
    console.log("resta", a - b);
}

function multiplicar(a,b){
    console.log("multiplicación", a * b);
}

function dividir(a,b){
    console.log("división", a / b);
}

function resultado(a, b, operacion) {
    operacion(a, b);
}

resultado(4, 6, sumar);
resultado(7, 3, restar);
resultado(3, 4, multiplicar);
resultado(8, 2, dividir);