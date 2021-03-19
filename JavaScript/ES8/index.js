//Object devuelve clave y valores de una matriz

const data = {
    frontEnd : 'Oscar',
    backEnd : 'Isabel',
    design : 'Ana'
}

//convertir a una matriz

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

//object value devuelve valores de una constante a un arreglo, ignora la asignación
//solo pone los valores en la matriz

const data = {
    frontEnd : 'Oscar',
    backEnd : 'Isabel',
    design : 'Ana'
}

const values = Object.values(data);

console.log(values);


//padding, agregar cadena vacía o elementos a un string, antes o después del string

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -------'));

//trailing commas, permite coma al final por si se agregan más elementos y no genera error

const obj = {
    name : 'Oscar',
}