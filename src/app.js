import "bootstrap";
import "./style.css";

window.onload = function() {
  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  const paloSeleccionado = palos[Math.floor(Math.random() * palos.length)];
  const numeroSeleccionado =
    numeros[Math.floor(Math.random() * numeros.length)];

  const paloArriba = document.querySelector(".palo-arriba");
  const numeroElemento = document.querySelector(".numero");
  const paloAbajo = document.querySelector(".palo-abajo");

  paloArriba.textContent = paloSeleccionado;
  numeroElemento.textContent = numeroSeleccionado;
  paloAbajo.textContent = paloSeleccionado;

  if (paloSeleccionado === "♥" || paloSeleccionado === "♦") {
    paloArriba.style.color = "red";
    paloAbajo.style.color = "red";
  }
};
