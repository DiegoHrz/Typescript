//Clases 
//-Existen al compilar y durante ejecucion. -podemos inicializar propiedades e implementar propiedades -crea instancias en dicha clase

class Persona {
    public zone = 'Caribean';
    protected city = 'Santo Domingo'; //permitida solo si extendemos la clase padre, para clases heredadas o extendidas 
    private country = 'R.D'; 
    constructor(){ }

    gree(): void{
        console.log('Hello')
    }
}

class Empleado extends Persona{
    // Atributos   popiedades d la clase

    constructor(private readonly id: number, private name:string, private dept: string){ 
        super();
        this.showInfo();
    }//read only propiedad para solo leer ni se puede reasignar
        // Metodos      acciones funciones
    private showInfo(): void{
        console.log(`${this.city}${this.zone}`)
    }
}

const empl = new Empleado(1,'Dom','hello') 