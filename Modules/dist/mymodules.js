"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.PI = void 0;
// variable
const PI = 3.14;
exports.PI = PI;
//function
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandomNumber = generateRandomNumber;
//ITS THE SAME AS THE ABOVE
// // variable
// export const PI = 3.14;
// //interface
// export interface Person {
//     id: number;
//     name: string;
// }
// //function
// export function generateRandomNumber(): number {
//     return Math.floor(Math.random()*100);
// }
