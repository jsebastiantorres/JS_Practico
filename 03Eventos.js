// CURSO PRACTICO JS
// Eventos en JS iteractuando con usuarios
// Escribiendo HTML desde JS


// Obtener de inputs
const h1 = document.querySelector('h1');
const formulario = document.querySelector('formulario');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btnCalcular');

const divSumando = document.querySelector('#IdSumando');


// ESCUCHAR EVENTOS
// forma 1 añadir atributo en HTML onclick="";  (click en el elemento)
// function fonclick() {
//     console.log('Haz dado click en onclick');
// }

// forma 2 añadir atributo en HTML onchange=""; (cambio de valor en el elemento) 
// function fonchange() {
//     console.log('Haz dado click en onChange');
// }


// forma 3 addEvenListener
// addEvenListener (escuchador de eventos)
// elemento.addEventListener('nombreEvento', 'funcionLlamar')
// Envia como parametro un evento event 
// al evento se llama su metodo .preventDefault()
btn.addEventListener('click', sumar);

// funcion con onclick en el boton desde HTML
function sumar() {
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let suma = num1 + num2;
    // console.log("num1 = " + num1);
    // console.log("num2 = " + num2);
    divSumando.innerHTML = ("Resultado: " + suma);
    // divSumando.append(num1 + num2);
}



// function in java script?
