"use strict";
//Clases 
//-Existen al compilar y durante ejecucion. -podemos inicializar propiedades e implementar propiedades -crea instancias en dicha clase
class Persona {
    constructor() {
        this.zone = 'Caribean';
        this.city = 'Santo Domingo'; //permitida solo si extendemos la clase padre, para clases heredadas o extendidas 
        this.country = 'R.D';
    }
    gree() {
        console.log('Hello');
    }
}
class Empleado extends Persona {
    // Atributos   popiedades d la clase
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    } //read only propiedad para solo leer ni se puede reasignar
    // Metodos      acciones funciones
    showInfo() {
        console.log(`${this.city}${this.zone}`);
    }
}
const empl = new Empleado(1, 'Dom', 'hello');
