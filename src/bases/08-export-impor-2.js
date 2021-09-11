//Importacion y exportaciones 
import {owners} from './data/heroes'


import superHeroes from './data/heroes'


import { getHeroesByOwner }  from './bases/08-imp-exp-buscar'
import { getHeroId} from './bases/08-imp-exp-buscar'


console.log(getHeroesByOwner('Flash'))
console.log(getHeroId(2))

