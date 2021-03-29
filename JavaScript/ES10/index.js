//Junio 2019

//devolver matriz con submatriz aplanada
//dentro de flat se pone la profundidad

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//flatmap aplana y permite ejecutar una función

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//trim start elimina espacios en blanco de un string

let hello = '       hola mundo';
let hello2 = 'Hola mundo    ';

console.log(hello);
console.log(hello.trimStart());
console.log(hello2.trimEnd());

//pasar el error directo al catch, es opcional

try { 

} catch (error) {

}

//No se pasa el valor y lo toma por defecto

try { 

} catch {
    
}


//transformar clave - valor en un objeto

let entries = [["name", "oscar"], ["age", "40"]];

console.log(Object.fromEntries(entries));

//objeto de tipo símbolo que se pueda acceder a una descripción

let mySymbol = 'Mi simbolo';
let symbol = Symbol(mySymbol);

console.log(symbol.description);

