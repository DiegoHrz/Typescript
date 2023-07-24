// variable
const PI = 3.14;

//interface
interface Person {
    id: number;
    name: string;
}

//function
function generateRandomNumber(): number {
    return Math.floor(Math.random()*100);
}

export { PI, Person, generateRandomNumber}


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