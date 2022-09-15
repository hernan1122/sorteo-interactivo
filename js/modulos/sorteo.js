const d = document;

export default function sorteoDos(input, agregar, ganador, jugadores) {
  // el signo $ dice que vamos a acceder al html
  const $input = d.getElementById(input),
    $agregar = d.getElementById(agregar),
    $ganador = d.getElementById(ganador),
    $jugadores = d.getElementById(jugadores);

  let jugadoresArray = [];

  const agregarJugadores = () => {
    const inputValue = $input.value;
    $input.focus();

    if (inputValue === "" || inputValue.length === 0) {
      /* alert("No has ingresado participantes"); */
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado participantes!',
        /* footer: '<a href="">Why do I have this issue?</a>' */
      })
    } else {
      jugadoresArray.push(inputValue);
      $jugadores.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);
      $input.value = "";
    }
  };
  const ganadorSorteo = () => {
    $input.focus();
    const random = Math.floor(Math.random() * jugadoresArray.length);
    const jugadorGanador = jugadoresArray[random];
    jugadoresArray = [];
    setTimeout(() => {
      $jugadores.innerHTML = "";
    }, 2000);
    /* alert(`El ganador es ${jugadorGanador}`); */
    Swal.fire({
        title: `El ganador es ${jugadorGanador}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
  };

  $agregar.addEventListener("click", () => {
    agregarJugadores();
  });
  $ganador.addEventListener("click", () => {
    if (jugadoresArray.length === 0) {
      /* alert("No has ingresado participantes"); */
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado participantes!',
        /* footer: '<a href="">Why do I have this issue?</a>' */
      })
    } else {
      ganadorSorteo();
    }
  });
}
