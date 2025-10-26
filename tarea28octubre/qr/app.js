let tablero = ["", "", "", "", "", "", "", "", ""];
let turno = "X";
let juegoTerminado = false;

function jugar(i) {
  if (tablero[i] === "" && !juegoTerminado) {
    tablero[i] = turno;
    document.getElementById("tablero").rows[Math.floor(i / 3)].cells[i % 3].textContent = turno;
    
    if (verificarGanador()) {
      document.getElementById("estado").textContent = "Gano " + turno;
      juegoTerminado = true;
    } else if (!tablero.includes("")) {
      document.getElementById("estado").textContent = "Empate";
      juegoTerminado = true;
    } else {
      turno = turno === "X" ? "O" : "X";
      document.getElementById("estado").textContent = "Turno de: " + turno;
    }
  }
}

function verificarGanador() {
  const combinaciones = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]           
  ];
  return combinaciones.some(([a,b,c]) => 
    tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]
  );
}

function reiniciar() {
  tablero = ["", "", "", "", "", "", "", "", ""];
  turno = "X";
  juegoTerminado = false;
  document.querySelectorAll("#tablero td").forEach(td => td.textContent = "");
  document.getElementById("estado").textContent = "Turno de: X";
}