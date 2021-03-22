//Junio 2018

//operador de reposo extrae propiedades de un objeto que aún no se ha construifo

const obj = {
    name: 'oscar',
    age: '32',
    country : 'CO',
};

let { name, ...all} = obj;
console.log(name, all);


//utilizar propiedades de propagación para unir varios objetos en uno solo

const obj = {
    nombre: 'Yovani',
    age: '40',
}

const obj1 = {
    ...obj,
    pais: 'CO',
}

console.log(obj1);

//promise.finally, saber cuando terminó un llamado y hacer algo
//también se puede sar con timeout

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hola Mundo')
        : reject (new Error('Hubo un error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo el proceso'))

//cómo agrupar bloques del regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(`Año = ${year}, Mes = ${month}, Día = ${day}`);
console.log(match);