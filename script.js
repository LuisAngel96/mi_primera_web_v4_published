//alert("Hola este es mi Javascript");

//let nombre = "Luis";
//nombre = "Maria";

//var nombre1 = "Luis"

//const nombre2 = "Luis"
//nombre2 = "Juan"

//console.log (nombre);
//console.log (nombre1)
//console.log (nombre2)

//SELECCIONAR ELEMENTOS

//let h1 = "Nombre"

//let titulo = document.querySelector(".logo .fuente-acento")
//titulo.innerHTML =  h1;

//CONDICIONALES

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//if (textoTitulo == "Nombre") {
    //titulo.innerHTML = "Otro";
//} else {
    //console.log ("No se cumple");
//}

//FUNCIONES

//let nombre = "Juan";
//let ciudad = "carta";
//let gusto = "arroz";

//let parrafo = document.querySelector(".parrafo");

//function cambiarTexto(nombre, ciudad, gusto) {
    //let contenido = `Bienvenidos a mi pagina! Mi nombre es ${nombre} Martinez,
    //soy de ${ciudad} y me gusta una gran variedad de ${gusto}.
    //Aqui aprenderas todo los trabajos que he realizado y estoy por realizar.
    //Soy arquitecto y delineante de arquitectura, me gustaria aprender
    //sobre programacion para tener mas oportunidades laborales.`;

    //return contenido;

//}
//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);


/*FORMULARIO*/

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
