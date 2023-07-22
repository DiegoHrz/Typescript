//TYPE ASSERTION
//es declarar con certeza al compilador q tu sabes q tipo es tecnicamente lo conviertes al tipo q deseas
let channel : any = 'Dominicode';
let channelString = <string>channel; //cambio de tipo
let channelstring = channel as string; //conversion con palabra reservada

const myCanvas = document.getElementById('main') as HTMLCanvasElement;
