export class Burbuja {
    sort(contactList) {
      let current = contactList.head;
      let swapped;
      do {
        swapped = false;
        while (current && current.next) {
          if (this.compare(current.data, current.next.data) > 0) {
            let temp = current.data;
            current.data = current.next.data;
            current.next.data = temp;
            swapped = true;
          } else if (this.compare(current.data, current.next.data) === 0) {
            if (current.data.apellido.localeCompare(current.next.data.apellido) > 0) {
              let temp = current.data;
              current.data = current.next.data;
              current.next.data = temp;
              swapped = true;
            }
          }
          current = current.next;
        }
        current = contactList.head;
      } while (swapped);
    }
  
    compare(contact1, contact2) {
      if (contact1.nombre === contact2.nombre) {
        return contact1.apellido.localeCompare(contact2.apellido);
      }
      return contact1.nombre.localeCompare(contact2.nombre);
    }
  }
  