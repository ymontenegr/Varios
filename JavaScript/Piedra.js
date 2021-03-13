var op1 = "piedra";
var op2 = "papel";
var op3 = "tijeras";
var jugador1, jugador2 = "";

function validar(jugador1, jugador2) {
    if (jugador1 == op1 && jugador2 == op2) {
        console.log("Gana jugador 1");
    }
    else if (jugador1 == op1 && jugador2 == op3) {
        console.log("Gana jugador 1");
    }
    else if (jugador1 == op1 && jugador2 == op1) {
        console.log("Empate");
    }
    else if (jugador1 == op2 && jugador2 == op2) {
        console.log("Empate");
    }
    else if (jugador1 == op2 && jugador2 == op3) {
        console.log("Gana jugador 2");
    }
    else if (jugador1 == op2 && jugador2 == op1) {
        console.log("Gana jugador 1");
    }
    else if (jugador1 == op3 && jugador2 == op3) {
        console.log("Empate");
    }
    else if (jugador1 == op3 && jugador2 == op2) {
        console.log("Gana jugador 1");
    }
    else if (jugador1 == op3 && jugador2 == op1) {
        console.log("Gana jugador 2");
    }
    else {
        console.log("qué pasará");
    }
}
validar(piedra, papel);