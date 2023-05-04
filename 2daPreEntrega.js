let nombreUsuario = prompt('Por favor ingresa tu nombre y apellido: ')
let correoUsuario = prompt('Por favor ingresa tu correo: ')
let tlfUsuario = prompt('Por favor ingresa tu tlf: ')

let usuario = 
    { 
        nombre: nombreUsuario,
        correo: correoUsuario,
        tlf: tlfUsuario
    }

let inputTurno = prompt('Horarios disponibles 7:00, 8:00, 9:00, 10:00 AM: ')

let horariosDisponibles = [
    {
        hora: '7',
        disponibles: 0
    },
    {
        hora: '8',
        disponibles: 8
    },
    {
        hora: '9',
        disponibles: 6
    },
    {
        hora: '10',
        disponibles: 0
    },
]

let usuariosRegistrados = [
    { 
        nombre: 'lex monte',
        tlf: 1122223333,
        correo: 'lex@gmail.com'
    },
    {
        nombre: 'melldy monte',
        tlf: 1122223333,
        correo: 'melldy@gmail.com'
    },
    {
        nombre: 'buzy ferreira',
        tlf: 1122223333,
        correo: 'buzy@gmail.com'
    }
]

const poblarArrayDeUsuarios = (usuario) => {
    // agrego usuarios a la ddbb
    usuariosRegistrados.push(usuario)
    console.table(usuariosRegistrados)
}

poblarArrayDeUsuarios()

const revisarTurnosDisponibles = (horariosDisponibles) => {
    // busco solo los turnos disponibles en el array de turnos
    let turnosDisponibles = horariosDisponibles.filter(turno => turno.disponibles > 0)
    console.log('estos son los turnos disponibles')

    // esto podria listar en verde los turnos disponibles para el usuario
    // si no hay turnos disponibles, no los muestro o los pinto de rojo
    turnosDisponibles.forEach(element => {
        console.log(element)
    });
}

revisarTurnosDisponibles(horariosDisponibles)

const reservarTurno = (horariosDisponibles) => {

    let reservado = horariosDisponibles.find(hora => hora.hora === inputTurno)
    console.log(`hay ${reservado.disponibles} turnos disponibles en el horario de las ${reservado.hora}`)

    const restarTurnos = (reservado) => {
        if (reservado.disponibles > 0) {
            reservado.disponibles -= 1
            console.log(`quedan ${reservado.disponibles} disponibles en el horario de las ${reservado.hora} am`)
        } else {
            reservado.disponibles = 0
            console.log(`quedan ${reservado.disponibles} disponibles en el horario de las ${reservado.hora} am`)
        }
    }

    if ( reservado !== undefined && reservado !== null && reservado.disponibles > 0) {
        alert(`${usuario.nombre} turno resevado para las ${reservado.hora} am.`)
        console.log(`${usuario.nombre} turno resevado para las ${reservado.hora} am.`)
        restarTurnos(reservado)
    } else {
        alert(`${usuario.nombre} lo siento no disponemos turnos en ese horario!`)
        console.log(`${usuario.nombre} lo siento no disponemos turnos en ese horario!`)
    }
}

reservarTurno(horariosDisponibles)