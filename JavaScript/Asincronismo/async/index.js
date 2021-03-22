const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hacer algo asincrono'), 3000)
        : reject (new Error('Test error'))
    });
}

const doSomething = async () => {
    const sometThing = await doSomethingAsync();
    console.log(sometThing);
}

console.log('Before');
doSomething();
console.log('After');


const anotherFunction = async () => {
    try {
        const sometThing = await doSomethingAsync();
        console.log(sometThing);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');