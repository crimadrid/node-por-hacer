let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
let completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', descripcion)
    .command('actualizar', 'actualiza el estado completado por una terea',
        descripcion,
        completado)
    .command('borrar', 'elimina una terea por hacer', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}