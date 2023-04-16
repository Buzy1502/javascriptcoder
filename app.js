let nombre_usuario = prompt('Ingresa tu nombre: ')
let apellido_usuario = prompt('Ingresa tu apellido')

const saludo = () => alert(`Saludos ${nombre_usuario} ${apellido_usuario}, reserva tu turno, por favor!`)

if ((nombre_usuario !== undefined && nombre_usuario !== "") && (apellido_usuario !== undefined &&apellido_usuario !== "")) {
    saludo()
    
    let turnoReservado = parseInt(prompt('Elige un horario: 7, 8, 9, 10 AM: '))

    switch (turnoReservado !== undefined && turnoReservado == isNaN(turnoReservado)) {
        case turnoReservado == 7: alert(`${nombre_usuario}, turno reservado para las ${turnoReservado}`)
        break;
        case turnoReservado == 8: alert(`${nombre_usuario}, turno reservado para las ${turnoReservado}`)
        break;
        case turnoReservado == 9: alert(`${nombre_usuario}, turno reservado para las ${turnoReservado}`)
        break;
        case turnoReservado == 10: alert(`${nombre_usuario}, turno reservado para las ${turnoReservado}`)
        break;
        default: alert('No pudimos hacer tu reserva, intenta de nuevo!')
    }
} else {
    alert('No pudimos hacer tu  reserva, hasta luego!')
}