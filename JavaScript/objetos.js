var miAuto = {
    marca: "Renault",
    modelo: "Captur",
    annio: 2018,
    detalleDelAuto: function() {
        console.log("Auto" + this.modelo + " " + this.annio);
    }
};

// llamar a una propiedad del objeto
miAuto.marca

//Llamar a una función dentro del objeto, aquí concatena modelo y año
miAuto.detalleDelAuto()

