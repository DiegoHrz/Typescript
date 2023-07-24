import { Person, generateRandomNumber} from './mymodules'
import {PI as myPIPI} from './mymodules'
//import * as myCode from './mymodules' the * means you import everything so you have to change every class or interface to be eg: myCode.Person

const user: Person = {
    id: 1,
    name: 'Dominicode'
}


console.log(user);
console.log(generateRandomNumber());
console.log(myPIPI);