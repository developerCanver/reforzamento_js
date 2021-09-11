//Importacion y exportaciones 

// ./ busca donde esta el archivo que se hace la importaion
import {owners} from '../data/heroes'

//console.log(owners)

import superHeroes from '../data/heroes'

//console.log(superHeroes)


//ENCONTRAR EL HERUE SEGUN EL ID

// const  getHeroId  = (id)  =>{
// return superHeroes.find(herue => herue.id === id)
// }

//funcion flecha
export const  getHeroId  = (id)  => superHeroes.find(herue => herue.id === id)
//console.log(getHeroId(1))

// ENCONTRAR EN EL OBJETO HERUES SEGUN LOS NOMBRE SUPERMAN
const getHeroesByName = (name) => {
    return superHeroes.filter(herue => herue.name === name)
}
//console.log(getHeroesByName('Flash'))


// ENCONTRAR EN EL OBJETO HERUES SEGUN LLOS HERUES
export const getHeroesByOwner = (owner) => {
    return superHeroes.filter(herue => herue.owner === owner)
}

//console.log(getHeroesByOwner('DC'))


// export default getHeroesByOwner;
// export default getHeroId;