var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante) {
    console.log("Hola, " + estudiante);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

console.log("Otra forma con while");

while (estudiantes.length > 0 ) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}