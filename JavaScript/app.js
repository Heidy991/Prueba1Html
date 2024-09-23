console.log("Hola mundo");

// variables 


let numero1 =45;
let numero2 =39;
let suma, resta, multiplicacion, mod;

const pi = 3.141516;

let estado = true;

let numero3 = 125

let direccion = "calle 11 # 40 69";

let nulo = null


console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(suma);
console.log(direccion);

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
mod = numero1 % numero2;

// concatenar valores

console.log('EL PRIMER VALOR ES:' + numero1);
console.log('EL SEGUNDO VALOR ES:' + numero2);
console.log('LA SUMA DE' + numero1 + 'y' + numero2 + 'ES:' + suma);
console.log('LA SUMA DE' , numero2 , 'Y' , numero2 , 'ES:' , suma );

// literal templete

console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);
console.log(`LA DIVISION MODULO ${numero1} Y ${numero2} ES: ${mod}`);

console.log(typeof(estado));
console.log(typeof(direccion));
console.log(typeof(numero3));
console.log(typeof(null));


// ingreso de datos por el usuario

let nu1 = parseInt(prompt(("ingrese el primer valor")));
let nu2 = parseInt(prompt(("ingrese el segundo valor")));

let s = nu1+nu2;

console.log(`EL PRIMER VALOR INGRESADO ES: ${nu1} Y  EL SEGUNDO VALOR ES: ${nu2}`);
console.log(`LA SUMA ES: ${s}`);


// generacion de numeros aleatoreos 
// numero aleatoreo entre 1 y 5


// forma 1
let alea = Math.floor(Math.random() * 5)  + 1;

console.log(alea);

// forma 2
