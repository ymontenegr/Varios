let i = 10;

console.log(i)


//Manejo asincrónico por medio de promesas
//en lugar de usar callback 

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey todo bien');
        } else {
            reject("Algo fallo");
        }
    });
}

helloPromise()
 .then(response => console.log(response))
 .then(() => console.log("Hola"))
 .catch(error => console.log(error));

 //Podía tener varios then anidados
 //hay un curso de asincronismo donde se explica mejor el tema

 //Clases, módulos y generadores

 class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
 }

 const calc = new calculator();
 console.log(calc.sum(3,2));


 //módulos
 //no funcionó

import {hello} from './module.js';

 console.log(hello());


 //Generator
 //para lógicas y algoritmos que se crean, como Fibonacci

 function* helloWorld() {
     if (true) {
         yield 'Hola, ';
     }
     if (true) {
         yield 'World';
     }
 }

 const generatorHello = helloWorld();

 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);


 //ECMA SCRIPT 7


 //doble línea

 let lorem = 'hola'+'mundo'

 console.log(lorem);
 