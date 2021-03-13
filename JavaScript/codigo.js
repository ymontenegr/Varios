const modelos = ["Tesla", "Ford", "Renault"];
var modelosTesla = ["Model 3", "Model S", "Model X"];
var modelosFord = ["Mustang", "Explorer", "F-150"];
var modelosRenault = ["Captur", "Intense", "Kwid"];
var annios =[2016, 2017, 2018, 2019, 2020];
baseDatos = [];


function autosRegistro (marca, modelo, annio) {
    this.marca;
    this.modelo;
    this.annio;
}

function capturar() {
    var numRegistros = document.getElementById("myText").value;
    console.log("Numero registros = " + numRegistros);


for (let i = 0; i < numRegistros; i++) {
    var random = Math.floor(Math.random() * 3);

    if (random == 0) {
        this["nuevoRegistro"] = new autosRegistro(modelos[random], modelosTesla[Math.floor(Math.random() * 3)], annios[Math.floor(Math.random() * 4)]);
        baseDatos.push(this["nuevoRegistro"]);
        // document.getElementById("tabla").innerHTML += "<td>" + this["nuevoRegistro"].marca + "</td>" + "<td>" + this["nuevoRegistro"].modelo + "</td>" + "<td>" + this["nuevoRegistro"].annio + "</td>";
        
        document.getElementById("tabla").innerHTML += "<td>" + modelos[random] + "</td>" + "<td>" + modelosFord[Math.floor(Math.random() * 3)] + "</td>" + "<td>" + annios[Math.floor(Math.random() * 4)] + "</td>";

        /* console.log("Random = " + random);
        console.log("Valor this = " + this["nuevoRegistro"].log);
        console.log("Dato array = " + modelos[random]);
        console.log("Dato en autosRegistro = " + autosRegistro.marca); */


    }
    else if (random == 1) {
        this["nuevoRegistro"] = new autosRegistro(modelos[random], modelosFord[Math.floor(Math.random() * 3)], annios[Math.floor(Math.random() * 4)]);
        baseDatos.push(this["nuevoRegistro"]);
        //document.getElementById("tabla").innerHTML += "<td>" + this["nuevoRegistro"].marca + "</td>" + "<td>" + this["nuevoRegistro"].modelo + "</td>" + "<td>" + this["nuevoRegistro"].annio + "</td>";
        document.getElementById("tabla").innerHTML += "<td>" + modelos[random] + "</td>" + "<td>" + modelosFord[Math.floor(Math.random() * 3)] + "</td>" + "<td>" + annios[Math.floor(Math.random() * 4)] + "</td>";

       /*  console.log("Random = " + random);
        console.log("Valor this = " + this["nuevoRegistro"].log);
        console.log("Dato array = " + modelos[random]);
        console.log("Dato en autosRegistro = " + autosRegistro.marca); */
    }
    else {
        this["nuevoRegistro"] = new autosRegistro(modelos[random], modelosRenault[Math.floor(Math.random() * 3)], annios[Math.floor(Math.random() * 4)]);
        baseDatos.push(this["nuevoRegistro"]);
        //document.getElementById("tabla").innerHTML += "<td>" + this["nuevoRegistro"].marca + "</td>" + "<td>" + this["nuevoRegistro"].modelo + "</td>" + "<td>" + this["nuevoRegistro"].annio + "</td>";
        document.getElementById("tabla").innerHTML += "<td>" + modelos[random] + "</td>" + "<td>" + modelosFord[Math.floor(Math.random() * 3)] + "</td>" + "<td>" + annios[Math.floor(Math.random() * 4)] + "</td>";

        /* Console.log("Random = " + random);
        console.log("Valor this = " + this["nuevoRegistro"].log);
        console.log("Dato array = " + modelos[random]);
        console.log("Dato en autosRegistro = " + autosRegistro.marca); */
    }
}
}

