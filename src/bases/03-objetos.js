const persona={
    nombre: 'Carlos ',
    apellido: 'Ruiz ',
    edad: 25,
    direccion: {
        pais: 'Colombia',
        ciudad: 'Pasto',

    }
}
//intentamos de crear dos usuarios con la misma clase 
// con la siguiente forma se reemplaza 
const persona2 = persona;//reemplaza el objeto creado
persona2.nombre = 'Peter';

// con el operador  spre o res {...persona} sepuede creaar mas usuarios con el mismo objeto
const persona3 = { ...persona }; //asigna un nuevo persona
persona3.nombre = 'Maria'

console.log(persona)
console.log(persona2)
console.log(persona3)