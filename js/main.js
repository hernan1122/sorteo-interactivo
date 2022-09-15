import sorteoDos from "./modulos/sorteo.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  sorteoDos(
    "sorteo",
    "agregar-jugador",
    "ganador-btn-dos",
    "lista-jugadores"
  );
});