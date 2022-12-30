// CURSO PRACTICO JS
// Leyendo HTML desde JS
// Escribiendo HTML desde JS

// QUERYSELECTOR
// Obtener elementos desde HTML con querySelector(''); de JavaScript

// Selector por etiqueta
var h1 = document.querySelector('h1');
// Selector por ID
var pid = document.querySelector('#pid');
// Selector por Class
var clase = document.querySelector('.parrafito');
// Selector por etiqueta input
var input = document.querySelector('input');

console.log(input);


// Escribiendo HTML
// elemento.innerHTML = 'valor';

// Permite etiquetar HTML
h1.innerHTML = 'Cambiando el titulo';
// Solo permite texto
h1.innerText = 'Cambiando el titulo';

// Obtener valor de atributo
console.log(h1.getAttribute('class')); 
// Setear atributo | atributo, valor
h1.setAttribute('class', 'ROJO');

// Añadir una clase
h1.classList.add('verde');
// Eliminar una clase
h1.classList.remove('ROJO');

// Setear el valor de input
input.value = '123';

// Crear elementos desde JS = document.createElement('h1');
var divImagen = document.querySelector('.div-h1');
var nuevoElemento = document.createElement('h1');
nuevoElemento.innerHTML = 'Este h1 esta creado desde JS';
console.log(nuevoElemento);
// meterla en HTML
divImagen.append(nuevoElemento);
// append = método jQuery para agregar contenido o HTML a un elemento

var divH1 = document.querySelector('.div-imagen');
const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://i2.wp.com/thebamboocode.com/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500');
imagen.setAttribute('alt', 'imagenJS');
console.log(imagen);
// meterla en HTML
divH1.append(imagen);


// h1.innerHTML = "Imgen <img src='https://i2.wp.com/thebamboocode.com/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500'> ";

// Cambiar el contenido del elemento
// Se setea el contenido en un string vacio
pid.innerHTML = "";
// Se crea una variable que contenga el nuevo contenido
var nuevoContenido = "Este es el nuevo contenido";
// Se mete el contenido en el HTML con append();
pid.append(nuevoContenido);
