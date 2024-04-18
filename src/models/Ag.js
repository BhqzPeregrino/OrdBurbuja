import { LinkedList } from "./LinkedList.js";
import { Burbuja } from "./Burb.js";

export class Ag {
  contactList;

  constructor() {
    this.contactList = new LinkedList();
  }

  addContact(nombre, apellido, telefono) {
    this.contactList.push({ nombre, apellido, telefono });
  }

  viewContacts() {
    let current = this.contactList.head;
    let contacts = "";
    while (current) {
      contacts += current.data.nombre + " " + current.data.apellido + " - " + current.data.telefono + "\n";
      current = current.next;
    }
    return contacts;
  }

  searchContact(nombre) {
    let current = this.contactList.head;
    while (current) {
      if (current.data.nombre === nombre) {
        return current.data.nombre + " " + current.data.apellido + " - " + current.data.telefono;
      }
      current = current.next;
    }
    return "Contacto no encontrado";
  }

  deleteFIFO() {
    return this.contactList.shift();
  }

  order() {
    let burbuja = new Burbuja();
    burbuja.sort(this.contactList);
  }
}
