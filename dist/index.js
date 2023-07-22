"use strict";
// tsc index.ts => TE PERMITE CREAR EL INDEX.JS DEL TS FILE
// node index.js => PERMITE CREAR EJECUTR EL CODIGO DEL JS
// tsc index.ts && node index.js => se pasan al mismo tiempo
//tsc --outDir dist index.ts => crea el index.js en un dir named dist
// BASIC TYPES
let myTypeString = 'Hello world';
let myTypeNumber = 9;
let myTypeBoolean = true;
let arrNumbers = [1, 2, 3];
let arrStrings = ['a', '12', 'xz'];
//No puedes asignarle un valor q no sea el ya asignado
//ANY type
let arrAny = ['Hola', 33, true];
//TUPLE
let tuplePlayer = ['gato', 4, true];
//TUPLE ARRAY
let players;
players = [
    [1, 'uno'],
    [2, 'dos'],
    [3, 'tres'],
];
//INFERENCIA DE TIPOS
let myVariable; // inferencia del tipo any
let myVariable1;
let myVariable2 = 'Hola mundo'; //la inferencia de tipo d string
let myVariable4 = [1, '2', true]; // en este caso no hay inferencia
// UNIONS
let miVariable; // o puede ser null o number...
