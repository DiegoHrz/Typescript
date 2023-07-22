"use strict";
//FUNCTIONS
// ej1  (devuelve void y ademas lo specifcms, no es necesario)
function greet(name = 'User') {
    console.log(`hello, ${name.toUpperCase()} !!`);
}
greet('Domi');
greet();
//ej2 funcion con inferencia
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
//ej3 propiedades de los objs con ? = propiedad opcional
function printPosition(position) {
    console.log(`Lat is ${position.lat} long is ${position.long}`);
}
printPosition({ lat: 3 });
