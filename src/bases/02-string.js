const nombre    = 'Carlos '
const apellido  = ' Ruiz'

//const nombreCompleto = nombre+', '+apellido
const nombreCompleto = `${nombre}, ${apellido}`

console.log(nombreCompleto)
console.log(`Resultado :${1 + 5}`)


function getSaludo(nombre) {
    return 'Hola '+ nombre
}

console.log(`Este es un Texto: ${getSaludo(nombre)}`)