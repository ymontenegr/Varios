function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || '40';
    var country = country || 'CO';
    console.log(name, age, country);
}

//es6

function newFunction2 (name = 'Oscar', age = '40', country = 'CO') {
    console.log(name, age, country);
};

newFunction2('Isabella', '14', 'CO');

//template literals, permite unir varios elementos

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multilinea

let lorem = "línea de texto para Isabella\n"
+ "Segunda línea de texto"

console.log(lorem);

let lorem2 = `Línea de texto para Isabella.
Segunda línea de texto`;

console.log(lorem2);

//estructuración

let person = {
    'name' : 'Isabella',
    'age' : '14',
    'country' : 'CO',
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person;

console.log(name, age);

//operador de propagación, para expandir varios elementos, unir arreglos

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];

console.log(education);

//con var la variable está scope = global, con let scope = local

//asignación directa variables a un objeto

let name = 'Isabella';
let age = 32;

//ES5
obj = { name = name, age = age};

//ES6
obj2 = {name, age};

//Arrow function

const names = [
    {name: 'Isabella', age: '14'},
    {name: 'Gabriela', age: '10'}
]

//de esta forma se pasaba una función anónima
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //bloque de código
}

const listOfNames4 = name => {
    //bloque de código
}

//crea función que recibe un número y lo retorna por asignación directa
const square = num => num * num;

//Promesas, arregla el callback hell
//Promesa = algo va a pasar

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve ('Funciona bien');
        } else {
            reject ('Hubo un error');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
