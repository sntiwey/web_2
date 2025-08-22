console.log("Hola profesor como esta?");

console.log("Aqui se vera las veces que es true y las veces que es false.");

document.getElementById("btnSi").onclick = function() {
  document.getElementById("respuesta").textContent = "Pues ñao, nunca he reprobado ninguna materia...";
  document.getElementById("respuesta").style.color = "red";
  console.log(false);
};

document.getElementById("btnNo").onclick = function() {
  document.getElementById("respuesta").textContent = "Pues correcto, nunca he tenido que repetir alguna materia";
  document.getElementById("respuesta").style.color = "green";
  console.log(true);
};
