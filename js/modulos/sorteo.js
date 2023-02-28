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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado participantes!',
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
    }, 6000);
    
    setTimeout(() => {
      Swal.fire({
        title: `El ganador es ${jugadorGanador}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }, 6000);
    
    //Contador
    const contador = d.getElementById('contador')
    const num = d.getElementById('numero');
    let numero = 5;

    const timer = setInterval(() => {
      if (!!jugadorGanador && !!numero) {
        contador.classList.remove('active');
        console.log(numero);
        num.innerHTML = `0${numero}`;
        numero--;
      } else if (!!jugadorGanador && numero == 0) {
        contador.classList.add('active');
        clearInterval(timer)
      }
    }, 1000);
  };

  $agregar.addEventListener("click", () => {
    agregarJugadores();
  });
  $ganador.addEventListener("click", () => {
    if (jugadoresArray.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has ingresado participantes!',
      })
    } else {
      ganadorSorteo();
    }
  });
}
