import { agenda } from "./dependencies.js";

function mostrarContactos() {
  const colaDiv = document.getElementById('cola');
  colaDiv.innerHTML = '';
  let actual = agenda.contactList.head;
  while (actual) {
    const parrafo = document.createElement('p');
    parrafo.textContent = `${actual.data.nombre} ${actual.data.apellido} - ${actual.data.telefono}`;
    colaDiv.appendChild(parrafo);
    actual = actual.next;
  }
}

function agregarContacto() {
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const telefonoInput = document.getElementById('telefono');
  const nombre = nombreInput.value.trim();
  const apellido = apellidoInput.value.trim();
  const telefono = telefonoInput.value.trim();

  if (nombre && apellido && telefono) {
    agenda.addContact(nombre, apellido, telefono);
    agenda.order();
    mostrarContactos();
    nombreInput.value = '';
    apellidoInput.value = '';
    telefonoInput.value = '';
  } else {
    mostrarMensaje('ingrese nombre y número telefónico.');
  }
}

function extraerContacto() {
  agenda.deleteFIFO();
  mostrarContactos();
}

function mostrarMensaje(mensaje) {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = mensaje;
}

function buscarContacto() {
  const nombreInput = document.getElementById('buscarInput');
  const nombre = nombreInput.value.trim();

  if (nombre) {
    const resultado = agenda.searchContact(nombre);
    mostrarMensaje(resultado);
  } else {
    mostrarMensaje('Ingrese un nombre para buscar.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('agregarBtn').addEventListener('click', agregarContacto);
  document.getElementById('extraerBtn').addEventListener('click', extraerContacto);
  document.getElementById('buscarBtn').addEventListener('click', buscarContacto);
  mostrarContactos();
});

