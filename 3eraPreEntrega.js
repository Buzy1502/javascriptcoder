// capturo el div contenedor de la lista de turnos
let listTurnos = document.getElementById('list-group')

// este arreglo funciona como ddbb
let turnosDisponibles = [
    {
        hora: '7:00',
        turnosDispo: 10,
        direccion: 'Av. Mosconi 3234',
        modalidad: 'Presencial',
        id: 1
    },
    {
        hora: '8:00',
        turnosDispo: 20,
        direccion: 'Av. Mosconi 3234',
        modalidad: 'Presencial',
        id: 2
    },
    {
        hora: '9:00',
        turnosDispo: 0,
        direccion: 'Av. Mosconi 3234',
        modalidad: 'Presencial',
        id: 3
    },
    {
        hora: '10:00',
        turnosDispo: 5,
        direccion: 'Av. Mosconi 3234',
        modalidad: 'Presencial',
        id: 4
    },
]

const revisarTurnosDisponibles = (turnosDisponibles) => {
    // busco solo los turnos disponibles en el array de turnos

    let cardTurnos = ''
    listTurnos.innerHTML = ""

    // recorro el array de turnos y genero el html con el contenido de forma dinamica
    // desestructuro el array de turnos y uso interpolación
    turnosDisponibles.forEach(({ turnosDispo, hora, direccion, modalidad, id }) => {
        cardTurnos = cardTurnos += `
            <div class="list-group-item list-group-item-action carta" data-id="${id}">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><b>Functional / Crossfit</b></h5>
                </div>
                <p class="mb-1">${direccion}</p>
                <p class="mb-1">${modalidad}</p>
                <small class="badge rounded-pil bg-primary">Hora: ${hora} am</small>
                <small class="badge rounded-pil pillTurno bg-secondary">Turnos disponibles: ${turnosDispo}</small>
            </div>
        `;
    })

    listTurnos.innerHTML = cardTurnos

    let cardTurno = document.querySelectorAll('.carta')

    // recorro el arreglo de elementos que de devuelve querySelectorAll y genero el evento para swal
    cardTurno.forEach(card => {
        card.addEventListener('click', (e) => {

            let idTurno = +card.dataset.id

            console.log(idTurno)

            Swal.fire({
                title: 'Agendar un turno',
                text: 'Reserva turnos sin registrarte',
                confirmButtonText: 'Reservar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
            })
                .then((resultado) => {
                    if (resultado.isConfirmed) {

                        // aqui deberia llamar a la función de restar turnos

                        let index = turnosDisponibles.findIndex(ele => ele.id == idTurno)
                        
                        // revisar validacion
                        turnosDisponibles[index].turnosDispo--;

                        revisarTurnosDisponibles(turnosDisponibles)

                        Swal.fire({
                            title: 'Reservado!',
                            icon: 'success',
                            confirmButtonText: 'Continuar'
                        })
                    }
                })
        })
    })
}

// llamo a la función para generar el DOM
revisarTurnosDisponibles(turnosDisponibles)