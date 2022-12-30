
// REPSANDO UN OBJETO
var persona = {
    Nombre: "Juan",
    Apellido: "Torres",
    userPlatzi: "j.sebastiantorres",
    Edad: 27,
    Correo: "j.sebastiantorres@hotmail.com",
    MayorDeEdad: true,
    DineroAhorrado: 3,
    Deudas: 5,
}

console.log("Nombre completo: " + persona.Nombre + " " + persona.Apellido);
console.log("Dinero Real: " + (persona.DineroAhorrado - persona.Deudas));

/* 2️⃣ Convierte el siguiente código en una función, pero, 
cambiando cuando sea necesario las variables constantes 
por parámetros y argumentos en una función: */


//REPASANDO UNA FUNCIÓN
const nombre = "Juan";
const apellido = "Torres";
const nombreCompleto = nombre + apellido;
const apodo = "Sebas";

console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + apodo + ".");


function presentacion(nombre, apellido, apodo){
    let nombreCompleto = nombre + " " + apellido;
    console.log("Mi nombre es " + nombreCompleto + " pero prefiero que me digas " + apodo + ".");
}

presentacion("Sebastian", "Torres", "El Sebas");


//REPASANDO CONDICIONALES
//CONVIRTIENDO UN SWITCH EN 
// (1) IF, ELSE IF, ELSE 
// (2) ARRAYS, OBJETOS Y UN SOLO IF
// (3) USANDO forEach

/* const tipoDeSuscripcion = "ExpertPlus";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}
 */


const tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//USANDO UN ARRAY Y UN SOLO CONDICIONAL
var suscripciones = [{ nombre: "Free", descripcion: "Solo puedes tomar los cursos gratis" }, { nombre: "Basic", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
{ nombre: "Expert", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año" }, { nombre: "ExpertPlus", descripcion: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" }];

function encontrarSuscripcion(tipoDeSuscripcion, suscripciones) {
    suscripciones.forEach(suscripcion => {
        if (suscripcion.nombre == tipoDeSuscripcion) {
            console.log(suscripcion.descripcion);
               }
    });
}

encontrarSuscripcion("ExpertPlus", suscripciones);

//USANDO FOREACH
var tipoSuscripcion = "ExpertPlus";

suscripciones.forEach(suscripcion => {
    if (suscripcion.nombre == tipoSuscripcion) {
        console.log(suscripcion.descripcion);
    }
});
////////////////

//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */

//USANDO WHILE
var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}

var ii = 10;
while (ii >= 2) {
    console.log("El valor de i es: " + ii);
    ii--
}


/* 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript. */

function confirmacion() {
    let suma = prompt("Cuanto es 2 + 2: ");
    while (suma != 4) {
        suma = prompt("Cuanto es 2 + 2: ")
        if (suma == 4) {
            alert("La suma es correcta!!!");
            suma = 4;
        }
    }
    if (suma == 4) {
        alert("Fin de la función!!!");
    }

}

confirmacion(); 
////////////////


/* 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */


var suscripciones = [{ nombre: "Free", descripcion: "Solo puedes tomar los cursos gratis" }, { nombre: "Basic", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
{ nombre: "Expert", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año" }, { nombre: "ExpertPlus", descripcion: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" }];



// imprimiendo primer elemento
function imprimiendoPrimerElemento(array) {
    console.log(array[0]);
}
imprimiendoPrimerElemento(suscripciones);


// imprimiendo todos los elementos
function imprimiendoTodosElementos(array) {
    array.forEach(element => {
        console.log(element);
    });
}

imprimiendoTodosElementos(suscripciones);


// imprimiendo el objeto
var suscripcion = { nombre: "Expert", descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año" };

function imprimiendoObjeto(objeto) {
    console.log(objeto.nombre, objeto.descripcion);
}

imprimiendoObjeto(suscripcion);
