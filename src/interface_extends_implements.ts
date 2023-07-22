// Interfaces
interface Person {
    id: number;
    name: string;
}

interface Employee extends Person{ // se le adiciona todas las propiedaddes d person
    dept: string,
}

interface Customer extends Person{
    country: string;
}

const emp: Employee = {id: 9, name: 'name' ,dept: 'dept'}


interface Animal{
    name: string;
    getDogs: ()=> void;
    getCats?: ()=> void;   //metodo opcional
}


class Zoo implements Animal{
    name: 'zoo';
    getDogs(): void{

    }
    getCats(){       // no se especifica el void xq lo supone   

    }
}
