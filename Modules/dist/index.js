"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mymodules_1 = require("./mymodules");
const mymodules_2 = require("./mymodules");
//import * as myCode from './mymodules' the * means you import everything so you have to change every class or interface to be eg: myCode.Person
const user = {
    id: 1,
    name: 'Dominicode'
};
console.log(user);
console.log((0, mymodules_1.generateRandomNumber)());
console.log(mymodules_2.PI);
