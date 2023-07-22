//FUNCTIONS
// ej1  (devuelve void y ademas lo specifcms, no es necesario)
function greet (name: string='User'): void{
    console.log(`hello, ${name.toUpperCase()} !!`)
} 
greet('Domi'); // se sobreescribe domi en vez de user
greet(); // usa user por defecto

//ej2 funcion con inferencia
function getNumber(){
    return Math.floor(Math.random() * 100);
}
console.log(getNumber()) 

//ej3 propiedades de los objs con ? = propiedad opcional
function printPosition( position:{lat: number, long?: number}){
    console.log(`Lat is ${position.lat} long is ${position.long}`)
}
printPosition({lat:3});


