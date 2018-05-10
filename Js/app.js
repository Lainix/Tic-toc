var play = function(event){
    console.log("hola")
    console.log(event.target)   // elemento del html que esta desencadenando el evento 
    var target = event.target;

    if(juego.turno === 0){
        // jugador1
        target.textContent = juego.ficha1;
        juego.turno = 1;
        juego.jugadorActual = juego.jugador1;
        checkBoard();
    }else {
        // jugador2
        target.textContent = juego.ficha2;
        juego.turno = 0;
        juego.jugadorActual = juego.jugador2;
        checkBoard();
    }
    target.removeEventListener("click",play);
    document.getElementById("jugador-actual").textContent = juego.jugadorActual;
    juego.movimientos += 1;
};

var checkBoard = function(){

};

var getPlayers = function(event){
    console.log(event)
    event.preventDefault();// evita que recarges la paguina 
    juego.jugador1 = document.getElementById("jugador1").value;
    juego.jugador2 = document.getElementById("jugador2").value;
};

var juego = {
    jugador1:"jugador1",
    jugador2:"jugador2",
    turno: 0,
    ficha1:"X",
    ficha2:"O",
    movimientos:0,
    jugadorActual:"",
}

var botonInput = document.getElementsByTagName("button")[0];
// console.log("botones",botonInput);
botonInput.addEventListener("click",getPlayers);
var celdas = document.getElementsByTagName("td");

console.log(celdas);
Array.from(celdas).map(function(cell){
    console.log(cell);
    cell.addEventListener("click",play);
});
