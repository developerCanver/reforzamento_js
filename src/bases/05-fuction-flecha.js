//function

// function saludar(xyz){
//     return 'Hola '+ xyz
// }


//FUNCION MAS SEGURA
const saludar = function saludar(xyz){
    return 'Hola '+ xyz
}


//FUNCIONES FLECHA
const saludarflecha = (xyz) => {
    return 'Hola '+ xyz
}

const saludarflecha2 = (xyz) =>  'Hola '+ xyz



const nombre = 'Carlos'
console.log(saludar(nombre))
console.log(saludarflecha2(nombre))


const getUser = () => {
    return {
        uid: 'ABc1',
        username: 'Carlos_1'
    }
}

const getUser2 = () => ( { uid: 'ABc1',  username : 'Carlos_1' })


console.log(getUser2())


const heroes =[
    {
    id: '1',
    name: 'Batman'  
    },
    {
    id: '2',
    name: 'Super Man'  
    },
]

//validar si existe con id == 1 con funcion flecha
//some recorre rodo el array jeroes.i
const existe =  heroes.some((heroe)=> heroe.id===1)
//const existe =  heroes.find((heroe)=> heroe.id==1)
console.log(existe)

